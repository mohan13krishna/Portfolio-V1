import { NextResponse } from 'next/server'
import { MongoClient } from 'mongodb'

let client
let db

async function connectToDatabase() {
  if (!client) {
    client = new MongoClient(process.env.MONGO_URL)
    await client.connect()
    db = client.db(process.env.DB_NAME || 'portfolio')
  }
  return db
}

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Connect to database
    const database = await connectToDatabase()
    const collection = database.collection('contacts')

    // Create contact document
    const contactData = {
      name,
      email,
      subject,
      message,
      timestamp: new Date(),
      status: 'new'
    }

    // Insert contact into database
    const result = await collection.insertOne(contactData)

    return NextResponse.json(
      { 
        message: 'Contact form submitted successfully',
        id: result.insertedId 
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    // Connect to database
    const database = await connectToDatabase()
    const collection = database.collection('contacts')

    // Get all contacts (for admin purposes)
    const contacts = await collection.find({}).sort({ timestamp: -1 }).toArray()

    return NextResponse.json(contacts)
  } catch (error) {
    console.error('Get contacts error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

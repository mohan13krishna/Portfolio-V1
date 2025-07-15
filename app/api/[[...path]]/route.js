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

export async function GET(request, { params }) {
  try {
    // Default API endpoint
    if (!params.path || params.path.length === 0) {
      return NextResponse.json({ 
        message: 'Portfolio API is running! 🚀',
        endpoints: [
          'GET /api - API status',
          'POST /api/contact - Contact form submission',
          'GET /api/contact - Get all contacts'
        ]
      })
    }

    return NextResponse.json({ 
      error: 'Endpoint not found',
      availableEndpoints: [
        'GET /api - API status',
        'POST /api/contact - Contact form submission'
      ]
    }, { status: 404 })

  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request, { params }) {
  try {
    return NextResponse.json({ 
      error: 'POST method not supported on this endpoint' 
    }, { status: 405 })
  } catch (error) {
    console.error('API POST error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

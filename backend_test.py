#!/usr/bin/env python3

import requests
import json
import sys
from datetime import datetime

# Base URL from environment
BASE_URL = "Give Your URL"

def test_main_api_endpoint():
    """Test the main API endpoint GET /api"""
    print("\n=== Testing Main API Endpoint ===")
    
    try:
        response = requests.get(f"{BASE_URL}/api", timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 200:
            data = response.json()
            if "message" in data and "endpoints" in data:
                print("✅ Main API endpoint working correctly")
                return True
            else:
                print("❌ Main API endpoint response missing required fields")
                return False
        else:
            print(f"❌ Main API endpoint returned status {response.status_code}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ Main API endpoint request failed: {e}")
        return False
    except json.JSONDecodeError as e:
        print(f"❌ Main API endpoint returned invalid JSON: {e}")
        return False

def test_main_api_post_method():
    """Test POST method on main API endpoint (should return 405)"""
    print("\n=== Testing Main API POST Method ===")
    
    try:
        response = requests.post(f"{BASE_URL}/api", json={"test": "data"}, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 405:
            data = response.json()
            if "error" in data:
                print("✅ Main API POST method correctly returns 405")
                return True
            else:
                print("❌ Main API POST method response missing error field")
                return False
        else:
            print(f"❌ Main API POST method should return 405, got {response.status_code}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ Main API POST request failed: {e}")
        return False
    except json.JSONDecodeError as e:
        print(f"❌ Main API POST returned invalid JSON: {e}")
        return False

def test_invalid_api_endpoint():
    """Test invalid API endpoint (should return 404)"""
    print("\n=== Testing Invalid API Endpoint ===")
    
    try:
        response = requests.get(f"{BASE_URL}/api/invalid-endpoint", timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 404:
            data = response.json()
            if "error" in data and "availableEndpoints" in data:
                print("✅ Invalid API endpoint correctly returns 404")
                return True
            else:
                print("❌ Invalid API endpoint response missing required fields")
                return False
        else:
            print(f"❌ Invalid API endpoint should return 404, got {response.status_code}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ Invalid API endpoint request failed: {e}")
        return False
    except json.JSONDecodeError as e:
        print(f"❌ Invalid API endpoint returned invalid JSON: {e}")
        return False

def test_contact_form_valid_submission():
    """Test contact form with valid data"""
    print("\n=== Testing Contact Form - Valid Submission ===")
    
    test_data = {
        "name": "Mohan Krishna Thalla",
        "email": "mohan.thalla@example.com",
        "subject": "Portfolio Website Inquiry",
        "message": "Hello! I'm interested in discussing a potential collaboration on a full-stack development project. Your portfolio showcases impressive skills in React, Node.js, and AI integration."
    }
    
    try:
        response = requests.post(f"{BASE_URL}/api/contact", json=test_data, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 201:
            data = response.json()
            if "message" in data and "id" in data:
                print("✅ Contact form valid submission working correctly")
                return True, data.get("id")
            else:
                print("❌ Contact form response missing required fields")
                return False, None
        else:
            print(f"❌ Contact form should return 201, got {response.status_code}")
            return False, None
            
    except requests.exceptions.RequestException as e:
        print(f"❌ Contact form request failed: {e}")
        return False, None
    except json.JSONDecodeError as e:
        print(f"❌ Contact form returned invalid JSON: {e}")
        return False, None

def test_contact_form_missing_fields():
    """Test contact form with missing required fields"""
    print("\n=== Testing Contact Form - Missing Fields ===")
    
    test_data = {
        "name": "John Doe",
        "email": "john@example.com"
        # Missing subject and message
    }
    
    try:
        response = requests.post(f"{BASE_URL}/api/contact", json=test_data, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 400:
            data = response.json()
            if "error" in data and "required" in data["error"].lower():
                print("✅ Contact form missing fields validation working correctly")
                return True
            else:
                print("❌ Contact form error message doesn't mention required fields")
                return False
        else:
            print(f"❌ Contact form should return 400 for missing fields, got {response.status_code}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ Contact form missing fields request failed: {e}")
        return False
    except json.JSONDecodeError as e:
        print(f"❌ Contact form missing fields returned invalid JSON: {e}")
        return False

def test_contact_form_invalid_email():
    """Test contact form with invalid email format"""
    print("\n=== Testing Contact Form - Invalid Email ===")
    
    test_data = {
        "name": "Jane Smith",
        "email": "invalid-email-format",
        "subject": "Test Subject",
        "message": "Test message content"
    }
    
    try:
        response = requests.post(f"{BASE_URL}/api/contact", json=test_data, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 400:
            data = response.json()
            if "error" in data and "email" in data["error"].lower():
                print("✅ Contact form invalid email validation working correctly")
                return True
            else:
                print("❌ Contact form error message doesn't mention email validation")
                return False
        else:
            print(f"❌ Contact form should return 400 for invalid email, got {response.status_code}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ Contact form invalid email request failed: {e}")
        return False
    except json.JSONDecodeError as e:
        print(f"❌ Contact form invalid email returned invalid JSON: {e}")
        return False

def test_get_contacts():
    """Test retrieving contacts from database"""
    print("\n=== Testing Get Contacts ===")
    
    try:
        response = requests.get(f"{BASE_URL}/api/contact", timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response length: {len(response.text)} characters")
        
        if response.status_code == 200:
            data = response.json()
            if isinstance(data, list):
                print(f"✅ Get contacts working correctly - Retrieved {len(data)} contacts")
                if len(data) > 0:
                    # Check if the contact has expected fields
                    contact = data[0]
                    required_fields = ["name", "email", "subject", "message", "timestamp"]
                    if all(field in contact for field in required_fields):
                        print("✅ Contact data structure is correct")
                        return True
                    else:
                        print("❌ Contact data missing required fields")
                        return False
                else:
                    print("✅ Get contacts working (empty list)")
                    return True
            else:
                print("❌ Get contacts should return an array")
                return False
        else:
            print(f"❌ Get contacts should return 200, got {response.status_code}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ Get contacts request failed: {e}")
        return False
    except json.JSONDecodeError as e:
        print(f"❌ Get contacts returned invalid JSON: {e}")
        return False

def test_mongodb_connection():
    """Test MongoDB connection by attempting to submit and retrieve data"""
    print("\n=== Testing MongoDB Connection ===")
    
    # First submit a test contact
    test_data = {
        "name": "Database Test User",
        "email": "dbtest@example.com",
        "subject": "MongoDB Connection Test",
        "message": "This is a test message to verify MongoDB connectivity and data persistence."
    }
    
    try:
        # Submit contact
        submit_response = requests.post(f"{BASE_URL}/api/contact", json=test_data, timeout=10)
        if submit_response.status_code != 201:
            print("❌ Failed to submit test contact for MongoDB test")
            return False
        
        # Retrieve contacts to verify persistence
        get_response = requests.get(f"{BASE_URL}/api/contact", timeout=10)
        if get_response.status_code != 200:
            print("❌ Failed to retrieve contacts for MongoDB test")
            return False
        
        contacts = get_response.json()
        # Look for our test contact
        test_contact_found = False
        for contact in contacts:
            if (contact.get("email") == "dbtest@example.com" and 
                contact.get("subject") == "MongoDB Connection Test"):
                test_contact_found = True
                break
        
        if test_contact_found:
            print("✅ MongoDB connection and data persistence working correctly")
            return True
        else:
            print("❌ Test contact not found in database - persistence issue")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ MongoDB connection test failed: {e}")
        return False
    except json.JSONDecodeError as e:
        print(f"❌ MongoDB connection test returned invalid JSON: {e}")
        return False

def run_all_tests():
    """Run all backend tests and return results"""
    print("🚀 Starting Backend API Tests")
    print(f"Base URL: {BASE_URL}")
    print("=" * 50)
    
    results = {}
    
    # Test main API endpoint
    results["main_api_get"] = test_main_api_endpoint()
    results["main_api_post"] = test_main_api_post_method()
    results["invalid_endpoint"] = test_invalid_api_endpoint()
    
    # Test contact form API
    results["contact_valid"], contact_id = test_contact_form_valid_submission()
    results["contact_missing_fields"] = test_contact_form_missing_fields()
    results["contact_invalid_email"] = test_contact_form_invalid_email()
    results["get_contacts"] = test_get_contacts()
    
    # Test MongoDB connection
    results["mongodb_connection"] = test_mongodb_connection()
    
    # Summary
    print("\n" + "=" * 50)
    print("📊 TEST RESULTS SUMMARY")
    print("=" * 50)
    
    passed = 0
    total = len(results)
    
    for test_name, result in results.items():
        status = "✅ PASS" if result else "❌ FAIL"
        print(f"{test_name}: {status}")
        if result:
            passed += 1
    
    print(f"\nOverall: {passed}/{total} tests passed")
    
    if passed == total:
        print("🎉 All backend tests passed!")
        return True
    else:
        print("⚠️  Some backend tests failed")
        return False

if __name__ == "__main__":
    success = run_all_tests()
    sys.exit(0 if success else 1)

Backend Service for CPU Usage Data
Overview
This backend service provides a simple API for managing  CPU usage data. It supports creating new records of CPU usage and fetching existing records. This document outlines the API endpoints, their usage, and examples.

Requirements
Node.js
Express
MongoDB
Setup

Install MongoDBCompass:
MONGO_URI=mongodb://localhost:27017/systemStats


Clone the repository:
sh
Copy code
git clone https://github.com/swathidevdynamo/statsService.git
cd statsService
npm install
npm start
The server will start on the port specified in the .env file.

API Endpoints
1. Create CPU Usage Record
URL: /api/create - POST (Description: Creates a new system usage record.)


URL : /api/stats - GET (Description: Fetches all CPU usage records..)





License
This project is licensed under the MIT License.


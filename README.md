# HNG12 Public API

## Overview  
The Number Classification API analyzes a given number and returns its mathematical properties along with a fun fact. It determines whether the number is:  

## Features
Return JSON containing the properties of a number which inludes the following
- **Prime** or **Perfect**  
- **Armstrong** or **Not**  
- **Even** or **Odd** 
- **Digit Sum**  
- **Fun Fact** (via [Numbers API](http://numbersapi.com/#42))

## Tech Stack
- **Node.js** with **Express.js**
- **AXIOS** for making AJAX request to **Numbers API**
- **Compression** for Gzip compression
- **CORS** for handling cross-origin requests

## Setup Instructions
### Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed.

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/Sicario2610/hng-stage0.git
   cd hng-stage0
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the server:
   ```sh
   npm run dev

## API Documentation
### Endpoint: `GET `
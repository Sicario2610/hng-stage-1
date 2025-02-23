# Number Classification API

This API takes a number as input and returns its mathematical properties along with a fun fact.

## 🚀 Features
- Checks if the number is **prime** or **perfect**.
- Determines if the number is **odd** or **even**.
- Identifies **Armstrong numbers**.
- Calculates the **digit sum**.
- Fetches a **fun fact** about the number.

## TECH STACK 
- **Node.js (Express.js)**
- **Axios** (for fetching fun facts)
- **CORS** (for handling cross-origin requests)
- **Compression** (for reducing API response payload size to increase API response speed)
- Deployed on: (**Vercel**)

## Setup Instructions
### Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed.

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/Sicario2610/hng-stage-1.git
   ```

2. Navigate to the project directory:
    ```sh
   cd ABDULRASHEED aBDULBASIT HNG 12 TASK 1
   ```

3. Install dependencies:
   ```sh
   npm install
   ```
   
4. Start the server:
   ```sh
   npm run dev
   ```

## 📌 API Endpoint
### `GET /api/classify-number`
**Query Parameter:**  
- `number` (integer, required): The number to classify.

**Example Request:**  
### `GET http://127.0.0.1:3000/api/classify-number?number=371`


**Example Response (`200 OK`):**
```json
{
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": [
        "armstrong",
        "odd"
    ],
    "digit_sum": 11,
    "fun_fact": "371 is a narcissistic number."
}
```

**Example Response (`400 Bad Request`):**
```json
{
    "number": "abc",
    "error": true
}
```

## Deployment
The API is publicly accessible at: [https://abdulrasheed-abdulbasit-hng-12-task-1-7kpbe89bj.vercel.app/api/classify-number](https://abdulrasheed-abdulbasit-hng-12-task-1-7kpbe89bj.vercel.app/api/classify-number)
 
## Backlink
Looking to hire skilled Node.js developers for your next project? Check out the HNG developer talent pool:
[Hire Node.js Developers](https://hng.tech/hire/nodejs-developers)
This link directs you to the HNG Hiring Platform, where you can find talented backend developers specializing in **Node.js, Express.js, and API development**. 



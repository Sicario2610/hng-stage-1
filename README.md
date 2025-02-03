# Number Classification API

This API takes a number as input and returns its mathematical properties along with a fun fact.

## 🚀 Features
- Checks if the number is **prime** or **perfect**.
- Determines if the number is **odd** or **even**.
- Identifies **Armstrong numbers**.
- Calculates the **digit sum**.
- Fetches a **fun fact** about the number.

## 📌 API Endpoint
### `GET /api/classify-number`
**Query Parameter:**  
- `number` (integer, required): The number to classify.

**Example Request:**  
### `GET http://127.0.0.1:3000/api/classify-number?number=371`


**Example Response (`200 OK`):**
```json
{
    "number": "371",
    "is_prime": false,
    "is_perfect": false,
    "properties": [
        "armstrong",
        "odd"
    ],
    "digit_sum": 11,
    "fun_fact": "371 is a narcissistic number."
}


**Example Response (`200 OK`):**
```json
{
    "number": "abc",
    "error": true
}


## TECH STACK 

-
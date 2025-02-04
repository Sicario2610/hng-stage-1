// Axios library to send request to Numbers API
const axios = require("axios");

// Importing functions to check for prime, perfect number, digit sum, and properties
const { isPrime, isPerfect, digitSum, getProperties } = require("../utils/numberUtils");

// Define the main function to analyze the number
const analyszeNumber = async (req, res) => {
    try {
        // Get the number from the query parameter
        const { number } = req.query;
        
        // Convert the string 'number' to an integer
        const num = parseInt(number, 10);

        // Validate input: check if number is provided and is a valid integer
        if (!number || isNaN(number) || !Number.isInteger(Number(number))) {
            return res.status(400).json({ number: number, error: true });
        }

        // Make a request to the Numbers API to get a fun fact about the number
        const funFactResponse = await axios.get(`http://numbersapi.com/${num}/math?json`);
        
        // Extract the fun fact text from the API response
        const funFact = funFactResponse.data.text;

        // Send a response containing all the analysis about the number
        res.status(200).json({
            num,
            is_prime: isPrime(num),
            is_perfect: isPerfect(num),
            properties: getProperties(num),
            digit_sum: digitSum(num),
            fun_fact: funFact
        });
    } catch (error) {
        // Incase of an error with the logic, return an error message 
        res.status(500).json({
            error: true,
            message: error.message
        });
    }
};


module.exports = analyszeNumber;

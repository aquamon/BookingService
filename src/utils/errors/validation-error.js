const e = require('express');
const {StatusCodes} = require('http-status-codes');

class ValidationError extends Error{
    constructor(error){
        super();
        let explanation = [];
        error.errors.forEach(err => {
            explanation.push(err.message);
        });
        this.name = 'ValidationError';
        this.message = 'Not Able to Validate the Data Sent in the Request';
        this.explanation = explanation;
        this.statusCode = statusCode;
    }
}

module.exports = ValidationError;
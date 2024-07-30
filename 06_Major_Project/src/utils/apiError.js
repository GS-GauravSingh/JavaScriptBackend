class ApiError extends Error{

    // Constructor
    constructor(statusCode, message = "Something went wrong", errors = [], errorStack = ""){

        // JavaScript Functionality: Calling the constructor of parent class.
        super();

        this.statusCode = statusCode;
        this.message = message;
        this.success = false;
        this.data = null;
        this.errors = errors;

        if(errorStack)
        {
            this.stack = errorStack;
        }
        else{
            Error.captureStackTrace(this, this.constructor);
        }
    }
};

export { ApiError };
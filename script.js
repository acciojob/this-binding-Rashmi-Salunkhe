// Implementing myCall
Function.prototype.myCall = function(thisContext, ...args) {
    thisContext.fn = this; // Assign the function to the context
    const result = thisContext.fn(...args); // Call the function with the provided arguments
    delete thisContext.fn; // Clean up the temporary property
    return result;
};

// Implementing myApply
Function.prototype.myApply = function(thisContext, args) {
    thisContext.fn = this; // Assign the function to the context
    const result = thisContext.fn(...args); // Spread the args array as arguments
    delete thisContext.fn; // Clean up the temporary property
    return result;
};

// Implementing myBind
Function.prototype.myBind = function(thisContext, ...args) {
    const fn = this; // Store the original function reference
    return function(...newArgs) {
        return fn.myCall(thisContext, ...args, ...newArgs); // Combine old and new arguments
    };
};

module.exports = Function.prototype;

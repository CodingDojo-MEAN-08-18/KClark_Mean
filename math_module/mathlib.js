module.exports = function() {
    return {
        add: function(num1, num2) { 
            console.log(`Sum of ${num1} and ${num2}: `, num1 + num2); 
        },
        multiply: function(num1, num2) {
            console.log(`Product of ${num1} and ${num2}: `, num1 * num2);
        },
        square: function(num) {
            console.log(`Square of ${num}: `, num * num);
        },
        random: function(num1, num2) {
            console.log(`Random number between ${num1} and ${num2}: `, Math.floor(Math.random() * (num2 - num1) ) + num1);
        }
    }
};
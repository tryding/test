const calculator = {
    returnValue: 0,
    addition: function(num1, num2 = this.returnValue) 
    {
        this.returnValue = num1 + num2;
        return this.returnValue
    },
    subtraction: function(num1, num2 = this.returnValue) 
    {
        this.returnValue = num2 - num1
        return this.returnValue
    },
    multiplication: function(num1, num2 = this.returnValue) 
    {
        this.returnValue = num1 * num2
        return this.returnValue
    },
    division: function(num1, num2 = this.returnValue) 
    {
        this.returnValue = num2 / num1
        return this.returnValue
    },
    clearCalc: function() {
        this.returnValue = 1
        return this.returnValue
    }
}

console.log(calculator.addition(5+5))

console.log(calculator.subtraction(1))

console.log(calculator.division(3))

console.log(calculator.multiplication(25))

console.log(calculator.clearCalc())


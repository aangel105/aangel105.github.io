var x= prompt('enter a mathematical operator follow by two number')

var readline = require('readline')
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  

rl.on('line', function(input) {
   
    var num = Number(input)
   
    if (isNaN(num)) {
      console.log('that is not a valid number')
    } else {
      console.log('your input was the number: ' + num)
    }
  })

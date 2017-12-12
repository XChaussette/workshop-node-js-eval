exports.run = function(input) {
  var operator={
    "add": '+',
      "substract":'-'
    };
  result=input;
 for(i=0;i<input.length;i++)
  {
    if(input[i]==operator.add)
    {
      result=result+input[i+1];
     console.log('operator: '+'add'+', value: '+input[i+1])
    }
    if(input[i]==operator.substract)
    {
        result=result-input[i+1]
        console.log('operator: '+'substract'+', value: '+input[i+1])
    }
    return result;
  }
  console.log("Exercise #3");
};

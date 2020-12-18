// generate a randomnum range from minNum to maxNum
function RandomNum(minNum, maxNum){
  switch(arguments.length){ 
    case 1: 
        return parseInt(Math.random()*minNum+1,10); 
    case 2: 
        return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
    default: 
        return 0; 
  }
}

// judge if the divide expression is valid
function JudgeDivide(num1, num2){
  return (num1%num2)?false:true;
}

// generate dividable number
function GenerateDiv()
{
  var num1 = RandomNum(1,81)
  var num2 = RandomNum(1,9)
  while((!JudgeDivide(num1,num2)) || ((num1/num2) >= 10)){
    num1 = RandomNum(1,81)
    num2 = RandomNum(1,9)
  }
  return {
    num1:num1,
    opt:3,
    num2:num2
  }
}

// calculate result
function CalResult(num1,operator,num2){
  switch (operator) {
    case 0:
      return num1+num2
    case 1:
      return num1-num2
    case 2:
      return num1*num2
    case 3:
      return num1/num2
    default:
      return 0
  }
}

function MixComputing(num1,operator1,num2,operator2,num3){
  var priority = 
  [ //       +  -  *  /
    /* + */ [0, 0,-1,-1],
    /* - */ [0, 0,-1,-1],
    /* * */ [1, 1, 0, 0],
    /* / */ [1, 1, 0, 0]
  ]
  if(priority[operator1][operator2] < 0){
    num2 = CalResult(num2,operator2,num3)
    return {
      num1:num1,
      opt:operator1,
      num2:num2
    }
  }
  else{
    num2 = CalResult(num1,operator1,num2)
    return {
      num1:num2,
      opt:operator2,
      num2:num3}
  }
}

// convert operator into string
function OptToString(opt){
  switch (opt) {
    case 0:
      return '+'
    case 1:
      return '-'
    case 2:
      return 'X'
    case 3:
      return '÷'
    default:
      break;
  }
}

//generate a question decided by the type
function GenerateQuestion(type){
  switch (type) {
    case 1: 
      var num1 = RandomNum(0,10)
      var operator = RandomNum(0,1)
      switch (operator) {
        case 0: 
          var num2 = RandomNum(0,10 - num1)
          break
        case 1:
          var num2 = RandomNum(0,num1)
          break
        default:
          break
      }
      break
    case 2:
      var num1 = RandomNum(10,20)
      var operator = RandomNum(0,1)
      switch (operator) {
        case 0:
          var num2 = RandomNum(0,20 - num1)
          break
        case 1:
          var num2 = RandomNum(0,num1)
          break
        default:
          break
      }
      break
    case 3:
      var num1 = RandomNum(20,100)
      var operator = RandomNum(0,1)
      switch (operator) {
        case 0:
          var num2 = RandomNum(0,100 - num1)
          break
        case 1:
          var num2 = RandomNum(0,num1)
          break
        default:
          break
      }
      break
    case 4:
      var num1 = RandomNum(1,9)
      var num2 = RandomNum(1,9)
      var operator = 2
      break
    case 5:
      var obj = GenerateDiv()
      var num1 = obj.num1
      var operator = obj.opt
      var num2 = obj.num2
      break
    // unsolved mixed computing
    case 6:
      var num1 = RandomNum(1,100)
      var num2 = RandomNum(1,100)
      var num3 = RandomNum(1,100)
      var operator1 = RandomNum(0,3)
      if(operator1 == 3){
        var obj = GenerateDiv()
        var num1 = obj.num1
        var num2 = obj.num2
      }
      var operator2 = RandomNum(0,3)
      var obj = MixComputing(num1,operator1,num2,operator2,num3)
      num1 = obj.num1
      var operator = obj.opt
      num2 = obj.num2
      break
    case 7:
      var num1 = RandomNum(1,100)
      var operator = RandomNum(0,1)
      switch (operator) {
        case 0:
          var num2 = RandomNum(1,100 - num1)*(10**RandomNum(0,2))
          num1 = num1 *(10**RandomNum(0,2))
         break
        case 1:
          var num2 = RandomNum(0,num1)
          break
        default:
          break
      }
      break
    case 8:
      var num1 = RandomNum(0,200)
      var num2 = RandomNum(0,9)
      break
    case 9:
      var operator = RandomNum(2,3)
      switch (operator) {
        case 2:
          var num1 = RandomNum(10,99)
          var num2 = RandomNum(1,9)*(10**RandomNum(0,1))
          break
        case 3:
          var num1 = RandomNum(12,99)*(10**RandomNum(0,2))
          var num2 = RandomNum(1,9)
          while(!JudgeDivide(num1,num2)){
            num1 = RandomNum(12,99)*(10**RandomNum(0,2))
            num2 = RandomNum(1,9)
          }
          break
        default:
          break
      }
      break
    default:
      window.alert("Error: Expression generate error!\n")
      return
  }
  var question = {
    question_type:type,
    expression:String(num1) + OptToString(operator) + String(num2) + "=",
    result:CalResult(num1,operator,num2)
  }
  return question
}

while(true){
  console.log(GenerateQuestion(RandomNum(1,9)))
}
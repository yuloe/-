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

//generate a question decided by the type
function GenerateQuestion(type){
  switch (type) {
    case 1: 
      var num1 = RandomNum(0,10)
      var operator = RandomNum(0,1)
      switch (operator) {
        case 0: 
          var num2 = RandomNum(0,10 - num1)
          var question = {
            question_type:type,
            expression:String(num1) + "+" + String(num2) + "=",
            result:num1+num2
          }
          return question
        case 1:
          var num2 = RandomNum(0,num1)
          var question = {
            question_type:type,
            expression:String(num1) +"-" + String(num2) + "=",
            result:num1-num2
          }
          return question
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
          var question = {
            question_type:type,
            expression:String(num1) + "+" + String(num2) + "=",
            result:num1+num2
          }
          return question
        case 1:
          var num2 = RandomNum(0,num1)
          var question = {
            question_type:type,
            expression:String(num1) +"-" + String(num2) + "=",
            result:num1-num2
          }
          return question
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
          var question = {
            question_type:type,
            expression:String(num1) + "+" + String(num2) + "=",
            result:num1+num2
          }
          return question
        case 1:
          var num2 = RandomNum(0,num1)
          var question = {
            question_type:type,
            expression:String(num1) +"-" + String(num2) + "=",
            result:num1-num2
          }
          return question
        default:
          break
      }
      break
    case 4:
      var num1 = RandomNum(1,9)
      var num2 = RandomNum(1,9)
      var question = {
        question_type:type,
        expression:String(num1) +"X" + String(num2) + "=",
        result:num1*num2
      }
      return question
    case 5:
      var num1 = RandomNum(1,81)
      var num2 = RandomNum(1,9)
      while((!JudgeDivide(num1,num2)) || ((num1/num2) >= 10)){
        num1 = RandomNum(1,81)
        num2 = RandomNum(1,9)
      }
      var question = {
        question_type:type,
        expression:String(num1) +"÷" + String(num2) + "=",
        result:num1/num2
      }
      return question
    // unsolved mixed computing
    case 6:
      var num1 = RandomNum(1,9)
      var operator1 = RandomNum(0,3)
      var oprator2 = RandomNum(0,3)
      var question = {
        question_type:type,
        expression:String(num1) +"÷" + String(num2) + "=",
        result:num1/num2
      }
      return question
    case 7:
      var num1 = RandomNum(1,100)
      var operator = RandomNum(0,1)
      switch (operator) {
        case 0:
          var num2 = RandomNum(1,100 - num1)*(10**RandomNum(0,2))
          num1 = num1 *(10**RandomNum(0,2))
          var question = {
            question_type:type,
            expression:String(num1) + "+" + String(num2) + "=",
            result:num1+num2
          }
          return question
        case 1:
          var num2 = RandomNum(0,num1)
          var question = {
            question_type:type,
            expression:String(num1) +"-" + String(num2) + "=",
            result:num1-num2
          }
          return question
        default:
          break
      }
      break
    case 8:
      var num1 = RandomNum(0,200)
      var num2 = RandomNum(0,9)
      var question = {
        question_type:type,
        expression:String(num1) +"X" + String(num2) + "=",
        result:num1*num2
      }
      return question
    case 9:
      var operator = RandomNum(0,1)
      switch (operator) {
        case 0:
          var num1 = RandomNum(10,99)
          var num2 = RandomNum(1,9)*(10**RandomNum(0,1))
          var question = {
            question_type:type,
            expression:String(num1) + "X" + String(num2) + "=",
            result:num1*num2
          }
          return question
        case 1:
          var num1 = RandomNum(12,99)*(10**RandomNum(0,2))
          var num2 = RandomNum(1,9)
          while(!JudgeDivide(num1,num2)){
            num1 = RandomNum(12,99)*(10**RandomNum(0,2))
            num2 = RandomNum(1,9)
          }
          var question = {
            question_type:type,
            expression:String(num1) +"÷" + String(num2) + "=",
            result:num1/num2
          }
          return question
        default:
          break
      }
      break
    default:
      break
  }
  window.alert("Error: Expression generate error!\n")
}

while(true){
  console.log(GenerateQuestion(RandomNum(1,9)))
}
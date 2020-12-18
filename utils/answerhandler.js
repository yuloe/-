// judge user answer
function JudgeUserAnswer(question,userAnswer){
  if(question.result == userAnswer){
    return true
  }
  else{
    var wrongQuestion = {
      question:question,
      userAnswer:userAnswer,
      reviewTimes:0
    }
    var json = GetWrongSet()
    json.push(JSON.stringify(wrongQuestion))
    SetWrongSet(json)
    return false
  }
}

// get json length
function GetJSONLength(json){
  var jsonLength = 0
  for (var i in json){
    jsonLength++
  }
  return jsonLength
}

// get wrong question set
function GetWrongSet(){
  wx.getStorage({
    key: 'wrongset',
    success (res) {
      return res
    },
    fail(){
      console.log("Error: Can not get storage!\n")
    }
  })
}

// set wrong question set
function SetWrongSet(json){
  wx.setStorage({
    data: json,
    key: 'wrongset',
    fail(){
      console.log("Error: Can not set storage!\n")
    }
  })
}

// get a random wrong question
function GetRandomWrongQuestion(){
  var json = GetWrongSet()
  return json[RandomNum(0,GetJSONLength(json))]
}
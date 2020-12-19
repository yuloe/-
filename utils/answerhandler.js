// judge user answer
function JudgeUserAnswer(question, userAnswer) {
  if (question.result == userAnswer) {
    return true
  } else {
    var wrongQuestion = {
      question: question,
      userAnswer: userAnswer,
      reviewTimes: 0
    }
    var json = GetWrongSet()
    json.push(JSON.stringify(wrongQuestion))
    SetWrongSet(json)
    return false
  }
}

// get json length
function GetJSONLength(json) {
  var jsonLength = 0
  for (var i in json) {
    jsonLength++
  }
  return jsonLength
}

// get wrong question set
function GetWrongSet() {
  try{
    let value = wx.getStorageSync('wrongset')
    if(value) return value
    else{
      SetWrongSet([])
      return GetWrongSet()
    }
  }catch(e){
    console.log("Error: Can not get wrongset storage!\n")
    console.log(e)
  }
}

// set wrong question set
function SetWrongSet(wrongSet) {
  try {
    wx.setStorageSync('wrongset', wrongSet)
  } catch (error) {
    console.log("Error: Can not set wrongSet storage!\n")
    console.log(error)
  }
}

// refresh the wrong question set
function RefreshWrongSet() {
  var wrongSet = GetWrongSet
  for (var i = GetJSONLength(wrongSet) - 1; i >= 0; i--) {
    if (wrongSet[i].reviewTimes == 3) {
      wrongSet.splice(i, 1)
    }
  }
  SetWrongSet(wrongSet)
}

module.exports = {
  GetWrongSet: GetWrongSet,
  SetWrongSet: SetWrongSet,
  GetJSONLength: GetJSONLength,
  RefreshWrongSet: RefreshWrongSet,
  JudgeUserAnswer: JudgeUserAnswer
}
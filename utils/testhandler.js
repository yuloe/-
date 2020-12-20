const {
  GetWrongSet,
  SetWrongSet,
  GetJSONLength,
  RefreshWrongSet,
  JudgeUserAnswer
} = require("./answerhandler.js")

// get test log
function GetTestLog() {
  try {
    let value = wx.getStorageSync('testlog')
    if(value) return value
    else{
      SetTestLog([])
      return GetTestLog()
    }
  } catch (error) {
    console.log("Error: Can not get testlog storage!\n")
    console.log(error)
  }
}

// set test log
function SetTestLog(testLog) {
  try {
    wx.setStorageSync('testlog', testLog)
  } catch (e) {
    console.log("Error: Can not set testlog storage!\n")
    console.log(e)
  }
}

// add test history
function AddTestHistory(testHistory) {
  var testLog = GetTestLog()
  testLog.push(JSON.stringify(testHistory))
  console.log(testLog)
  if (GetJSONLength(testLog) > 3) {
    testLog.splice(0, 1)
  }
  SetTestLog(testLog)
}

module.exports = {
  AddTestHistory: AddTestHistory
}
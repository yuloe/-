const {
  GetWrongSet,
  SetWrongSet,
  GetJSONLength,
  RefreshWrongSet,
  JudgeUserAnswer
} = require("./answerhandler.js")
const {
  GetUserInfo
} = require("./userinfo")

// get test log
function GetTestLog() {
  try {
    let id = GetUserInfo().testLogID
    let value = wx.getStorageSync(id)
    if (value) return value
    else {
      SetTestLog([])
      return []
    }
  } catch (error) {
    console.log("Error: Can not get testlog storage!\n")
    console.log(error)
  }
}

// set test log
function SetTestLog(testLog) {
  try {
    let id = GetUserInfo().testLogID
    wx.setStorageSync(id, testLog)
  } catch (e) {
    console.log("Error: Can not set testlog storage!\n")
    console.log(e)
  }
}

// add test history
function AddTestHistory(testScore) {
  let time = new Date()
  var testHistory = {
    testTime: String(time.getFullYear()) + '/' + String(time.getMonth()) + '/' + String(time.getDate()),
    testScore: testScore
  }
  var testLog = GetTestLog()
  testLog.push(testHistory)
  if (testLog.length > 3) {
    testLog.splice(0, 1)
  }
  SetTestLog(testLog)
}

// get the highest test score
function GetHighScore() {
  let testHistory = GetTestLog()
  let highScore = 0
  for (let i = 0; i < testHistory.length; i++) {
    if (testHistory[i].testScore > highScore) {
      highScore = testHistory[i].testScore
    }
  }
  return highScore
}

module.exports = {
  GetTestLog: GetTestLog,
  AddTestHistory: AddTestHistory,
  GetHighScore: GetHighScore
}
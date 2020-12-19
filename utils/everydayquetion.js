const {
  GetWrongSet,
  SetWrongSet,
  GetJSONLength,
  RefreshWrongSet,
  JudgeUserAnswer
} = require("./answerhandler")

// get everyday question log
function GetEvedayLog() {
  try {
    let value = wx.getStorageSync('everydaylog')
    if (value) {
      return value
    } else {
      SetEvedayLog({
        needQuestions: 50,
        needWrongAnswers: Math.min(10, GetJSONLength(GetWrongSet())),
        time: new Date().getDate()
      })
      return GetEvedayLog()
    }
  } catch (e) {
    console.log("Error: Can not get everydaylog storage!\n")
    console.log(e)
  }
}

// set everyday question log
function SetEvedayLog(everydayLog) {
  console.log(everydayLog)
  try {
    wx.setStorageSync('everydaylog', everydayLog)
  } catch (e) {
    console.log(e)
  }
}

// change everyday question log
function ChangeEverydayLog(needQuestions, needWrongAnswers, time) {
  var everydayLog = {
    needQuestions: needQuestions,
    needWrongAnswers: needWrongAnswers,
    time: time
  }
  SetEvedayLog(everydayLog)
}

// refresh everyday question log
function RefreshEverydayLog() {
  var everydayLog = {
    needQuestions: 0,
    needWrongAnswers: 0,
    time: 0
  }
  everydayLog = GetEvedayLog()
  if (everydayLog.time != new Date().getDate()) {
    ChangeEverydayLog(50, 10, new Date().getDate())
  }
}

module.exports = {
  GetEvedayLog: GetEvedayLog,
  ChangeEverydayLog: ChangeEverydayLog,
  RefreshEverydayLog: RefreshEverydayLog
}
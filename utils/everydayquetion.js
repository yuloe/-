// get everyday question log
function GetEvedayLog() {
  wx.getStorage({
    key: 'everydaylog',
    success(res) {
      return res
    },
    fail() {
      console.log("Error: Can not get storage!\n")
      return -1
    }
  })
}

// set everyday question log
function SetEvedayLog(everydayLog) {
  wx.setStorage({
    data: everydayLog,
    key: 'everydaylog',
    fail() {
      console.log("Error: Can not set storage!\n")
    }
  })
}

// change everyday question log
function ChangeEverydayLog(needQuestions, needWrongAnswers, time){
  var everydayLog = {
    needQuestions:needQuestions,
    needWrongAnswers:needWrongAnswers,
    time: new Date().getDate()
  }
  SetEvedayLog(everydayLog)
}

// refresh everyday question log
function RefreshEverydayLog(){
  var everydayLog = {
    needQuestions: 0,
    needWrongAnswers: 0,
    time: 0
  }
  everydayLog = GetEvedayLog()
  if(everydayLog.time != new Date().getDate()){
    ChangeEverydayLog(50, 10, new Date().getDate())
  }
}

module.exports = {
  GetEvedayLog:GetEvedayLog,
  ChangeEverydayLog:ChangeEverydayLog
}
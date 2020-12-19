// get test log
function GetTestLog() {
  wx.getStorage({
    key: 'testlog',
    success(res) {
      return res
    },
    fail() {
      console.log("Error: Can not get storage!\n")
    }
  })
}

// set test log
function SetTestLog(testLog) {
  wx.setStorage({
    data: testLog,
    key: 'testlog',
    fail() {
      console.log("Error: Can not set storage!\n")
    }
  })
}

// get json length
function GetJSONLength(json) {
  var jsonLength = 0
  for (var i in json) {
    jsonLength++
  }
  return jsonLength
}

// add test history
function AddTestHistory(testHistory){
  var testLog = GetTestLog()
  testLog.push(JSON.stringify(testHistory))
  if(GetJSONLength(testLog) > 4){
    testLog.splice(0,1)
  }
  SetTestLog(testLog)
}
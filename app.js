//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  globalData: {
    hasUserInfo: false,
    userInfo: null,
    typeMode: [0],
    typeModeForTest: [],
    exeMode: -1,
    wrongNum: 0,
    correctNum: 0
  }
})
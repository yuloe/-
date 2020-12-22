const bgmAudio = wx.createInnerAudioContext()
bgmAudio.autoplay = true
bgmAudio.loop = true
bgmAudio.src = "/static/bgm.mp3"
//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    bgmAudio.play()
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
    correctNum: 0,
    bgmAudio: bgmAudio
  }
})
const {
  GetTestLog,
  AddTestHistory,
  GetHighScore
} = require("../../utils/testhandler")
const appInstance = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    historyScore: 0,
    currentRank: 0,
    testHistory: [],
    type: [1, 2, 3]
  },

  chooseRank: function (options) {
    let currentRank = parseInt(options.currentTarget.id)
    switch (currentRank) {
      case 1:
        appInstance.globalData.typeModeForTest = [1, 2, 3]
        break;
      case 2:
        appInstance.globalData.typeModeForTest = [4, 5, 6]
        break;
      case 3:
        appInstance.globalData.typeModeForTest = [7, 8, 9]
        break;
      default:
        break;
    }
    this.setData({
      currentRank: currentRank,
      type: appInstance.globalData.typeModeForTest
    })
  },
  startTest: function () {
    if (this.data.type[0] !== 0) {
      appInstance.globalData.exeMode = 1
      wx.redirectTo({
        url: '/pages/question/question',
      })
    } else {
      wx.showToast({
        icon: 'none',
        title: '请选择年级',
        duration: 2000
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      currentRank: 0,
      testHistory: GetTestLog(),
      historyScore: GetHighScore(),
      type: appInstance.globalData.typeModeForTest
    })
  }
})
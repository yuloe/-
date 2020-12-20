const {
  GetQuestion,
  GetOrderedWrongQuestion,
  GenerateQuestionByMode
} = require("../../utils/questions")
const {
  GetWrongSet,
  SetWrongSet,
  GetJSONLength,
  RefreshWrongSet,
  JudgeUserAnswer
} = require("../../utils/answerhandler.js")
const app = getApp()
// pages/result/result.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wrongSet: [],
    correctNum: app.globalData.correctNum
  },

  returnIndex: function () {
    wx.switchTab({
      url: '/pages/index/index',
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let tempArr = this.data.wrongSet
    this.setData({
      correctNum: app.globalData.correctNum
    })
    console.log(app.globalData.correctNum)
    let wrongNum = GetJSONLength(GetWrongSet())
    console.log(wrongNum)
    for (let i = 0; i < app.globalData.wrongNum; i++) {
      tempArr.push({
        question: GetOrderedWrongQuestion(wrongNum - i - 1).question.expression,
        result: GetOrderedWrongQuestion(wrongNum - i - 1).userAnswer,
        correctResult: GetOrderedWrongQuestion(wrongNum - i - 1).question.result
      })
    }
    this.setData({
      wrongSet: tempArr
    })
    console.log(this.data.wrongSet)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
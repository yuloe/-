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

// pages/notebook/notebook.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wrongSet: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let wrongSet = GetWrongSet()
    let wrongNum = GetJSONLength(wrongSet)
    let tempArr = this.data.wrongSet
    for (let i = 0; i < wrongNum; i++) {
      tempArr.push({
        question: JSON.parse(GetOrderedWrongQuestion(i)).question.expression,
        result: JSON.parse(GetOrderedWrongQuestion(i)).userAnswer,
        correctResult: JSON.parse(GetOrderedWrongQuestion(i)).question.result
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
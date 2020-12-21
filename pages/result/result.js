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
    let url = '/pages/index/index'
    if(app.globalData.exeMode === 1){
      url = '/pages/test/test'
    } else if (app.globalData.exeMode === 2){
      url = '/pages/me/me'
    }
    console.log(url)
    wx.switchTab({
      url: url,
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
  }
})
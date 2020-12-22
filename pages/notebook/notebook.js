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
const appInstance = getApp()
// pages/notebook/notebook.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wrongSet: []
  },

  onShow: function () {
    appInstance.globalData.exeMode = 0
    RefreshWrongSet()
    let wrongSet = GetWrongSet()
    let wrongNum = wrongSet.length
    console.log(wrongSet)
    let tempArr = this.data.wrongSet
    for (let i = 0; i < wrongNum; i++) {
      tempArr.push({
        question: GetOrderedWrongQuestion(i).question.expression,
        result: GetOrderedWrongQuestion(i).userAnswer,
        correctResult: GetOrderedWrongQuestion(i).question.result,
        reviewTimes: GetOrderedWrongQuestion(i).reviewTimes
      })
    }
    this.setData({
      wrongSet: tempArr
    })
    console.log(this.data.wrongSet)
  },
  reviewQuestion: function () {
    if (GetWrongSet().length <= 0) {
      wx.showToast({
        icon: 'none',
        title: '还没有错题哦',
        duration: 1500
      })
    } else {
      appInstance.globalData.exeMode = 2
      wx.redirectTo({
        url: '/pages/question/question',
      })
    }
  }
})
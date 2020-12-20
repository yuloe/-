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
    let wrongNum = wrongSet.length
    console.log(wrongSet)
    console.log(wrongSet.length)
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
  }
})
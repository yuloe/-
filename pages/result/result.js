const {
  GetOrderedWrongQuestion,
} = require("../../utils/questions")
const {
  GetWrongSet,
  GetJSONLength,
} = require("../../utils/answerhandler.js")
const app = getApp()
// pages/result/result.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wrongSet: [],
    correctNum: app.globalData.correctNum,
    promptInfo: '全部答对了，你真棒！'
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
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    console.log(app.globalData.bgmAudio)
    app.globalData.bgmAudio.play()
    console.log(app.globalData.wrongNum)
    if(app.globalData.wrongNum){
      this.setData({
        promptInfo: "还要继续加油哦~"
      })
    }
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
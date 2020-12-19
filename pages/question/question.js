const { JudgeUserAnswer } = require("../../utils/answerhandler")
// pages/question/question.js
const {
  GetQuestion,
  GetOrderedWrongQuestion,
  GenerateQuestionByMode
} = require("../../utils/questions")

Page({
  /**
   * 页面的初始数据
   */
  data: {
    time: '10:00',
    question: {
      question_type: 0,
      expression: ' ',
      result: 0
    },
    questionNum: 50,
    finished: 0,
    result: '?',
    isAccomplishTest: false,
    isTimeOver: false
  },
  /* 用户处理函数 */
  clickKeyBoard: function (e) {
    if (this.data.result.length < 4) {
      this.setData({
        result: this.data.result === '?' ? e.currentTarget.id : this.data.result + e.currentTarget.id
      })
    }
  },
  deleteChar: function () {
    if (this.data.result.length === 1) {
      this.setData({
        result: '?'
      })
    } else {
      let str = this.data.result
      this.setData({
        result: str.slice(0, str.length - 1)
      })
    }
  },
  submit: function(){
    let result = this.data.result === '?' ? NaN : parseInt(this.data.result)
    if(JudgeUserAnswer(this.data.question, result)){
      wx.showToast({
        icon: 'none',
        title: '回答正确'
      })
    }else{
      wx.showToast({
        icon: 'none',
        title: '回答错误'
      })
    }
    const appInstance = getApp()
    this.setData({
      question: GetQuestion(JSON.parse(appInstance.globalData.typeMode)),
      finished: this.data.finished + 1,
      result: '?'
    })
    if(this.data.finished === 50){

    }
  },
  accomplishTest: function(){

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const appInstance = getApp()
    this.setData({
      question: GetQuestion(JSON.parse(appInstance.globalData.typeMode))
    })
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
    console.log("show")
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
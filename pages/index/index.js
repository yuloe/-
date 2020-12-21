//index.js
//获取应用实例
const {
  GetEvedayLog,
  ChangeEverydayLog,
  RefreshEverydayLog
} = require("../../utils/everydayquetion.js")
const {
  GetWrongSet,
  SetWrongSet,
  GetJSONLength,
  RefreshWrongSet,
  JudgeUserAnswer
} = require("../../utils/answerhandler.js")
const app = getApp()

Page({
  data: {
    rank: 0,
    typeChoose: false,
    queShow: "",
    queType: ["10以内加减法", "20以内加减法", "100以内加减法", "表内乘法", "表内除法", "混合运算", "万以内加减法", "复杂乘除", "多位数乘一位数"],
    type: [],
    need2DoNum: 0,
    reviewNum: 0
  },
  //事件处理函数
  chooseType: function () {
    wx.navigateTo({
      url: '/pages/typeChoose/typeChoose',
    })
  },
  showChooseType: function () {
    console.log(formatTime(new Date()))
  },
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  startTest: function () {
    if (GetEvedayLog().needQuestions === 0 && GetEvedayLog().needWrongAnswers === 0) {
      ChangeEverydayLog(20, Math.min(5, GetJSONLength(GetWrongSet())), new Date().getDate())
      this.setData({
        need2DoNum:20,
        reviewNum:Math.min(5, GetJSONLength(GetWrongSet()))
      })
      console.log(GetJSONLength(GetWrongSet()))
    }else{
      if (this.data.type[0] !== 0) {
        app.globalData.exeMode = 0
        wx.redirectTo({
          url: '/pages/question/question',
        })
      } else {
        wx.showToast({
          icon: 'none',
          title: '请选择题型',
          duration: 2000
        })
      }
    }
  },

  /* 生命周期函数 */
  onShow: function () {
    RefreshEverydayLog()
    this.setData({
      need2DoNum: GetEvedayLog().needQuestions,
      reviewNum: GetEvedayLog().needWrongAnswers
    })
    this.setData({
      type: app.globalData.typeMode
    })
    if (this.data.type[0] === 0) {
      this.setData({
        queShow: "点击选择题型"
      })
      return
    }
    if (this.data.type.length === 1) {
      this.setData({
        queShow: this.data.queType[this.data.type[0] - 1]
      })
    } else if (this.data.type[0] === 1) {
      this.setData({
        queShow: "一年级综合"
      })
    } else if (this.data.type[0] === 4) {
      this.setData({
        queShow: "二年级综合"
      })
    } else if (this.data.type[0] === 7) {
      this.setData({
        queShow: "三年级综合"
      })
    }
  }
})
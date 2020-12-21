const {
  JudgeUserAnswer
} = require("../../utils/answerhandler")
const {
  GetEvedayLog
} = require("../../utils/everydayquetion")
const {
  GetTestLog,
  AddTestHistory,
  GetHighScore
} = require("../../utils/testhandler")
const {
  GetUserInfo,
  RefreshUserInfo,
  AddRainbowCoin
} = require("../../utils/userinfo")
// pages/question/question.js
const {
  GetQuestion,
  GetOrderedWrongQuestion,
  GenerateQuestionByMode,
  FinshQuestion
} = require("../../utils/questions")

const appInstance = getApp()

Page({
  /*页面的初始数据*/
  data: {
    second: 100,
    oneButton: [{
      text: '确认'
    }],
    question: {
      question_type: 0,
      expression: ' ',
      result: 0
    },
    questiontype: -1,
    questionNum: 50,
    finished: 49,
    result: '?',
    isAccomplishTest: false,
    isTimeOver: false,
    timer1: NaN,
    timer2: NaN
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
  submit: function () {
    if (this.data.result === '?') {
      wx.showToast({
        icon: 'none',
        title: '请输入答案'
      })
      return
    }
    let result = parseInt(this.data.result)
    if (JudgeUserAnswer(this.data.question, result)) {
      appInstance.globalData.correctNum++
      wx.showToast({
        icon: 'none',
        title: '回答正确'
      })
      FinshQuestion(this.data.questiontype, appInstance.globalData.exeMode)
    } else {
      appInstance.globalData.wrongNum++
      wx.showToast({
        icon: 'none',
        title: '回答错误'
      })
      FinshQuestion(this.data.questiontype, appInstance.globalData.exeMode)
    }
    let finished = this.data.questionNum - this.data.finished
    if (finished != 0) {
      if (appInstance.globalData.exeMode === 0) {
        let practicequestion = GetQuestion(appInstance.globalData.typeMode)
        console.log(practicequestion)
        this.setData({
          question: practicequestion.question,
          questiontype: practicequestion.type,
          finished: this.data.finished + 1,
          result: '?'
        })
      } else {
        this.setData({
          question: GenerateQuestionByMode(appInstance.globalData.typeModeForTest),
          finished: this.data.finished + 1,
          result: '?'
        })
      }
    } else {
      /* 完成测试，做完所有题目,显示对话框 */
      this.setData({
        isAccomplishTest: true
      })
      let coins = 0
      if (appInstance.globalData.exeMode === 1) {
        coins = 4
      }
      console.log(coins)
      for (; coins >= 0; coins--) {
        AddRainbowCoin()
      }
      if (appInstance.globalData.exeMode === 1) {
        AddTestHistory(appInstance.globalData.correctNum * 2)
      }
    }
  },
  quitTest: function () {
    this.setData({
      isAccomplishTest: true
    })
    if (appInstance.globalData.exeMode === 1) {
      console.log("exeMode")
      AddTestHistory(appInstance.globalData.correctNum * 2)
    }
  },

  /* 前往结果页面 */
  tapDialogButton: function () {
    console.log("leave que Page")
    if (this.data.timer1 !== NaN) {
      clearTimeout(this.data.timer1)
    }
    if (this.data.timer2 !== NaN) {
      clearTimeout(this.data.timer2)
    }
    wx.navigateTo({
      url: '/pages/result/result',
    })
    /* 需要完成定向到结果页面的 */
  },
  /* 倒计时 当超时时，显示对话框*/
  countdown: function (that) {
    let second = that.data.second
    if (second === 0) {
      that.setData({
        isTimeOver: true
      })
      if (appInstance.globalData.exeMode === 1) {
        AddTestHistory(appInstance.globalData.correctNum * 2)
      }
      return
    }
    this.setData({
      timer2: setTimeout(function () {
        console.log("timing ing")
        that.setData({
          second: second - 1
        })
        that.countdown(that)
      }, 1000)
    })
  },
  /*生命周期函数--监听页面加载*/
  onLoad: function (options) {
    appInstance.globalData.wrongNum = 0
    appInstance.globalData.correctNum = 0
    if (appInstance.globalData.exeMode === 0) {
      let practicequestion = GetQuestion(appInstance.globalData.typeMode)
      this.setData({
        question: practicequestion.question,
        questiontype: practicequestion.type,
        questionNum: GetEvedayLog().needQuestions + GetEvedayLog().needWrongAnswers,
        finished: 1,
        result: '?',
        second: '--'
      })
    } else {
      this.setData({
        question: GenerateQuestionByMode(appInstance.globalData.typeModeForTest),
        questionNum: 50,
        finished: 1,
        result: '?',
        second: 500
      })
    }

    if (appInstance.globalData.exeMode === 1) {
      this.countdown(this)
    }
  },
})
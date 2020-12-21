//index.js
//获取应用实例
const app = getApp()
const {
  GetUserInfo,
  RefreshUserInfo
} = require("../../utils/userinfo")
Page({
  data: {
    motto: '小猫口算',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  toNoteBook: function () {
    wx.navigateTo({
      url: '../notebook/notebook'
    })
  },
  toGuide: function () {
    wx.navigateTo({
      url: '../guide/guide'
    })
  },
  toAbout: function () {
    wx.navigateTo({
      url: '../about/about'
    })
  },
  waiting: function () {
    wx.showToast({
      title: '敬请期待',
      icon: "none"
    })
  },
  onLoad: function() {
    console.log(this.data.userInfo)
    console.log(GetUserInfo())
    this.setData({
      userInfo: GetUserInfo(),
      hasUserInfo: GetUserInfo().hasUserInfo
    })
    app.globalData.hasUserInfo = GetUserInfo().hasUserInfo
  },
  // onShow: function () {
  //   console.log(this.data.userInfo)
  //   console.log(GetUserInfo())
  //   this.setData({
  //     userInfo: GetUserInfo(),
  //     hasUserInfo: GetUserInfo().hasUserInfo
  //   })
  //   app.globalData.hasUserInfo = GetUserInfo().hasUserInfo
  //   // if (app.globalData.hasUserInfo) {
  //   //   this.setData({
  //   //     userInfo: GetUserInfo(),
  //   //     hasUserInfo: GetUserInfo().hasUserInfo
  //   //   })
  //   //   app.globalData.hasUserInfo = GetUserInfo().hasUserInfo
  //   // } else if (this.data.canIUse) {
  //   //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
  //   //   // 所以此处加入 callback 以防止这种情况
  //   //   app.userInfoReadyCallback = res => {
  //   //     this.setData({
  //   //       userInfo: GetUserInfo(),
  //   //       hasUserInfo: GetUserInfo().hasUserInfo
  //   //     })
  //   //     app.globalData.hasUserInfo = GetUserInfo().hasUserInfo
  //   //   }
  //   // } else {
  //   //   // 在没有 open-type=getUserInfo 版本的兼容处理
  //   //   wx.getUserInfo({
  //   //     success: res => {
  //   //       app.globalData.userInfo = res.userInfo
  //   //       this.setData({
  //   //         userInfo: GetUserInfo(),
  //   //         hasUserInfo: GetUserInfo().hasUserInfo
  //   //       })
  //   //       app.globalData.hasUserInfo = GetUserInfo().hasUserInfo
  //   //     }
  //   //   })
  //   // }
  // },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    app.globalData.hasUserInfo = true
    RefreshUserInfo()
    this.setData({
      userInfo: GetUserInfo(),
      hasUserInfo: true
    })
    console.log(this.data.userInfo)
  }
})
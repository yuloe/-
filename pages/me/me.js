//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '小猫口算',
    userInfo: {},
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  toNoteBook: function() {
     wx.navigateTo({
       url: '../notebook/notebook'
     })
  },
  toGuide: function() {
    wx.navigateTo({
      url: '../guide/guide'
    })
 },
 toAbout: function() {
  wx.navigateTo({
    url: '../about/about'
  })
},
  waiting: function(){
    wx.showToast({
      title: '敬请期待',
      icon: "none"
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
      })
      app.globalData.hasUserInfo = true
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
        })
        app.globalData.hasUserInfo = true
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
          })
          app.globalData.hasUserInfo = true
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
    })
    app.globalData.hasUserInfo = true
  }
})

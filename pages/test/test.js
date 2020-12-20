const appInstance = getApp()

Page({ 
  /**
   * 页面的初始数据
   */
  data: {
    historyScore: 98,
    currentRank: 0,
    testHistory: [{
      time: "2020/12/20",
      score: "96"
    },{
      time: "2020/12/19",
      score: "96"
    },{
      time: "2020/12/18",
      score: "98"
    }]
  },

  chooseRank: function(options){
    this.setData({
      currentRank: parseInt(options.currentTarget.id)
    })
    console.log(parseInt(options.currentTarget.id))
    console.log(this.data.currentRank)
  },

  startTest: function(){
    if(this.data.currentRank === 1){
      appInstance.globalData.typeModeForTest = [1,2,3]
    }else if(this.data.currentRank === 2){
      appInstance.globalData.typeModeForTest = [4,5,6]
    }else if(this.data.currentRank === 3){
      appInstance.globalData.typeModeForTest = [7,8,9]
    }else{
      wx.showToast({
        title: '请选择年级',
        icon: 'none'
      })
      return 
    }
    exeMode = 1
    wx.redirectTo({
      url: '../question/question',
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  }
})
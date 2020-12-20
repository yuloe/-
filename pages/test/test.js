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
      chooseRank: parseInt(options.currentTarget.id)
    })
    console.log(parseInt(options.currentTarget.dataset.id))
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  }
})
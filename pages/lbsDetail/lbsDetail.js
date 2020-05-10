// pages/lbsDetail/lbsDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: ['slide-3.jpg', 'slide-4.jpg'],
    indicatorDots: true,
    autoplay: true,
    interval: 3000 
  },

  openLocation: function () {
    wx.openLocation({
      latitude: 38.011350,
      longitude: 112.442990,
      name: '中北大学',
      address: '山西省太原市尖草坪区学院路3号'
    })
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
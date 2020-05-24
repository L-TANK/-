var config = require('../../config/config');

Page({
  /**
   * 页面的初始数据
   */
  data: {
   
    imgList: [
      "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jcjfIVDu4IsQvFK.jpg",
     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jcjfIFVSzyfjUQP.jpg",
     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jcjfIsgVM2pX8dz.jpg",
     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jcjfIwtJSuZPTuu.jpg",
     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jcjfIhDrqVTphLT.jpg",
     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jcjfI8KMDw1QPIe.jpg",
     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jcjfIbpjy2sMN7l.jpg",
     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jcjfIGzOz4OZT3j.jpg",
     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jcjfIlJQ9BHaWL1.jpg",
     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jcjfIFecRQnpvvq.jpg",
     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jcjfJlfKzWaJI07.jpg",
     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jcjfJb3Nv9MWQnI.jpg",
     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jcjfJlUVQ4xjU9N.jpg",
     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jcjfJzrRv16hocO.jpg",
     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jcjfJLpaAo6AZu1.jpg",
     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jcjfJBbZHHXRTbY.jpg",
     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jcjfJcj7OqJdfde.jpg",
     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jcjfJBshuvzSzOL.jpg",
     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jcjfJlCCRCfzMu3.jpg",
     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jcjfJIq86zKSUsW.jpg",
     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jcjfJaCPixM1gmn.jpg",
     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jcjfJtAId4XkPwM.jpg",
     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jcjfJeZ4eHehv7M.jpg",
     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jcjfJDlRueiEQTJ.jpg",
     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jcjfJT91qeL6Zku.jpg",
     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jcjfJatB5qaq25O.jpg",
    "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jcjfJZtjXRhcMMD.jpg",
     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jcjfJvkhvCaF7dB.jpg",
     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jcjfJJ55MTTqh1s.jpg",
     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jcjfJaLY85Wb8Yv.jpg",

     
    ]
  },
 
 
 
 
  preview(event) {
    console.log(event.currentTarget.dataset.src)
    let currentUrl = event.currentTarget.dataset.src
    wx.previewImage({
      current: currentUrl, // 当前显示图片的http链接
      urls: this.data.imgList // 需要预览的图片http链接列表
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
    return {
      title: "畅行西大",
      imageUrl: "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jYTYCvcv5eWRkrz.jpg"
    };
  },

  updatenavs: function(t) { 
    this.setData({ 
        current: t.target.dataset.index, 
    }); 
}, 

catchTouchMove:function(res){
  return false
},
})
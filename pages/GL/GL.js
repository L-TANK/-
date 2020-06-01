Page({
  /**
   * 页面的初始数据
   */
  data: {
   
    imgList: [
     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jfkx95g03YbBwge.jpg",
     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jfkx9XGxUw8mMWn.jpg",
     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jfkx95SolqJ1lu2.jpg",
     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jfkx9PQcuIvixrL.jpg",
     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jfkx9BJITnbuFqc.jpg",

     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jfkx9GuaNuRHGgQ.jpg",
     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jfkx9dLxG3jwtSp.jpg",
     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jfkx9hjS9bmvbGC.jpg",
     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jfkx982Ab9zXwmP.jpg",
     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jfkx9jL5WVzd7So.jpg",

     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jfkx9ErcfvOZPMl.jpg",
     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jfkx9OoiAAnutWp.jpg",
     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jfkx9Gzti5NNwFE.jpg",
     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jfkx9HSod06RmpH.jpg",
     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jfkx9idQmlC5c62.jpg",

     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jfkx9NHPicqbPZ8.jpg",
     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jfkx9ephfFuHRYt.jpg",
     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jfkxAiJW82kN6vA.jpg",
     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jfkxA95orSJTEj4.jpg",
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
})
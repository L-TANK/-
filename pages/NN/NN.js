Page({
  /**
   * 页面的初始数据
   */
  data: {
   
    imgList: [
      "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jfkxaYBo3MfVRk1.jpg",
     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jfkxazjQmxnYr1O.jpg",
     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jfkxa4Ik3uErO69.jpg",
     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jfkxasgNvsnlcUk.jpg",
     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jfkxbGSkPuJFkj6.jpg",

     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jfkxbPyibowVNd3.jpg",
     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jfkxblbL7OL9ygs.jpg",
     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jfkxbYLBx2l9hHW.jpg",
     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jfkxbTOX8hABaUp.jpg",
     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jfkxbyLkkuJRVSm.jpg",

     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jfkxbOrOwy8bNKA.jpg",
     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jfkxbjKBQioBwd8.jpg",
     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jfkxbGlpogObrBN.jpg",
     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jfkxbGAwqietH9e.jpg",
     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jfkxbSOSVYBWtxJ.jpg",

     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jfkxbdf92jZxUPR.jpg",
     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jfkxbU5rXo34VkS.jpg",
     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jfkxbwbIfznvTfr.jpg",
     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jfkxbz0BQYtSjWT.jpg",
     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jfkxbjqbrLZ7gO8.jpg",

     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jfkxbWbVixywa1N.jpg",
     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jfkxbfes550U56Z.jpg",
     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jfkxbR34F9vGxAK.jpg",
     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jfkxbXyt1bTN1d6.jpg",
     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jfkxbWQMMlCdSOn.jpg",

     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jfkxbAhFzYsScAe.jpg",
     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jfkxbNwxyHd1X8m.jpg",
     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jfkxbJ8dws7ZIrr.jpg",
     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jfkxbqJdhRYVtn9.jpg",
     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jfkxbzCAqu4sLda.jpg",

     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jfkxbtVGegiKeye.jpg",
     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jfkxbUXo25agGGZ.jpg",
     "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jfkxbULy91ywzPn.jpg",

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
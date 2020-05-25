// pages/photo/photo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: ['https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jcTzXLLtDz6D1ia.jpg', 'https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jcTtIkp9Squ4zt8.jpg', 'https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jZpu5SamK4PG0iM.jpg','https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jZpu5qi1dhIzLkz.jpg',
'https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jZpu5BYEKeWyvVo.jpg',
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,

    imgArr: [
      "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jZpu5WEQVXXktSa.jpg",
      "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jZpu5flbg1emIWI.jpg",
      "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jZpu5COGFt84dt3.jpg",
      "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jZpu5yQoWn4D58O.jpg",
      "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jZpu5xHi9LH5qe6.jpg",
      "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jcTtIv4agvhaEVi.jpg",
      "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jcTtIugJMMsfUo4.jpg",
      "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jcTtI3nyeKkDjMv.jpg",
      "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jZpu50pnsHvBS6W.jpg",
      "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jZpu5n7OOAmzkz7.jpg",
      "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jZpu5sWNGNf5Lhg.jpg",
      "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jcTtIeQJdYUklPt.jpg",
    ],



    "items": [
      {
        "imageUrl": "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jZpu5WEQVXXktSa.jpg",
        "content": "莲湖"
      },
      {
        "imageUrl": "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jZpu5flbg1emIWI.jpg",
        "content": "碧云湖"
      },
      {
        "imageUrl": "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jZpu5COGFt84dt3.jpg",
        "content": "宿舍倒影"
      },
      {
        "imageUrl": "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jZpu5yQoWn4D58O.jpg",
        "content": "月牙湖"
      },
      {
        "imageUrl": "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jZpu5xHi9LH5qe6.jpg",
        "content": "彩蝶湖景"
      },
      {
        "imageUrl": "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jcTtIv4agvhaEVi.jpg",
        "content": "荟萃楼"
      },
      {
        "imageUrl": "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jcTtIugJMMsfUo4.jpg",
        "content": "世纪之门雕塑"
      },
      {
        "imageUrl": "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jcTtI3nyeKkDjMv.jpg",
        "content": "校园一角"
      },
      {
        "imageUrl": "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jZpu50pnsHvBS6W.jpg",
        "content": "中杜鹃"
      },
      {
        "imageUrl": "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jZpu5n7OOAmzkz7.jpg",
        "content": "碧云湖"
      },
      {
        "imageUrl": "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jZpu5sWNGNf5Lhg.jpg",
        "content": "大丽菊"
      },
      {
        "imageUrl": "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jcTtIeQJdYUklPt.jpg",
        "content": "劝学岛"
      }
    ]
  },

//点击放大预览
  previewImg: function (e) {
    console.log(e.currentTarget.dataset.index);
    var index = e.currentTarget.dataset.index;
    var imgArr = this.data.imgArr;
    wx.previewImage({
      current: imgArr[index],     //当前图片地址
      urls: imgArr,               //所有要预览的图片的地址集合 数组形式
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
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
  }
})
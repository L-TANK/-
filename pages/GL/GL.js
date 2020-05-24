var config = require('../../config/config');

Page({
  /**
   * 页面的初始数据
   */
  data: {
   
    imgList: [
      "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jZqteRMtHNpSzcT.jpg",
      "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jcU5J3WKt3xxzwi.jpg",
      "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jcU5JI9VUZA9ry2.jpg",
      "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jcU5JPhEbvhh3gh.jpg",
      "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jcU5JHZ4Qy1Umb8.jpg",
      "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jcU5KrzvZSBOUB5.jpg",/**
      *0-5
      */
      "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jcUEZPm5L2vopbo.jpg",
      "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jcUEZl24leCc7Rd.jpg",
      "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jcUEZK1iJkDQDCR.jpg",
      "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jcUEZ4HpucUuW9R.jpg",
      "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jcUEZ0lSx5sFIGP.jpg",
      "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jcUEZyBHAZXjW1V.jpg",
      "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jcUEZ2W8gtkIARV.jpg",
      "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jcUEZDGq8ykaDFD.jpg",
      "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jcUEZDGq8ykaDFD.jpg",
      "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jcUEZoH4nnjK7RH.jpg",
      "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jcUEZ7rhbglcATh.jpg",
      "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jcUEZJ2aNpTry02.jpg",
      "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jcUEZTGCimFlKrO.jpg",
      "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jcUEZV7BqIsgpou.jpg",
      "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jcUEZarcfD7lXkN.jpg",
      "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jcUEZ3AZfMjutqm.jpg",
      "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jcUEZCwL4em1K9y.jpg",
      "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jcUEZpgdy6Ilp2L.jpg",
      "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jcUEZaNW6zvAM0K.jpg",
      /**
      *6-25
      */
     "",
     "",
     "",
     "",
     "",
     "",
     "",
     "",
     "",
     "",
     "",
     "",
     "",
     "",
     "",
     "",
     "",
     "",
     "",
     "",
     "",
     "",
     
    ]
  },
 
 
 
  goToMap: function () {
    wx.navigateTo({
      url: '/pages/lbsIndex/lbsIndex'
    })
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
    var that = this
    wx.getStorage({
      key: 'schoolData',
      success: (res) =>{
        //更新校园简介数据
        that.setData({
          schoolName: res.data.schoolName,
          englishName: res.data.englishName,
          about:res.data.about,
          logo:res.data.logo,
          audio:res.data.audio,
          video_img:res.data.video_img
        })
      WxParse.wxParse('about','html',res.data.about,this) 
      },
      fail: () =>{
        // 操作school表
        let tableID =config.TABLE_ID.SCHOOL
        let recordID =config.RECORDID
        let School = new wx.BaaS.TableObject(tableID)

        School.get(recordID).then(res => {
          // success
          //更新校园简介数据
          that.setData({
            schoolName: res.data.schoolName,
            englishName: res.data.englishName,
            about:res.data.about,
            logo:res.data.logo,
            audio:res.data.audio,
            video_img:res.data.video_img
          })
          WxParse.wxParse('about','html',res.data.about,this)
          //将校园简介数据进行本地缓存
          wx.setStorage({
            key: "schoolData",
            data: res.data
          })
        }, err => {
          // err
        })
      }
    })
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
// pages/about/about.js
var WxParse = require('../../utils/wxParse/wxParse.js')
var config = require('../../config/config');

Page({
  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots:true,
    autoplay:true,
    interval:3000,
    navInfo: [ "简介", "历史", "风光" ,"标识"], 
    current: 0, 
    introvideo:"https://www.gxu.edu.cn/__local/2/73/CF/A0048789F2E45A1D52D5FA6A34A_E74CCD54_20F8B80B.mp4?e=.mp4", 
    schoolName:'',
    englishName:'',
    about:'',
    logo:'',
    audio:'',
    video_img:'',
    xun:'',
    hui:'',
    song:'',
    ge:'',
    imgList: [
      "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jZqteRMtHNpSzcT.jpg",  
    ],
    sceneList:[
      "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jZpu5yJzfN2DoqD.jpg",
      "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jdBY8VMQpWDPAGe.jpg",
      "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jZpu5zgLmPc9aZs.jpg",
      "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jd6L6d8YH6jrMBG.jpg",
      "https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jd6L6xmHSXnW00F.jpg"
    ],
  },
 
  preview(event) {
    let currentUrl = event.currentTarget.dataset.src
    wx.previewImage({
      current: currentUrl, // 当前显示图片的http链接
      urls: this.data.imgList // 需要预览的图片http链接列表
    })
  },

  preview2(event) {
    let currentUrl = event.currentTarget.dataset.src
    wx.previewImage({
      current: currentUrl, // 当前显示图片的http链接
      urls: this.data.sceneList // 需要预览的图片http链接列表
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
          video_img:res.data.video_img,
          xun:res.data.xun,
          hui:res.data.hui,
          song:res.data.song,
          ge:res.data.ge
        }) 
      WxParse.wxParse('about','html',res.data.about,this)  
      WxParse.wxParse('xun','html',res.data.xun,this) 
      WxParse.wxParse('hui','html',res.data.hui,this) 
      WxParse.wxParse('ge','html',res.data.ge,this) 
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
            video_img:res.data.video_img,
            xun:res.data.xun,
            hui:res.data.hui,
            song:res.data.song,
            ge:res.data.ge
          }) 
          WxParse.wxParse('about','html',res.data.about,this) 
          WxParse.wxParse('xun','html',res.data.xun,this) 
          WxParse.wxParse('hui','html',res.data.hui,this) 
          WxParse.wxParse('ge','html',res.data.ge,this) 
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
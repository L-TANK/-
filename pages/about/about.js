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
    introvideo:"https://cloud-minapp-35144.cloud.ifanrusercontent.com/1jcSHudMKco6ewvC.mp4", 
    schoolName:'',
    englishName:'',
    about:'',
    logo:'',
    audio:'',
  },
 
  goToMap: function () {
    wx.navigateTo({
      url: '/pages/lbsIndex/lbsIndex'
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
          audio:res.data.audio
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
            audio:res.data.audio
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
// pages/about/about.js
var wxParse = require('../../utils/wxParse/wxParse.js')
var config = require('../../config/config');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [],
    indicatorDots:true,
    autoplay:true,
    interval:3000,
    navInfo: [ "简介", "历史", "风光" ,"标识"], 
    current: 0, 
    introvideo:"https://www.gxu.edu.cn/__local/2/73/CF/A0048789F2E45A1D52D5FA6A34A_E74CCD54_20F8B80B.mp4?e=.mp4", 
    schoolName:'',
    englishName:'',
    about:'',

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
      success: function (res) {
         console.log(res.data)
        //更新校园简介数据
        that.setData({
          schoolName: res.data.schoolName,
          englishName: res.data.englishName,
          imgUrls: res.data.image,
          about:res.data.about
        })
        console.log('使用了本地缓存');
      },
      fail:function(){
        console.log('没有使用本地缓存');
        // 操作school表
        let tableID =99161
        let recordID ='5eb76dbadc78475753fc2144'

        let School = new wx.BaaS.TableObject(tableID)

        School.get(recordID).then(res => {
          // success
          console.log(res.data)
          //更新校园简介数据
          var content = res.data.about
      WxParse.wxParse('about','html',content,this);
          that.setData({
            schoolName: res.data.schoolName,
            englishName: res.data.englishName,
            imgUrls: res.data.image,
            about:res.data.about
          })
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
})
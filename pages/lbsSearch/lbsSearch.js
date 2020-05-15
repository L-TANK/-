// pages/lbsSearch/lbsSearch.js
var config =  require('../../config/config')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Input : "",
    SearchData: [],//搜索结果
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

  //输入框事件
  Input:function(e){
    this.setData({
      Input:e.detail.value
    })
  },
  //清空按钮事件
  clean_input:function(){
    this.setData({
      Input:""
    })
  },
  // 查询搜索的接口方法
  Search: function () {
    var that = this
    var Input = this.data.Input
    this.getSearch(Input,function(res){
      var SearchData = res.data.objects
      that.setData({
        SearchData: SearchData
      })  
      if(that.data.SearchData.length==0){
        wx.showToast({
          title: '没有找到相关内容!',
          icon: 'none',
          duration: 1500
        })
      }
    })
  },

  //查询搜索结果
  getSearch:function(Input,cb){
    //实例化tableId,TableObject,query
    let tableId = config.TABLE_ID.MAP
    let Search = new wx.BaaS.TableObject(tableId)
    let query = new wx.BaaS.Query()
    query.contains('title', Input)
    Search.setQuery(query).find().then(res => cb(res), err => {
      // err
    })
 },

 openLocation:function(e){
  var that = this;
  var index = e.currentTarget.dataset.index;
  wx.openLocation({
    latitude: that.data.SearchData[index].latitude,
    longitude: that.data.SearchData[index].longitude,
    name: that.data.SearchData[index].title
  })
},
})
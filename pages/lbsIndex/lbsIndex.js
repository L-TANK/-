// pages/lbsIndex/lbsIndex.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeCategory:'',//当前激活的分类
    categoryData: ['校门', '学院', '教学楼', '体育设施','食堂','服务建筑','景点','快递站','停车场','校园超市'],
    coreLongitude: '108.2884222300',//中心经度
    coreLatitude: '22.8348447400',//中心纬度
    scale: 16,//缩放级别
    markers: [],//标记点
    isSpread: true, //底部可滚动视图区域是否显示，true表示展开，false表示收缩
    scrollLeft: 0,//横向滚动条位置，默认为0
    merchantsData: [],//某一分类下的所有标记点数据
    activeMerchantIndex:0//当前激活的标记点对应的index索引，默认为0
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this
    this.setData({
      activeCategory: '校门'
    })
    
    this.getCategory('校门',function(res){
      var objects = res.data.objects
      that.setData({
        merchantsData: objects
      })
    })
  },

  switchMerchantsItems(e) {
    this.setData({
      isSpread: !this.data.isSpread
    })
  },

  //获取某一分类下所有标记的数据
  getCategory:function(name,cb){
     //实例化tableId,TableObject,query
     let tableId = 99162
     let Map = new wx.BaaS.TableObject(tableId)
     let query = new wx.BaaS.Query()
     query.in('category', [name])
     Map.setQuery(query).find().then(res => cb(res), err => {
       // err
     })
  },

  categoryChange:function(e){
    var that = this
    var category = e.currentTarget.dataset.category
    this.setData({
      activeCategory: category
    })
    this.getCategory(category,function(res){
      var objects = res.data.objects
      that.setData({
        merchantsData: objects
      })
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
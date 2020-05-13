// pages/lbsIndex/lbsIndex.js
//使用require将公共的配置参数代码导入，并用变量config来保存
var config =  require('../../config/config')
const app = getApp();//获取APP应用实例
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
    scrollTop: 0, //纵向滚动条位置，默认为0
    merchantsData: [],//某一分类下的所有标记点数据
    activeMerchantIndex:0,//当前激活的标记点对应的index索引，默认为0
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this
    //默认界面为校门
    this.setData({
      activeCategory: config.CATEGORY
    })
    //获取分类校门的ID
    let categoryID = this.data.categoryData.indexOf(config.CATEGORY);
    //设置为全局变量
    app.golbalData.categoryID = categoryID
    //加载校门内容
    this.getCategory(config.CATEGORY,function(res){
      var merchantsData = res.data.objects
      that.setData({
        merchantsData: merchantsData
      })
      //设置Markers
      that.setMarkers(merchantsData);
    })
  },

  //切换下方滚动条是否显示
  switchMerchantsItems(e) {
    this.setData({
      isSpread: !this.data.isSpread
    })
  },

  //获取某一分类下所有标记的数据
  getCategory:function(name,cb){
     //实例化tableId,TableObject,query
     let tableId = config.TABLE_ID.MAP
     let Map = new wx.BaaS.TableObject(tableId)
     let query = new wx.BaaS.Query()
     query.in('category', [name])
     Map.setQuery(query).find().then(res => cb(res), err => {
       // err
     })
  },

  //分类切换时，同步切换内容
  categoryChange:function(e){
    var that = this
    var category = e.currentTarget.dataset.category
    this.setData({
      activeCategory: category
    })
    //获取分类校门的ID
    let categoryID = this.data.categoryData.indexOf(category);
    //设置为全局变量
    app.golbalData.categoryID = categoryID

    this.getCategory(category,function(res){
      var merchantsData = res.data.objects
      that.setData({
        merchantsData: merchantsData
      })
      //设置Markers
      that.setMarkers(merchantsData);
    })
  },

  //点击图标时的触发事件
  markerTap:function(e){
    //获取点击的marker的ID
    let markerId = e.markerId;
    //获取地图上的markers数据
    let markers = this.data.markers;
    //获取全局分类数据
    let categoryID = app.golbalData.categoryID;
    //获取所有标记点的数据
    let merchantsData = this.data.merchantsData
    //遍历所有的markers，相同ID的进行变换
    markers.forEach(item=>{
      if(item.id == markerId){
        item.iconPath = "../../resource/icon/" + categoryID + "choosed@3x.png"
      }
      else{
        item.iconPath = "../../resource/icon/" + categoryID + "@3x.png"
      }
      //更新地图上的标记点数据
      this.setData({
        markers
      })
      //更新下方选中样式
      merchantsData.forEach((item,index)=>{
        if(item.id == markerId){
          merchantsData[index].display = true
        }
        else{
          merchantsData[index].display = false
        }
      })
      this.setData({
        merchantsData
      })

      let scrollLeft;
      let scrollTop;
      //更新滚动条位置
      merchantsData.forEach((item,index)=>{
        if(item.id == markerId){
          scrollLeft = index * 100;//横版
          scrollTop = index * 55;//竖版
          this.setData({
            scrollLeft,
            activeMerchantIndex:index,
            scrollTop,
          })
        }
      })
    })
  },

  //设置该分类下的Markers,在地图上显示标记点的图标
  setMarkers(merchantsData){
    let markers = [];
    let categoryID = app.golbalData.categoryID
      merchantsData.forEach((item) => {
        let marker = {
          id: item.id,
          title: item.title,
          latitude: item.latitude,
          longitude: item.longitude,
          iconPath: '../../resource/icon/' + categoryID + '@3x.png',
          width: 32,
          height: 40
        }
        markers.push(marker)
      })

      this.setData({
       markers
      })
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

  openLocation:function(e){
    var that = this;
    var index = e.currentTarget.dataset.index;
    wx.openLocation({
      latitude: that.data.markers[index].latitude,
      longitude: that.data.markers[index].longitude,
      name: that.data.markers[index].title
    })
  }
})
// pages/food/food.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    roomName:'',
    imgUrls:[],
    roomName2:'',
    imgUrls2: [],
    roomName3: '',
    imgUrls3: [],
    roomName4: '',
    imgUrls4: [],
    roomName5: '',
    imgUrls5: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let tableID = 99566
    let recordID = '5ebd4e89c66ab41bb9bbb32f'//秀苑
    let recordID2 = '5ebe28681739a437ce7057dc'//南苑
    let recordID3 = '5ebe780d1739a45041705a4f'//东苑
    let recordID4 ='5ebe7dcac66ab44fd9bbbf04'//翠苑
    let recordID5 = '5ebe83601739a425bf705570'//碧湖苑

    let Room = new wx.BaaS.TableObject(tableID)

    Room.get(recordID).then(res => {
      // success
      console.log(res.data)
      this.setData({
        roomName:res.data.roomName,
        imgUrls:res.data.image,
      })
    }, err => {
      // err
    })

    Room.get(recordID2).then(res => {
      // success
      console.log(res.data)
      this.setData({
        roomName2: res.data.roomName,
        imgUrls2: res.data.image,
      })
    }, err => {
      // err
    })
   
    Room.get(recordID3).then(res => {
      // success
      console.log(res.data)
      this.setData({
        roomName3: res.data.roomName,
        imgUrls3: res.data.image,
      })
    }, err => {
      // err
    })

    Room.get(recordID4).then(res => {
      // success
      console.log(res.data)
      this.setData({
        roomName4: res.data.roomName,
        imgUrls4: res.data.image,
      })
    }, err => {
      // err
    })

    Room.get(recordID5).then(res => {
      // success
      console.log(res.data)
      this.setData({
        roomName5: res.data.roomName,
        imgUrls5: res.data.image,
      })
    }, err => {
      // err
    })

  },

  openLocation:function(){
    wx.openLocation({
      latitude: 22.840071,
      longitude: 108.29796,
      name: '秀苑餐厅',
      address: '广西壮族自治区南宁市西乡塘区灵秀路西一里'
    })
  },

  openLocation1: function () {
    wx.openLocation({
      latitude: 22.837351,
      longitude: 108.293580,
      name: '南苑餐厅',
      address: '广西壮族自治区南宁市西乡塘区大学路100号广西大学内'
    })
  },

  openLocation2: function () {
    wx.openLocation({
      latitude: 22.841851,
      longitude: 108.297400,
      name: '东苑餐厅',
      address: '广西壮族自治区南宁市西乡塘区校园'
    })
  },

  openLocation3: function () {
    wx.openLocation({
      latitude: 22.839151,
      longitude: 108.286580,
      name: '萃苑餐厅',
      address: '广西壮族自治区南宁市西乡塘区大学路100号广西大学内'
    })
  },

  openLocation4: function () {
    wx.openLocation({
      latitude: 22.844680,
      longitude: 108.297080,
      name: '碧湖苑餐厅',
      address: '广西壮族自治区南宁市西乡塘区广西大学东校园'
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
  }
})
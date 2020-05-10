// pages/lbsIndex/lbsIndex.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeCategory:'',//当前激活的分类
    categoryData: ['景点', '食堂', '宿舍楼', '图书馆'],
    coreLongitude: '112.447560',//中心经度
    coreLatitude: '38.015500',//中心纬度
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

    this.setData({
      activeCategory: '景点'
    })

    let merchantsData = [
      {
        id: 1,
        title: "二龙山",
        latitude: 38.01679,
        longitude: 112.43882,
        description: "二龙山又名烈石山，西临汾河，地势险要，是太原的北大门。解放战争期间，阎锡山军队在烈石山上修建了大量军事设施，现保存有碉堡3座、地下暗道1处。山势不太高，但是景色秀丽，山上鲜花遍布，景点众多，二龙山旅游风景区是太原为数不多的避暑胜地。",
        logo:
        "https://cloud-minapp-11189.cloud.ifanrusercontent.com/1ewNfNmLFhbbAXiO.jpg"
      },
      {
        id: 2,
        title: "窦大夫祠",
        latitude: 38.01127,
        longitude: 112.43963,
        description: "窦大夫祠又称英济祠、烈石神祠，位于太原市西北20公里的上兰村，在汾河峡谷左侧；北靠二龙山，左傍烈石寒泉，右临赵戴文祠，是祀奉春秋时晋国大夫窦犨（chōu）的祠庙。窦犨，字鸣犊，封地在今太原，曾于狼孟（今阳曲黄寨）开渠兴利，因而得到后人的纪念；宋代元丰八年（1085）神宗封之为英济侯，故祠庙又名英济祠。",
        logo: "https://cloud-minapp-11189.cloud.ifanrusercontent.com/1etk5sBuiOmYvBlz.jpg"
      },
      {
        id: 3,
        title: "柏林园",
        latitude: 38.01304,
        longitude: 112.44102,
        description: "柏林园位于中北大学校内，是太原市七所四星级公园之一，西倚二龙山，南临汾河水，毗邻太原名胜窦大夫祠，青山碧水，风景旖旎。",
        logo: "https://cloud-minapp-11189.cloud.ifanrusercontent.com/1ewPWfeSZGhToKyX.jpg"
      }
    ]

    this.setData({
      merchantsData: merchantsData
    })

  },

  switchMerchantsItems(e) {
    this.setData({
      isSpread: !this.data.isSpread
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
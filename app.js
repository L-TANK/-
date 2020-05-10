App({
  onLaunch: function() {
    wx.BaaS = requirePlugin('sdkPlugin')
    //让插件帮助完成登录、支付等功能
    wx.BaaS.wxExtend(wx.login,
     wx.getUserInfo,
     wx.requestPayment)

    wx.BaaS.init('790b841ba688bf46a0ba')
    wx.BaaS.auth.loginWithWechat() // 静默登录
  },
})

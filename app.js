App({
  onLaunch (options) {
    // 请示数据
    wx.request({
      url:'https://resources.ninghao.net/wxapp-case/db.json',
      success: (response) => {
        // console.log(response);
        Object.assign(this.globalData, response.data);
        console.log(this.globalData)
      }
    })
  },
  onShow (options) {
  },
  onHide () {
  },
  onError (error) {
  },
  globalData: {
    slides:[{
      id: '123'
    },{
      id: '345'
    }]
  }
})

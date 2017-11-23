const app = getApp()

Page({
  data: {
    slides: null
  },
  onLoad () {
    // 全局数据 globalData
    this.setData({
      slides: app.globalData.slides
    });
  }
})

Page({
  data: {
    skewerLines: [1, 2, 3, 4, 5, 6, 7]
  },

  goMenu() {
    wx.navigateTo({ url: '/pages/menu/menu' })
  }
})

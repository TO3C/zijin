Page({
  data: {
    cart: [],
    serviceFee: 2,
    foodTotal: 0,
    totalPrice: 0
  },

  onLoad() {
    const app = getApp()
    const cart = app.globalData.cart.length ? app.globalData.cart : []
    this.setData({ cart }, () => this.compute())
  },

  compute() {
    const foodTotal = this.data.cart.reduce((sum, item) => sum + item.price * item.count, 0)
    this.setData({ foodTotal, totalPrice: foodTotal + this.data.serviceFee })
  },

  plus(event) {
    this.updateCount(event.currentTarget.dataset.id, 1)
  },

  minus(event) {
    this.updateCount(event.currentTarget.dataset.id, -1)
  },

  updateCount(id, delta) {
    const cart = this.data.cart
      .map((item) => item.id === id ? { ...item, count: item.count + delta } : item)
      .filter((item) => item.count > 0)
    getApp().globalData.cart = cart
    this.setData({ cart }, () => this.compute())
  },

  goBack() {
    wx.navigateBack()
  },

  submitOrder() {
    wx.showToast({ title: '订单已提交', icon: 'success' })
  }
})

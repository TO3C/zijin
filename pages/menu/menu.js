const { categories, dishes } = require('../../utils/menu-data')

Page({
  data: {
    categories,
    dishes,
    activeCategory: 'signature',
    filteredDishes: dishes,
    cart: [],
    totalCount: 0,
    totalPrice: 0
  },

  onLoad() {
    const app = getApp()
    const defaultCart = [
      { ...dishes[0], count: 2 },
      { ...dishes[1], count: 1 }
    ]
    app.globalData.cart = defaultCart
    this.setData({ cart: defaultCart })
    this.refreshList()
    this.computeCart()
  },

  selectCategory(event) {
    this.setData({ activeCategory: event.currentTarget.dataset.id }, () => this.refreshList())
  },

  refreshList() {
    const { activeCategory } = this.data
    const filteredDishes = activeCategory === 'recommend'
      ? dishes.slice(0, 4)
      : dishes.filter((dish) => dish.category === activeCategory || activeCategory === 'signature')
    this.setData({ filteredDishes })
  },

  addDish(event) {
    const id = event.currentTarget.dataset.id
    const dish = dishes.find((item) => item.id === id)
    const cart = [...this.data.cart]
    const found = cart.find((item) => item.id === id)
    if (found) {
      found.count += 1
    } else {
      cart.push({ ...dish, count: 1 })
    }
    getApp().globalData.cart = cart
    this.setData({ cart }, () => this.computeCart())
  },

  computeCart() {
    const totalCount = this.data.cart.reduce((sum, item) => sum + item.count, 0)
    const totalPrice = this.data.cart.reduce((sum, item) => sum + item.price * item.count, 0)
    this.setData({ totalCount, totalPrice })
  },

  goConfirm() {
    wx.navigateTo({ url: '/pages/confirm/confirm' })
  }
})

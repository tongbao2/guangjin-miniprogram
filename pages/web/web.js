Page({
  data: {
    url: '',
    title: ''
  },
  onLoad(options) {
    if (options.url) {
      const url = decodeURIComponent(options.url)
      this.setData({
        url: url,
        title: getDomain(url)
      })
      wx.showToast({
        title: '加载中...',
        icon: 'loading',
        duration: 1000
      })
    }
  },
  goBack() {
    wx.navigateBack()
  }
})

function getDomain(url) {
  try {
    const match = url.match(/https?:\/\/(www\.)?([^\/]+)/)
    if (match && match[2]) return match[2]
    return '广金网'
  } catch {
    return '广金网'
  }
}

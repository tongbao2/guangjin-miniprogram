Page({
  data: {
    websites: [
      {name: "伦敦行情", desc: "全球金属报价", url: "https://3g.mi818.com", icon: "🌍", bgColor: "#0D4C8F"},
      {name: "南海铝锭", desc: "铝锭实时报价", url: "https://www.lvdingjia.com", icon: "🏭", bgColor: "#E63946"},
      {name: "佛山报价", desc: "铜铝不锈钢行情", url: "https://m.ccmn.cn/mhangqing/", icon: "🏢", bgColor: "#FFA726"},
      {name: "废旧市场", desc: "废料价格行情", url: "https://baojia.feijiu.net", icon: "♻️", bgColor: "#6A994E"},
      {name: "报价预测", desc: "价格趋势分析", url: "https://baojia.feijiu.net/price-p-cid-bjcid-dqid22.-.html", icon: "📈", bgColor: "#8E44AD"},
      {name: "今日黄金", desc: "黄金价格走势", url: "https://m.cngold.org/home/lm13/", icon: "💰", bgColor: "#FFD700"},
      {name: "金属快讯", desc: "行业新闻动态", url: "http://www.fsmi818.com/news/list_pid_9.html", icon: "📰", bgColor: "#1D3557"},
      {name: "中金信息", desc: "金融信息汇总", url: "https://www.metalsinfo.com/newsflash/index.html", icon: "📊", bgColor: "#457B9D"},
      {name: "7x24 快讯", desc: "全天候行情资讯", url: "https://www.fx678.com/kx", icon: "⏰", bgColor: "#1B9AAA"},
      {name: "历史报价", desc: "铝价历史数据", url: "https://hq.alu.cn/3/35/p197/", icon: "📅", bgColor: "#2A9D8F"}
    ],
    filteredWebsites: []
  },
  onLoad() {
    this.setData({
      filteredWebsites: this.data.websites
    })
  },
  onSearch(e) {
    const keyword = e.detail.value.trim().toLowerCase()
    if (!keyword) {
      this.setData({
        filteredWebsites: this.data.websites
      })
      return
    }
    const filtered = this.data.websites.filter(site => 
      site.name.toLowerCase().includes(keyword) || 
      site.desc.toLowerCase().includes(keyword) ||
      site.url.toLowerCase().includes(keyword)
    )
    this.setData({ filteredWebsites: filtered })
  },
  doSearch() {
    wx.showToast({
      title: '搜索完成',
      icon: 'success',
      duration: 1500
    })
  },
  openUrl(e) {
    const url = e.currentTarget.dataset.url
    wx.navigateTo({
      url: '/pages/web/web?url=' + encodeURIComponent(url)
    })
  }
})

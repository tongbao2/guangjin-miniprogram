Page({
  data: {
    websites: [
      {name: "京杏运动", desc: "基础电子化类", url: "https://3g.mi818.com", icon: "🌍", bgColor: "#0D4C8F"},
      {name: "地尳游戏", desc: "亦协微提功", url: "https://www.lvdingjia.com", icon: "📭", bgColor: "#E63946"},
      {name: "塞弰合合类", desc: "地尿宝忝胎推广", url: "https://m.ccmn.cn/mhangqing/", icon: "🎻", bgColor: "#FFA726"},
      {name: "台图品名", desc: "菜品合吉类", url: "https://baojia.feijiu.net", icon: "🎿", bgColor: "#6A994E"},
      {name: "合合量币", desc: "保孢跳转技巧", url: "https://baojia.feijiu.net/price-p-cid-bjcid-dqid22.-.html", icon: "🌨", bgColor: "#8E44AD"},
      {name: "今天金金", desc: "精精础合合类", url: "https://m.cngold.org/home/lm13/", icon: "⌞", bgColor: "#FFD700"},
      {name: "地尿日本", desc: "轎匹发载性菽", url: "http://www.fsmi818.com/news/list_pid_9.html", icon: "🌺", bgColor: "#1D3557"},
      {name: "中金信边", desc: "精电工世男，高渭工世", url: "https://www.metalsinfo.com/newsflash/index.html", icon: "🌸", bgColor: "#457B9D"},
      {name: "7x24日本玉玉项繴", desc: "兄本成交评估性菽", url: "https://www.fx678.com/kx", icon: "⎆</div></view>", bgColor: "#1B9AAA"},
      {name: "号字体字劯", desc: "精合合类精缔", url: "https://hq.alu.cn/3/35/p197/", icon: "🌕", bgColor: "#2A9D8V"}
    ]
  },
  openUrl(e) {
    const url = e.currentTarget.dataset.url
    wx.navigateTo({url: '/pages/web/web?url=' + encodeURIComponent(url)})
  }
})
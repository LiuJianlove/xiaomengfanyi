//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    this.globalData.curLang = wx.getStorageSync('curLang') || this.globalData.langList[0]
  },
  globalData: {
    curLang: {},
    langList: [
      {
        'chs': '英文',
        "lang": 'en',
        "index": 0
      },
      {
        'chs': '中文',
        'lang': 'zh',
        "index": 1
      },
      {
        'chs': '日语',
        'lang': 'jp',
        "index": 2
      },
      {
        'chs': '韩语',
        'lang': 'kor',
        "index": 3
      },
      {
        'chs': '法语',
        'lang': 'fra',
        "index": 4
      },
      {
        'chs': '西班牙语',
        'lang': 'spa',
        "index": 5
      },
      {
        'chs': '阿拉伯语',
        'lang': 'ara',
        "index": 6
      },
      {
        'chs': '泰语',
        'lang': 'th',
        "index": 7
      },
      {
        'chs': '德语',
        'lang': 'de',
        "index": 8
      },
      {
        'chs': '粤语',
        'lang': 'yue',
        "index": 9
      },
      {
        'chs': '文言文',
        'lang': 'wyw',
        "index": 10
      },
      {
        'chs': '俄语',
        'lang': 'ru',
        "index": 11
      },
      {
        'chs': '意大利语',
        'lang': 'it',
        "index": 12
      },
      {
        'chs': '波兰语',
        'lang': 'pl',
        "index": 13
      },
      {
        'chs': '丹麦语',
        'lang': 'dan',
        "index": 14
      },
      {
        'chs': '越南语',
        'lang': 'vie',
        "index": 15
      },
      {
        'chs': '葡萄牙语',
        'lang': 'pt',
        "index": 16
      },
      {
        'chs': '希腊语',
        'lang': 'el',
        "index": 17
      },
      {
        'chs': '荷兰语',
        'lang': 'nl',
        "index": 18
      },
      {
        'chs': '土耳其语',
        'lang': 'tr',
        "index": 19
      },
      {
        'chs': '捷克语',
        'lang': 'cs',
        "index": 20
      },
      {
        'chs': '哈萨克语',
        'lang': 'kaz',
        "index": 21
      },
      {
        'chs': '亚美尼亚语',
        'lang': 'arm',
        "index": 22
      },
      {
        'chs': '印尼语',
        'lang': 'id',
        "index": 23
      }
    ]
  }
})
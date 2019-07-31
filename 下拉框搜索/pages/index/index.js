//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    list: [{
      userid: 123,
      username: "张三"
    }, {
      userid: 456,
      username: "张四"
    }, {
      userid: 789,
      username: "王三"
    }, {
      userid: 101,
      username: "王四"
    }]
  },
  
  onLoad: function () {
   
  },
  change(e) {///自定义方法
    console.log('change', e.detail.id)
  },
})

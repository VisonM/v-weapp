// components/marquee-item/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  relations:{
    "../marquee/index":{
      type:"parent"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    top:0,
    height:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    updateData() {     
      const query=wx.createSelectorQuery().in(this)
      const className =".wuss-marquee-slide-item"
      query.select(className).boundingClientRect(res=>{
        this.setData({
          top:res.top,
          height:res.height
        })
      }).exec()
    }
  }
})

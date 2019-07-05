Component({
  externalClasses: ['i-class'],
  properties: {
    name: {
      type: String
    }
  },
  relations: {
    '../index/index': {
      type: 'parent'
    }
  },
  data: {
    top: 0,
    height: 0,
    currentName: ''
  },
  methods: {
    updateDataChange() {
      console.log("item___updateDataChange")
      const className = '.i-index-item';
      //-------in(this)-----选择范围在组件之内
      const query = wx.createSelectorQuery().in(this);
      query.select(className).boundingClientRect((res) => {
        this.setData({
          top: res.top,
          height: res.height,
          currentName: this.data.name
        })
      }).exec()
    },
    handleItemClick(e) {
      this.triggerEvent("click", e)
    }
  }
})
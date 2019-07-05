Component({
  externalClasses: ['i-class'],
  properties: {
    height: {
      type: String,
      value: '300'
    },
    itemHeight: {
      type: Number,
      value: 18
    },
    sticky:{
      type:Boolean,
      value:true
    }
  },
  relations: {
    '../index-item/index': {
      type: 'child',
      linked() {
        //link在attach之后，所以attach拿不到getRelationNodes
        this._updateDataChange();
      },
      linkChanged() {
        console.log("linkedChange")
        this._updateDataChange();
      },
      unlinked() {
        console.log("unlinked")
        this._updateDataChange();
      }
    }
  },
  data: {
    scrollTop: 0,
    fixedData: [],
    current: 0,
    timer: null,
    startTop: 0,
    itemLength: 0,
    currentName: '',
    isTouches: false
  },
  lifetimes: {
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
      clearTimeout(this.data.timer)
    },
  },
  methods: {
    loop() {},
    _updateDataChange() {
      console.log("_updateDataChange")
      const indexItems = this.getRelationNodes('../index-item/index');
      const len = indexItems.length;
      const fixedData = this.data.fixedData;
      /*
       * 使用函数节流限制重复去设置数组内容进而限制多次重复渲染
       * 暂时没有研究微信在渲染的时候是否会进行函数节流
       */
      if (len <= 0) {
        return
      }
      if (this.data.timer) {
        clearTimeout(this.data.timer)
        this.setData({
          timer: null
        })
      }

      this.data.timer = setTimeout(() => {
        const data = [];
        indexItems.forEach((item) => {
          if (item.data.name && fixedData.indexOf(item.data.name) === -1) {
            data.push(item.data.name);
            item.updateDataChange();
          }
        })
        this.setData({
          fixedData: data,
          currentName:data[0],
          itemLength: indexItems.length
        })
        //组件加载完成之后重新设置顶部高度
        this.setTouchStartVal();
      }, 0);
      this.setData({
        timer: this.data.timer
      })
    },
    handlerScroll(event) {
      const detail = event.detail;
      const scrollTop = detail.scrollTop;
      const indexItems = this.getRelationNodes('../index-item/index');
      indexItems.forEach((item, index) => {
        let data = item.data;
        let offset = data.top + data.height;
        if (scrollTop < offset && scrollTop >= data.top) {
          this.setData({
            current: index,
            currentName: data.currentName
          })
        }
      })
    },
    getCurrentItem(index) {
      const indexItems = this.getRelationNodes('../index-item/index');
      return {
        ...indexItems[index].data,
        total: indexItems.length
      };
    },
    handlerTouchMove(event) {
      const data = this.data;
      const touches = event.touches[0] || {};
      const pageY = touches.pageY;
      const rest = pageY - data.startTop;
      let index = Math.floor(rest / data.itemHeight);
      index = Math.max(0, index >= data.itemLength ? data.itemLength - 1 : index);

      const movePosition = this.getCurrentItem(index);
      
      this.setData({
        scrollTop: movePosition.top,
        currentName: movePosition.name,
        isTouches: true
      })

      this.triggerEvent('change', {
        index: index,
        current: movePosition.name
      })

    },
    handlerTouchEnd() {
      this.setData({
        isTouches: false
      })
    },
    setTouchStartVal() {
      console.log("setTouchStartVal")
      const className = '.i-index-fixed';
      const query = wx.createSelectorQuery().in(this);
      query.select(className).boundingClientRect((res) => {
        this.setData({
          startTop: res.top
        })
      }).exec()
    }
  }
})
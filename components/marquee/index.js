// components/marquee/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

    interval: {
      type: Number,
      value: 3000,
    },
    defaultIndex: {
      type: Number,
      value: 0,
      observer(val) {
        this.setData({
          _currentIndex: val
        })
      }
    },
    itemHeight: {
      type: Number,
      value: 44,
    },
  },
  relations: {
    "../marquee-item/index": {
      type: "child",
      linked() {
        this.updateItemData()
      },
      linkChanged() {

      },
      unlinked() {

      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    _isOnready: false,
    _containerHeight: 0,
    _styles: '',
    _currentIndex: 0,
    _autoplay: null,
    itemLength: 0,
    timer: null
  },

  /**
   * 组件的方法列表
   */
  methods: {
    updateItemData() {
      let nodeLists = this.getRelationNodes("../marquee-item/index")
      const length = nodeLists.length;
      if (length <= 0) {
        return
      }
      if (this.data.timer) {
        clearTimeout(this.data.timer)
        this.setData({
          timer: null
        })
      }
      this.data.timer = setTimeout(() => {
        nodeLists.forEach(item => {
          item.updateData()
        })
        this.setData({
          itemLength: length
        }, () => {
          this.initMarquee()
        })

      }, 0)
    },
    initMarquee() {
      const {
        _currentIndex,
        itemHeight
      } = this.data;
      this.setData({
        _styles: `transform: translate3d(0%,-${itemHeight * _currentIndex}px,0);`,
      }, () => this.autoPlay());
    },
    autoPlay() {
      const {
        interval
      } = this.data;
      if (this.data._autoplay) {
        clearInterval(this.data._autoplay);
      }
      this.setData({
        _autoplay: setInterval(() => this.nextMarquee(this.data._currentIndex), interval),
      })
    },
    nextMarquee(index) {
      let {
        itemHeight,
        _currentIndex,
        itemLength
      } = this.data;
      this.setData({
        _styles: `transform: translate3d(0%,-${index > itemLength ? itemHeight : itemHeight * index}px,0);`,
        _currentIndex: _currentIndex >= --itemLength || index > itemLength ? 0 : ++_currentIndex,
      }, () => this.triggerEvent('onChange', {
        value: this.data._currentIndex
      }, {}));
    },
  }
})
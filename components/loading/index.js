// components/loading/index.js

const DEFAULT_OPTIONS = {
  content: '加载中...',
  showText: true,
  timeout: null,
  hide: () => void 0,
};
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    customIcon:{
      type:Boolean,
      value:true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    _visible: false,
    anidata: null,
    aniPath: 'https://assets5.lottiefiles.com/datafiles/zc3XRzudyWE36ZBJr7PIkkqq0PFIrIBgp4ojqShI/newAnimation.json',
    width: 100,
    height: 100
  },

  /**
   * 组件的方法列表
   */
  methods: {
    show(opts = {}) {
      const {
        timeout,
        content,
        _visible
      } = opts
      if (_visible) return false;
      const _p = new Promise(resolve => {
        if (timeout && typeof timeout === 'number') {
          return setTimeout(() => {
            this.hide();
            resolve();
          }, timeout);
        }
      })
      this.setData({
        _visible: true,
        ...DEFAULT_OPTIONS,
        ...opts,
      })
      return _p;
    },
    hide() {
      const {
        hideCb,
        _visible
      } = this.data;
      if (!_visible) return false;
      this.setData({
        _visible: false,
        ...DEFAULT_OPTIONS,
      })
      console.log("hey")
      if (hideCb) return hideCb();
    }
  }
})
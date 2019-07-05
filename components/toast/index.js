const DEFAULTS_OPTS = {
  type: '',
  duration: 1500,
  mask: false,
  message: '',
  size: 100,
  color: '#ffffff',
  position: 'default',
};

const DEFAULT_TOAST = {
  hide: null, // 隐藏hide方法
  time: null, // 定时器
};
const DURATION = 100;
let wussToast = {
  ...DEFAULT_TOAST
};
const toast_Animation = wx.createAnimation({
  duration: DURATION
});
// components/toast/index.js
Component({
  /**
   * 组件的初始数据
   * @param {boolean} visible 组件是否可见
   */
  data: {
    visible: false,
    animationData: {},
  },
  methods: {
    show({
      position = 'default',
      ...opts
    }) {
      const p = new Promise(resolve => {
        if (wussToast.time) {
          console.log("time exist")
          wussToast.hide(true);
          wussToast = { ...DEFAULT_TOAST
          };
        }
        console.log("time no exist")
        wussToast.hide = isHide => {
          this.hide(position, isHide);
          resolve(true);
        };
        this.setData({
            ...DEFAULTS_OPTS,
            ...opts,
            position,
            visible: true,
          },
          () => {
            setTimeout(() => {
              this._move(position, wussToast);
            }, 20);
          }
        );
      });
      wussToast.then = (resolve, reject) => {
        return p.then(resolve, reject);
      };
      return wussToast;
    },
    _move(position, wussToast) {
      switch (position) {
        case 'top':
          toast_Animation.top('170rpx');
          break;
        case 'bottom':
          toast_Animation.bottom('170rpx');
          break;
      }
      this.setData({
          animationData: toast_Animation
            .opacity(1)
            .step()
            .export(),
        },
        () => {
          this.data.duration &&
            (wussToast.time = setTimeout(
              wussToast.hide,
              this.data.duration + DURATION
            ));
        }
      );
    },
    hide(position, isHide) {
      clearTimeout(wussToast.time);
      wussToast = { ...DEFAULT_TOAST
      };
      switch (position) {
        case 'top':
          toast_Animation.top('0');
          break;
        case 'bottom':
          toast_Animation.bottom('0');
          break;
      }

      this.setData({
          animationData: toast_Animation
            .opacity(0)
            .step()
            .export(),
        },
        () => {
          !isHide &&
            setTimeout(() => {
              this.setData({
                position: '',
                visible: false
              });
            }, DURATION);
        }
      );
    },
    toastClick() {
      this.triggerEvent('onClick', {});
    },
  },
})
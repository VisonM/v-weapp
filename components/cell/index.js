// components/cell/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String
    },
    // 标题下方的描述信息
    label: {
      type: String
    },
    // 右侧内容
    value: {
      type: String
    },
    isLink: {
      type: null,
      value: ''
    },
  },
  options: {
    multipleSlots: true
  },
  relations: {
    '../cell-group/index': {
      type: 'parent', // 关联的目标节点应为父节点
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    isLastCell: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    updateIsLastCell(isLastCell) {
      this.setData({
        isLastCell
      });
    },
    handleClick(e){
      this.triggerEvent("click",e)
    }
  }
})
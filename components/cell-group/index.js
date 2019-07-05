// components/cell-group/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String
    }
  },
  relations: {
    '../cell/index': {
      type: 'child', // 关联的目标节点应为子节点
      linked: function(target) {
        this._updateIsLastCell()
      },
      linkChanged: function(target) {
        this._updateIsLastCell()
      },
      unlinked: function(target) {
        this._updateIsLastCell()
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    _updateIsLastCell() {
      let cells = this.getRelationNodes('../cell/index');
      const len = cells.length;
      if (len <= 0) {
        return
      }
      let lastIndex = len - 1;

      cells.forEach((cell, index) => {
        cell.updateIsLastCell(index === lastIndex);
      });
    }
  }
})
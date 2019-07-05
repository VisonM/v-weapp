const getCurrentPage = () => {
  const pages = getCurrentPages();
  return pages[pages.length - 1];
};

const getCtx = selector => {
  const page = getCurrentPage();
  const component = page.selectComponent(selector);
  if (!component) {
    throw Error(`无法找到对应的组件: ${selector}`);
  }
  return component;
};

const Toast = {
  show: (opts = {}) => {
    const componentCtx = getCtx('#v-toast');
    return componentCtx.show(opts);
  },
};

const Loading = {
  show: (opts = {}) => {
    const componentCtx = getCtx('#v-loading');
    return componentCtx.show(opts)
  },
  hide: (options = {}) => {
    const componentCtx = getCtx('#v-loading');
    return componentCtx.hide(options);
  },
}

module.exports = {
  Toast,
  Loading
};
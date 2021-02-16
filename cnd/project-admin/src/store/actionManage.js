/*
* 各个组件间的交互事件、状态传递
*/

const actionManage = {
  state: () => ({
    // 当前状态集合
    currState: {
      pageIndex: 1 // 当前激活的分页列表的页号
    },
    // tab标签集合
    tabs: [
      {
        id: 1,
        title: '桌面', // tab的标题
        name: 'home' // tab的名称
      }
    ]
    // 组件数据集合
  }),
  mutations: {
    // 添加动态tab
  },
  actions: {
  }
}

export default actionManage

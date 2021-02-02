const config = {
  dbName: 'dbTest',
  ver: 1,
  debug: true,
  objectStores: [ // 建库依据
    {
      objectStoreName: 'blog',
      index: [ // 索引 ， unique 是否可以重复
        { name: 'groupId', unique: false }
      ]
    }
  ],
  objects: { // 初始化数据
    blog: [
      {
        id: 1,
        groupId: 1,
        title: '这是一个博客',
        addTime: '2020-10-15',
        introduction: '这是博客简介',
        concent: '这是博客的详细内容<br>第二行',
        viewCount: 1,
        agreeCount: 1
      },
      {
        id: 2,
        groupId: 2,
        title: '这是两个博客',
        addTime: '2020-10-15',
        introduction: '这是博客简介',
        concent: '这是博客的详细内容<br>第二行',
        viewCount: 10,
        agreeCount: 10
      }
    ]
  }
}

export default config

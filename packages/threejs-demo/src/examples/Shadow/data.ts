export const secondData = {
  one: {
    title: '入门',
    content: '无言独上西楼',
    key: 'one' as const,
  },
  two: {
    title: '熟悉',
    content: '锁清秋',
    key: 'two' as const,
  },
  three: {
    title: '精通',
    content: '寂寞梧桐深院锁清秋',
    key: 'three' as const,
  },
}

export type SecondDataKeys = keyof typeof secondData

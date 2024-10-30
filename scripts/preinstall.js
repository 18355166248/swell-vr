const semver = require('semver')

// 获取当前的 Node.js 版本
const currentNodeVersion = process.version

// 定义所需的最低版本
const requiredVersion = '20.17.0'

// 检查当前版本是否符合要求
if (semver.lt(currentNodeVersion, requiredVersion)) {
  console.error(
    `错误: 当前的 Node.js 版本为 ${currentNodeVersion}。需要的最低版本为 ${requiredVersion}。`,
  )
  process.exit(1) // 退出进程并返回错误码
}

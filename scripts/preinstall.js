const currentNodeVersion = process.version // 获取当前 Node.js 版本，如 'v20.17.0'
const requiredVersion = '20.17.0' // 定义所需的最低版本

/**
 * 将版本字符串转化为对象 { major, minor, patch }
 * @param {string} version 版本字符串，如 '20.17.0'
 * @returns {{major: number, minor: number, patch: number}} 版本对象
 */
function parseVersion(version) {
  const [major, minor, patch] = version.replace('v', '').split('.').map(Number)
  return {major, minor, patch}
}

/**
 * 比较两个版本
 * @param {{major: number, minor: number, patch: number}} current 当前版本对象
 * @param {{major: number, minor: number, patch: number}} required 所需版本对象
 * @returns {boolean} 如果当前版本小于所需版本，返回 true，否则返回 false
 */
function isVersionLessThan(current, required) {
  if (current.major < required.major) return true
  if (current.major > required.major) return false

  if (current.minor < required.minor) return true
  if (current.minor > required.minor) return false

  if (current.patch < required.patch) return true
  return false
}

const current = parseVersion(currentNodeVersion)
const required = parseVersion(requiredVersion)

if (isVersionLessThan(current, required)) {
  console.error(
    `错误: 当前的 Node.js 版本为 ${currentNodeVersion}。需要的最低版本为 v${requiredVersion}。`,
  )
  process.exit(1) // 退出进程并返回错误码
}

/**
 * 生成UUID（通用唯一标识符）
 * @param length 生成的UUID长度，默认为10
 * @param charPoolSize 字符池大小，默认为62（包含数字、大小写字母）
 * @returns 生成的UUID字符串
 */
export function uuid(length = 10, charPoolSize = 62) {
  // 定义字符池，包含数字、大小写字母
  const charPool =
    '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
  const result = []
  let index = 0

  // 如果指定了长度，生成指定长度的随机UUID
  if (((charPoolSize = charPoolSize || charPool.length), length)) {
    for (index = 0; index < length; index++) {
      result[index] = charPool[0 | (Math.random() * charPoolSize)]
    }
  }
  // 否则生成标准格式的UUID（8-4-4-4-12格式）
  else {
    let randomNum
    // 设置UUID的分隔符和版本号
    for (
      result[8] = result[13] = result[18] = result[23] = '-',
        result[14] = '4',
        index = 0;
      index < 36;
      index++
    ) {
      if (!result[index]) {
        randomNum = 0 | (Math.random() * 16)
        // 确保UUID符合规范（第19位的高位为二进制10xx）
        result[index] = charPool[index == 19 ? (randomNum & 3) | 8 : randomNum]
      }
    }
  }

  return result.join('')
}

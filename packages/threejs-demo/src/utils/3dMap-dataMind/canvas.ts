export function exportCanvasToImage(
  resultCanvas: HTMLCanvasElement,
  filename: string,
) {
  // 注释掉的导出图片功能
  // 生成图片数据URL（PNG格式，默认质量0.9）
  const dataUrl = resultCanvas.toDataURL('image/png', 0.9)
  // 创建隐藏的下载链接
  const link = document.createElement('a')
  link.href = dataUrl
  link.download = filename // 自定义文件名
  // 触发下载
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

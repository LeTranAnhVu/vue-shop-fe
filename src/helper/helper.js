
export function getBase64Image (img) {
  let canvas = document.createElement('canvas')
  canvas.width = img.width
  canvas.height = img.height

  let ctx = canvas.getContext('2d')
  ctx.drawImage(img, 0, 0)

  let dataURL = canvas.toDataURL('image/png')

  return dataURL.replace(/^data:image\/(png|jpg);base64,/, '')
}
export function saveImageToLocalStorage (img) {
  const imgData = getBase64Image(img)
  console.log('data', imgData)
  localStorage.setItem(img.src, imgData)
}

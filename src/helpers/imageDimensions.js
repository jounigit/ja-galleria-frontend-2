export const imageDimensions = (imageUrl) => {
  const img = new Image()
  img.src = imageUrl

  //   console.log('Image - w: ', img.width, ' h: ', img.height)
  return { height: img.height, width: img.width }
}

export const imageOrientation = (imageUrl) => {
  const { width, height } = imageDimensions(imageUrl)

  return width < height ? 'isPortrait' : 'isLandscape'
}

export const goldenRatioCss = (imageUrl) => {
  const { height, width } = imageDimensions(imageUrl)
  const orientation = imageOrientation(imageUrl)
  const ratio = 5/8

  const hRatio =  height*ratio
  let grCss

  console.log('Ratio: ', ratio, ' sum: ', hRatio)

  // eslint-disable-next-line quotes
  grCss = ( orientation === 'isPortrait' ) ?
    { width: width, height: hRatio } :
    { width: width, height: height }

  console.log('Image CSS: ', grCss)
  return grCss
}
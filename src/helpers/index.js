export const isOwner = ({ id, auth }) => auth.user && id === auth.user.id

export const arrangeArr = (arr, cols) => {
  let arraySplit = []
  let factor = Math.ceil((arr.length/cols))

  for (let i=0; i<factor; i++) {

    let arrayIndex = i

    for (let j = 0; j < cols; j++) {
      if (!arraySplit[i]) { arraySplit[i] = [] }

      if (arr[arrayIndex+j]) {
        arraySplit[i].push(arr[arrayIndex+j])
        arrayIndex +=(factor-1)
      }
    }
  }

  console.log('arraySplit: ', arraySplit)
  return arraySplit
}

export const chunkArray = (array, size) => {
  let result = []
  let arrayCopy = [...array]
  while (arrayCopy.length > 0) {
    result.push(arrayCopy.splice(0, size))
  }
  return result
}

export const picsToArrays = (array, cols) => {
  let factor = Math.ceil((array.length/cols))
  return chunkArray(array, factor)
}

export const setBgColor = colorsArray => colorsArray[Math.floor(Math.random()*colorsArray.length)]

export const shuffleArray = array => array.sort(() => 0.5 - Math.random())

export { default as colors } from './colors'
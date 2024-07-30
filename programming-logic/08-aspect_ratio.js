const URL = 'https://github.com/AngelicaArroyave/music-festival/blob/main/src/img/imagen_dj.jpg'

function getAspectRatio() {
    const img = new Image()
    const width = img.width
    const height = img.height
    const aspectRatio = width / height
    console.log("🚀 ~ aspectRatio:", aspectRatio)
}

getAspectRatio()
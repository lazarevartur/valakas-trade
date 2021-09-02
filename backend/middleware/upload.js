import multer from 'multer'
import dayjs from 'dayjs'

const fileType = {
  png: 'image/png',
  jpeg: 'image/jpeg',
  jpg: 'image/jpg'
}

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, `./backend/public/uploads/`)
  },
  filename(req, file, cb) {
    const fileNameSplit = file.originalname.split('.')
    const type = fileNameSplit[fileNameSplit.length-1]
    const date = dayjs().format('DDMMYYYY-HHmmss_SSS')
    cb(null,`${date}.${type}`)
  },
})
const fileFilter = (req, file, cb) => {
  if(
    file.mimetype === fileType.png
    || file.mimetype === fileType.jpeg
    || file.mimetype === fileType.jpg
  ){
    cb(null, true)
  } else  {
    cb(null, false)
  }
}

const limits = {
  fileSize: 1024*1024*5
}

export default multer({
  storage,fileFilter,limits
})
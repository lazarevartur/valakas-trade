import { unlink } from 'fs';



export class FileService {
  static deleteFile = async (path, type ='file') => {
    if (path) {
      path = './backend' + path
      unlink(path, (err) => {
        if (err) console.log(err);
        console.log(`delete ${type} ${path}`);
      });
    }
    return void 0
  }
}
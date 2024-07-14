import express from 'express';
import { writeFile } from 'node:fs/promises';
import path from 'path';

import {
  getUsers,
  createUser,
  updateUser,
  deleteUser
} from './controllers/users/userController.js';

import multer from 'multer'
// const upload = multer({ dest: 'uploads/' })
const upload = multer().single('avatar')

export const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World!')
})

router.post('/', (req, res) => {
  res.send('Got a POST request')
})

router.get('/user', getUsers)
router.post('/user', createUser)
router.put('/user', updateUser)
router.delete('/user', deleteUser)

// router.post('/file', upload.single('avatar'), function (req, res, next) {
//   // req.file is the `avatar` file
//   // req.body will hold the text fields, if there were any
//   console.log('--req.file--', req.file);
//   console.log('--req.body--', req.body);
//   res.status(201).json({data: 'fileUploaded'})
// })

router.post('/profile', function (req, res) {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      // A Multer error occurred when uploading.
    } else if (err) {
      // An unknown error occurred when uploading.
    }

    // Everything went fine.
    console.log('--req.file--', req.file);
    console.log('--req.body--', req.body);
    const __dirname = path.resolve(path.dirname(''));
    const baseDir = path.join(__dirname, '/./uploads/');

    const uniquePrefix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    
    const fileName = `${baseDir}${uniquePrefix}_${req.file.originalname}`;

    writeFile(fileName, req.file.buffer, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    }); 
    res.status(201).json({data: 'fileUploaded'})
  })
})


export default router;
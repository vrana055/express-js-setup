import express from 'express';

import router from './routers.js';
import { dbConnect } from './mongo/index.js';

const app = express()
const port = 3000

app.use('/', router);

dbConnect()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
import mongoose from 'mongoose';

export const dbConnect = () => {
  // mongoose.connect('mongodb+srv://mongodb000:Eg7ErFcCTYoqixwD@cluster0.ayur2dh.mongodb.net/sample_mflix?retryWrites=true&w=majority&appName=Cluster0')
  mongoose.connect('mongodb://mongodb-001:27017/sample_mflix?retryWrites=true&w=majority&appName=Cluster0')
  .then((obj) => {
    console.log('✨connected to mongodb');
    return Promise.resolve(obj);
  })
  .catch(err => console.log(err))
}

export default {}

const Mongoose = require('mongoose');
Mongoose.connect('mongodb://user_latihan:123456@127.0.0.1:27017/latihan?authSource=admin', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

const db = Mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connect')
});
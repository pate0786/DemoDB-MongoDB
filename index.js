const express = require('express'),
  mongoose = require('mongoose');

const UserModel = require('./models/user'),
  TicketMode = require('./models/ticket'),
  ArticleModel = require('./models/article');

  
  // mongoose.connect("mongodb://localhost:27017/_api", {
  //     useCreateIndex: true,
  //     useNewUrlParser: true,
  //     useUnifiedTopology: true,
  //     useFindAndModify: false
  // }).then(() => {
  //     console.log("connected");
  
  // }).catch((e) => {
  //     console.log("not connected");
  // })
  const port = process.env.PORT ?? 4000,
  dbpath = 'mongodb://localhost:27017/TEST';
    process.env.DBPATH ??
    'mongodb://localhost:27017/TEST',
  app = express();

mongoose
  .connect(dbpath, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

app.listen(port, () =>
  console.log(`Server started on port http://localhost:${port}/`)
);

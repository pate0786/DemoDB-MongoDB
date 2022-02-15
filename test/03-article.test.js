const mongoose = require('mongoose');
const articleModel = require('../models/article');
const dbpath =
'mongodb://localhost:27017/TEST';

describe('Article Model', () => {
  jest.setTimeout(10000);

  beforeAll(async () => {
    const dbResponse = await mongoose.connect(dbpath, {
      
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //useCreateIndex: true,
      //useNewUrlParser: true,
      //useUnifiedTopology: true,
      //useFindAndModify: false
    });

    if (dbResponse.catch)
      dbResponse.catch((err) => {
        throw err;
      });
  });

  it('should be able to create an article', async () => {
    const article = await articleModel.create({
      title: 'Random Title',
      topic: 'Random Topic',
      author: '5f4c9f8f9b9e7f0f8b8b8b8b',
      role: 'Random Role',
      region: 'Random Region',
    });

    expect(article.title).toEqual('Random Title');
    expect(article.topic).toEqual('Random Topic');
    expect(article.role).toEqual('Random Role');
    expect(article.region).toEqual('Random Region');
  });

  it('should be able to read articles', async () => {
    const articles = await articleModel.find({});

    // if articles.length exists, then array was returned which means that db responded properly
    expect(articles.length).toBeDefined();
  });
});

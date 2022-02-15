const mongoose = require('mongoose');
const userModel = require('../models/user');
const dbpath =
'mongodb://localhost:27017/TEST';

describe('User Model', () => {
  jest.setTimeout(10000);

  beforeAll(async () => {
    const dbResponse = await mongoose.connect(dbpath, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    if (dbResponse.catch)
      dbResponse.catch((err) => {
        throw err;
      });
  });

  it('should be able to create a user', async () => {
    const user = await userModel.create({
      name: 'Random Name',
      role: 'Random Role',
      region: 'Random Region',
    });

    expect(user).toMatchObject({
      name: 'Random Name',
      role: 'Random Role',
      region: 'Random Region',
    });
  });

  it('should be able to read users', async () => {
    const user = await userModel.find({});

    // if user.length exists, then array was returned which means that db responded properly
    expect(user.length).toBeDefined();
  });
});

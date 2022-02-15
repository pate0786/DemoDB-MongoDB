const mongoose = require('mongoose');
const ticketModel = require('../models/ticket');
const dbpath =
'mongodb://localhost:27017/TEST';

describe('Ticket Model', () => {
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

  it('should be able to create a ticket', async () => {
    const ticket = await ticketModel.create({
      topic: 'Random Topic',
      user: '5f4c9f8f9b9e7f0f8b8b8b8b',
      date: '10/10/2020',
    });

    expect(ticket.topic).toEqual('Random Topic');
  });

  it('should be able to read tickets', async () => {
    const tickets = await ticketModel.find({});

    // if ticket.length exists, then array was returned which means that db responded properly
    expect(tickets.length).toBeDefined();
  });
});

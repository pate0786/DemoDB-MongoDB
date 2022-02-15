const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  topic: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const TicketModel = mongoose.model('Ticket', ticketSchema);

module.exports = TicketModel;

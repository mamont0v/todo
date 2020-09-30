"use strict";

var mongoose = require('mongoose');

module.exports = {
  connect: function connect(DB_HOST) {
    // Use the Mongo driver's updated URL string parser
    mongoose.set('useNewUrlParser', true); // Use findOneAndUpdate() in place of findAndModify()

    mongoose.set('useFindAndModify', false); // Use createIndex() in place of ensureIndex()

    mongoose.set('useCreateIndex', true); // Use the new server discovery and monitoring engine

    mongoose.set('useUnifiedTopology', true); // Connect to the DB

    mongoose.connect(DB_HOST); // Log an error if we fail to connect

    mongoose.connection.on('error', function (err) {
      console.error(err);
      console.log("MongoDB connection error. Please make sure MongoDB\n   is running.");
      process.exit();
    });
  },
  close: function close() {
    mongoose.connection.close();
  }
};
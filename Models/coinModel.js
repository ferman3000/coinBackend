const dynamoose = require('dynamoose');

const schema = new dynamoose.Schema(
  {
    id: {
      type: String,
      hashKey: true,
    },
    symbol: String,
    price: Number,
  },
  {
    timestamps: true,
  }
);

const CoinsModel = dynamoose.model('userstable', schema, {
  create: true,
  throughput: {
    read: 5,
    write: 5,
  },
});
module.exports = { CoinsModel };
// createCoin.js

'use strict';

const { getSuccessResponse } = require('../../helper/success');
const { getErrorResponse } = require('../../helper/error');

const { v4: uuidv4 } = require('uuid');
const { CoinsModel } = require('../../Models/CoinModel');

module.exports.main = async (event) => {
  try {
    const request = JSON.parse(event.body);
    const { symbol, price } = request;

    const result = await CoinsModel.create({
      id: uuidv4(),
      symbol,
      price,
    });

    return getSuccessResponse(result);
  } catch (error) {
    console.log(error);
    return getErrorResponse(error);
  }
};
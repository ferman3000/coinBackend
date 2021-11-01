// getCoinById.js

'use strict';
const { getSuccessResponse } = require('../../helper/success');
const { getErrorResponse } = require('../../helper/error');

const { CoinsModel } = require('../../Models/CoinModel');

module.exports.main = async (event) => {
  try {
    const queryStringParameters = event.queryStringParameters;
    const { id } = queryStringParameters;

    const result = await CoinsModel.get({ id });
    return getSuccessResponse(result);
  } catch (error) {
    return getErrorResponse(error);
  }
};
// updateCoin.js

'use strict';

const { getSuccessResponse } = require('../../helper/success');
const { getErrorResponse } = require('../../helper/error');

const { CoinsModel } = require('../../Models/coinModel');

module.exports.main = async (event) => {
  try {
    const request = JSON.parse(event.body);
    const { id, ...data } = request;

    const result = await CoinsModel.update({ id }, { ...data });
    return getSuccessResponse(result);
  } catch (error) {
    return getErrorResponse(error);
  }
};
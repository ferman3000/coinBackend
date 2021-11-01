// deleteUser.js

'use strict';

const { getSuccessResponse } = require('../../helper/success');
const { getErrorResponse } = require('../../helper/error');

const { CoinsModel } = require('../../Models/deleteModel');

module.exports.main = async (event) => {
  try {
    const request = JSON.parse(event.body);
    const { id } = request;

    const result = await CoinsModel.delete({ id });
    return getSuccessResponse(result);
  } catch (error) {
    return getErrorResponse(error);
  }
};
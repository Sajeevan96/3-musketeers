#!/usr/bin/env node
/**
 * Import helpers and cash modules
 */
const Conf = require('conf');
const helpers = require('./helpers.js');
const cash = require('./cash.js');

const config = new Conf();

const argv = process.argv.slice(2);

helpers(argv);

/**
 * Get all details requested by user from command line (and "C:\Users\Username\AppData\Local\cash-nodejs\Config\config.json" file if exists)
 */
const command = {
  'amount': argv[0] || 1,
  'from': argv[1] || config.get('defaultFrom', 'USD'),
  'to':
    argv.length > 2
      ? process.argv.slice(4)
      : config.get('defaultTo', ['USD', 'EUR', 'GBP'])
};

/**
 * Calculate and send the result of the conversion in the command prompt using the cash function
 */
cash(command);

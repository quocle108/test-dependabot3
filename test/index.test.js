const assert = require('assert');

// Verify all dependencies load correctly
const deps = require('../index');

assert.ok(deps.lodash, 'lodash should load');
assert.ok(deps.axios, 'axios should load');
assert.ok(deps.express, 'express should load');
assert.ok(deps.jwt, 'jsonwebtoken should load');
assert.ok(deps.bitcoinjsMessage, 'bitcoinjs-message should load');

console.log('All dependency tests passed');

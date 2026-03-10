/**
 * Test module — imports all dependencies so Dependabot can detect them.
 * Each dependency is chosen to trigger a specific Dependabot case.
 */

const lodash = require('lodash');         // Case 1: Version update (4.17.20 → 4.17.21)
const axios = require('axios');           // Case 2: Security patch (1.6.0 → 1.6.1)
const express = require('express');       // Case 3: Security minor (4.17.1 → 4.19.x)
const jwt = require('jsonwebtoken');      // Case 4: Security major (8.5.1 → 9.0.0)
const bitcoinjsMessage = require('bitcoinjs-message'); // Case 5: No fix (dep has CVE with no patch available)

module.exports = { lodash, axios, express, jwt, bitcoinjsMessage };

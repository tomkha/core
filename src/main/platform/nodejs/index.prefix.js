module.exports = {};
const atob = require('atob');
const btoa = require('btoa');
const JDB = require('@nimiq/jungle-db');
const fs = require('fs');
const https = require('https');
const http = require('http');
const tls = require('tls');
const chalk = require('chalk');

// Allow the user to specify the WebSocket engine through an environment variable. Default to ws
const WebSocket = require('ws');

global.Class = {
    scope: module.exports,
    register: clazz => {
        module.exports[clazz.prototype.constructor.name] = clazz;
    }
};

const NodeNative = require('bindings')('nimiq_node.node');

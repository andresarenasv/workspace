'use strict';

const jsonTranslate = require('..');
const assert = require('assert').strict;

assert.strictEqual(jsonTranslate(), 'Hello from jsonTranslate');
console.info('jsonTranslate tests passed');

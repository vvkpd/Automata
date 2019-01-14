const path = require('path');
const assert = require('chai').assert;
const NFA = require(path.resolve('src/nfa.js'));
const testCases = require(path.resolve('test/testCases.js'));

describe('NFA Test', () => {
    const nfaTestCases = testCases.filter(testcase => testcase.type == 'nfa');

    it('run all NFA test', () => {
        nfaTestCases.forEach(testCase => {
            console.log('>>>>', testCase.name);
            let tuple = testCase.tuple;

            testCase['pass-cases'].forEach(language => {
                let machine = new NFA(tuple);
            })
            
            testCase['fail-cases'].forEach(language => {
                let machine = new NFA(tuple);
            })
        });
    })
})
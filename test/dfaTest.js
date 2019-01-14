const path = require('path');
const assert = require('chai').assert;
const DFA = require(path.resolve('src/dfa.js'));
const testCases = require(path.resolve('test/testCases.js'));

describe('DFA Test', () => {
    const dfaTestCases = testCases.filter(testcase => testcase.type == 'dfa');

    it('run all DFA test', () => {
        dfaTestCases.forEach(testCase => {
            console.log('>>>>', testCase.name);
            let tuple = testCase.tuple;

            testCase['pass-cases'].forEach(language => {
                let machine = new DFA(tuple);
                assert.isTrue(machine.doesAccept(language));
            })
            
            testCase['fail-cases'].forEach(language => {
                let machine = new DFA(tuple);
                assert.isFalse(machine.doesAccept(language));
            })
        });
    })
})
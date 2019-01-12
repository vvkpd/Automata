const path = require('path');
const assert = require('chai').assert;
const DFA = require(path.resolve('src/dfa.js'));

describe('DFA', () => {
    describe('odd number of zeroes', () => {
        it('should accept 0 and 000', () => {
            let tuple = {
                states: ['q1', 'q2'],
                alphabets: ['1', '0'],
                delta: { q1: { '0': 'q2', '1': 'q1' }, q2: { '0': 'q1', '1': 'q2' } },
                'start-state': 'q1',
                'final-states': ['q2']
            };

            let machine = new DFA(tuple);
            assert.isTrue(machine.doesAccept('0'));
            machine = new DFA(tuple);
            assert.isTrue(machine.doesAccept('000'));
        })

        it('should not accept 00', () => {
            let tuple = {
                states: ['q1', 'q2'],
                alphabets: ['1', '0'],
                delta: { q1: { '0': 'q2', '1': 'q1' }, q2: { '0': 'q1', '1': 'q2' } },
                'start-state': 'q1',
                'final-states': ['q2']
            };

            const machine = new DFA(tuple);
            assert.isFalse(machine.doesAccept('00'));
        })

        it('should not accept 001', () => {
            let tuple = {
                states: ['q1', 'q2'],
                alphabets: ['1', '0'],
                delta: { q1: { '0': 'q2', '1': 'q1' }, q2: { '0': 'q1', '1': 'q2' } },
                'start-state': 'q1',
                'final-states': ['q2']
            };

            const machine = new DFA(tuple);
            assert.isFalse(machine.doesAccept('001'));
        })

        it('should not accept empty string', () => {
            let tuple = {
                states: ['q1', 'q2'],
                alphabets: ['1', '0'],
                delta: { q1: { '0': 'q2', '1': 'q1' }, q2: { '0': 'q1', '1': 'q2' } },
                'start-state': 'q1',
                'final-states': ['q2']
            };

            let machine = new DFA(tuple);
            assert.isFalse(machine.doesAccept(''));
        })
    })

    describe('even number of zeroes', () => {
        it('should accept 1001 and 00', () => {
            let tuple = {
                states: ['q1', 'q2'],
                alphabets: ['1', '0'],
                delta: { q1: { '0': 'q2', '1': 'q1' }, q2: { '0': 'q1', '1': 'q2' } },
                'start-state': 'q1',
                'final-states': ['q1']
            }

            let machine = new DFA(tuple);
            assert.isTrue(machine.doesAccept('1001'));
            machine = new DFA(tuple);
            assert.isTrue(machine.doesAccept('00'));
        })

        it('should not accept 10 and 000', () => {
            let tuple = {
                states: ['q1', 'q2'],
                alphabets: ['1', '0'],
                delta: { q1: { '0': 'q2', '1': 'q1' }, q2: { '0': 'q1', '1': 'q2' } },
                'start-state': 'q1',
                'final-states': ['q1']
            }

            let machine = new DFA(tuple);
            assert.isFalse(machine.doesAccept('10'));
            machine = new DFA(tuple);
            assert.isFalse(machine.doesAccept('000'));
        })
    })

    describe('alternate ones and zeroes beginning with zero', () => {
        it('should accept 01010 and 01', () => {
            let tuple = {
                states: ['q1', 'q3', 'q2', 'q4'],
                alphabets: ['1', '0'],
                delta: { 'q1': { '0': 'q2', '1': 'q4' }, 'q2': { '0': 'q4', '1': 'q3' }, 'q3': { '0': 'q2', '1': 'q4' }, 'q4': { '0': 'q4', '1': 'q4' } },
                'start-state': 'q1',
                'final-states': ['q3', 'q2']
            }

            let machine = new DFA(tuple);
            assert.isTrue(machine.doesAccept('01'));
            machine = new DFA(tuple);
            assert.isTrue(machine.doesAccept('01010'));
        })
    })
})
class DFA {
    constructor(tuple) {
        this.tuple = tuple;
        this.currentState = tuple['start-state'];
    }

    getNextState(alphabet) {
        return this.tuple.delta[this.currentState][alphabet];
    }

    doesAccept(language) {
        language.split('').forEach(alphabet => {
            this.currentState = this.getNextState(alphabet);
        });
        return this.tuple['final-states'].includes(this.currentState);
    }
}
module.exports = DFA;
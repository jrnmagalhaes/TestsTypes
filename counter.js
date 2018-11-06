class Counter {
    constructor(){
        this.counter = 0;
    }

    tick(){
        this.counter += 1;
    }
}

module.exports = Counter;
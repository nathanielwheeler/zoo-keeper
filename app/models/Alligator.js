class Alligator {
    constructor(data) {
        this.id = 0;
        this.name = data.name || null;
        this.color = data.color || null;
        this.sex = data.sex || null;
        this.weight = data.weight || null;
        this.tailLengthInch = data.tailLengthInch || null;
        this.teethSize = data.teethSize || null;
    }
    eat(food) {
        console.log(`Chomp chomp all the ${food}ies.`)
    }
}

export default Alligator;

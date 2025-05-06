class Meditation {
    constructor(minutes) {
        this.minutes = minutes;
    }

    async start() {
        for (var i = this.minutes; i > 0; i--) {
            await new Promise(result => setTimeout(result, 1000));
            console.log(i);
        }
        console.log("Jay Guru Dev")
    }
}

const morning_meditation = new Meditation(5);
morning_meditation.start();
console.log("Start meditation");
class Car2 {
    private isLocked: boolean = true;
    protected isLocked2: boolean = true;
    isLocked3: boolean;

    constructor() {
        this.isLocked = true;
        this.isLocked3 = true;

    }

    private add() { }
}

new Car2()
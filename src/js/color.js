class Color {
    constructor() {
        var min = 32;
        var max = 256 - 32;

        this.red = Math.round(Math.random() * (max-min) + min);
        this.green = Math.round(Math.random() * (max-min) + min);
        this.blue = Math.round(Math.random() * (max-min) + min);
    }

    next() {
        this.red = (this.red + 1) % 255;
        this.green = (this.green + 1) % 255;
        this.blue = (this.blue + 1) % 255;
    }

    get color() {
       return "#"
           + this.red.toString(16)
           + this.green.toString(16)
           + this.blue.toString(16);
    }
}

export { Color as default }

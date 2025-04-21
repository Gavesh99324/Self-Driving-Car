class Car {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.speed = 0;
        this.acceleration = 0.2;

        this.controls = new Controls();
    }

    update() {
        if (this.controls.forward) {
            this.speed+=this.acceleration;
        }
        if (this.controls.reverse) {
            this.y+=2;
        }
        this.y-= this.speed;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fill();
    }
}
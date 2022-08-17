import { Transmission } from "./product";

class GRXTransmission implements Transmission {
    speed = 0;
    private name = 'GRXTransmission';

    stop() {
        console.log('Stop');
    };

    upBackSpeed(): void {
        console.log('upBackSpeed');
    };

    downBackSpeed(): void {
        console.log('downBackSpeed');
    };

    upFrontSpeed(): void {
        console.log('upFrontSpeed');
    };

    downFrontSpeed(): void {
        console.log('downFrontSpeed');
    };

    getName(): string {
        return this.name;
    }

    getSpeed(): number {
        return this.speed
    };
}

export { GRXTransmission }; 
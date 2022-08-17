import { ITransmission } from "./ITransmission";

class UltegraTransmission implements ITransmission {
    speed = 0;
    private name = 'Ultegra';

    getName(): string {
        return this.name;
    }

    getSpeed(): number {
        return this.speed
    };

    // Пример логики в продукте
    
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
}

export { UltegraTransmission };
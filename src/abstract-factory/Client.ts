import { IBicycleFactory } from "./factory/bicycle-factory";

import { Frame } from "./product/frame";
import { Wheel } from "./product/wheel";

type TBicycle = {
    wheel: Wheel;
    frame: Frame;
}

/** Имитирует логику работы клиентского кода. */
export class Client {
    private factory: IBicycleFactory;

    constructor(factory: IBicycleFactory) {
        this.factory = factory;
    }

    public createBicycle(): TBicycle {
        const wheel = this.factory.createWheel();
        const frame = this.factory.createFrame();

        return { wheel, frame }
    }

    public paintBicycle(bicycle: TBicycle): void {
        bicycle.frame.paint();
    }
}
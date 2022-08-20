import { IBicycleFactory } from "./factory/bicycle-factory";
import { CannondaleFactory } from "./factory/cannondale-factory";
import { StelsFactory } from "./factory/stels-factory";

import { Frame } from "./product/frame";
import { Wheel } from "./product/wheel";

type TBicycle = {
    wheel: Wheel;
    frame: Frame;
}

const createBicycle = (factory: IBicycleFactory): TBicycle => {
    return { wheel: factory.createWheel(), frame: factory.createFrame() }
}

const paintBicycle = (bicycle: TBicycle) => {
    bicycle.frame.paint();
}

const cannondaleFactory = new CannondaleFactory();
const stelsFactory = new StelsFactory();

const cannondaleBike = createBicycle(cannondaleFactory);
const stelsBike = createBicycle(stelsFactory);

paintBicycle(cannondaleBike);
paintBicycle(stelsBike);
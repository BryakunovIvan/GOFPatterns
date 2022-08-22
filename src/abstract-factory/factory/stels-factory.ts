import { IBicycleFactory } from './bicycle-factory';

import { StelsFrame } from '../product/stels-frame';
import { StelsWheel } from '../product/stels-wheel';

import { Frame } from '../product/frame';
import { Wheel } from '../product/wheel';


class StelsFactory implements IBicycleFactory {
    createFrame(): Frame {
        return new StelsFrame();
    }

    createWheel(): Wheel {
        return new StelsWheel();
    }
}

export { StelsFactory };
import { IBicycleFactory } from './bicycle-factory';

import { CannondaleFrame } from '../product/cannondale-frame';
import { CannondaleWheel } from '../product/cannondale-wheel';

import { Wheel } from '../product/wheel';
import { Frame } from '../product/frame';

class CannondaleFactory implements IBicycleFactory {
    createFrame(): Frame {
        return new CannondaleFrame();
    }

    createWheel(): Wheel {
        return new CannondaleWheel();
    }
}

export { CannondaleFactory };
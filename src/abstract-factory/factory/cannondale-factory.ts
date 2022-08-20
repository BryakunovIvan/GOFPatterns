import { IBicycleFactory } from './bicycle-factory';

import { CannondaleFrame } from '../product/cannondale-frame';
import { CannondaleWheel } from '../product/cannondale-wheel';

class CannondaleFactory implements IBicycleFactory {
    createFrame(): CannondaleFrame {
        return new CannondaleFrame();
    }

    createWheel(): CannondaleWheel {
        return new CannondaleWheel();
    }
}

export { CannondaleFactory };
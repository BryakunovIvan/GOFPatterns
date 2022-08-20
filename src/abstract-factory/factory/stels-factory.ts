import { IBicycleFactory } from './bicycle-factory';

import { StelsFrame } from '../product/stels-frame';
import { StelsWheel } from '../product/stels-wheel';


class StelsFactory implements IBicycleFactory {
    createFrame(): StelsFrame {
        return new StelsFrame();
    }

    createWheel(): StelsWheel {
        return new StelsWheel();
    }
}

export { StelsFactory };
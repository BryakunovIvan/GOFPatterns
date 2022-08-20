import { Frame } from "../product/frame";
import { Wheel } from '../product/wheel';
 
interface IBicycleFactory {
    createWheel(): Wheel;
    createFrame(): Frame;
}

export { IBicycleFactory };
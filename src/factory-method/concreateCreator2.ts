import { UltegraTransmission } from "./concreateProduct2";
import { CreateTransmissions } from "./creator";
import { Transmission } from "./product";

class CreateUltegraTransmission extends CreateTransmissions {
    product: UltegraTransmission;

    constructor() {
        super();
        this.product = new UltegraTransmission();
    };

    public getTransmission(): Transmission {
        return this.product;
    }
}

export { CreateUltegraTransmission };
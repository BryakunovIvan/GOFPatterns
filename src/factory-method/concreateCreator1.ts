import { GRXTransmission } from "./concreateProduct1";
import { CreateTransmissions } from "./creator";
import { Transmission } from "./product";

class CreateGRXTransmission extends CreateTransmissions {
    product: GRXTransmission;

    constructor() {
        super();
        this.product = new GRXTransmission();
    };

    public getTransmission(): Transmission {
        return this.product;
    }
}

export { CreateGRXTransmission };
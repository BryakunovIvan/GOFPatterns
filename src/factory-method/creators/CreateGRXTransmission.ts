import { GRXTransmission } from "../products/GRXTransmission";
import { CreateTransmissions } from "./CreateTransmissions";

class CreateGRXTransmission extends CreateTransmissions {
    product!: GRXTransmission;

    public createTransmission(): GRXTransmission{
        this.product = new GRXTransmission();

        return this.product
    }
}

export { CreateGRXTransmission };
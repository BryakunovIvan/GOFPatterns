import { GRXTransmission } from "../products/GRXTransmission";
import { ITransmission } from "../products/ITransmission";
import { CreateTransmissions } from "./CreateTransmissions";

class CreateGRXTransmission extends CreateTransmissions {
    product!: GRXTransmission;

    public createTransmission(): ITransmission{
        this.product = new GRXTransmission();

        return this.product
    }
}

export { CreateGRXTransmission };
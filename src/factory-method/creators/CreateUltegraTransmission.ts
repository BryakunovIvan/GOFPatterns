import { ITransmission } from "../products/ITransmission";
import { UltegraTransmission } from "../products/UltegraTransmission";
import { CreateTransmissions } from "./CreateTransmissions";

class CreateUltegraTransmission extends CreateTransmissions {
    product!: UltegraTransmission;

    public createTransmission(): ITransmission{
        this.product = new UltegraTransmission();

        return this.product;
    }
}

export { CreateUltegraTransmission };
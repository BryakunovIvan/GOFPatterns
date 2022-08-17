import { UltegraTransmission } from "../products/UltegraTransmission";
import { CreateTransmissions } from "./CreateTransmissions";
import { ITransmission } from "../products/ITransmission";

class CreateUltegraTransmission extends CreateTransmissions {
    product!: UltegraTransmission;

    public getTransmission(): ITransmission {
        return this.product;
    }

    public createTransmission(): UltegraTransmission{
        this.product = new UltegraTransmission();

        return this.product;
    }

    public testTransmission(): void {
        console.log(this.product.getName())
        this.product.downBackSpeed();
        this.product.downFrontSpeed();

        this.product.upBackSpeed();
        this.product.upFrontSpeed();

        this.product.stop();
    }
}

export { CreateUltegraTransmission };
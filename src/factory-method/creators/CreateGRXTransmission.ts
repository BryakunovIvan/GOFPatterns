import { GRXTransmission } from "../products/GRXTransmission";
import { CreateTransmissions } from "./CreateTransmissions";
import { ITransmission } from "../products/ITransmission";

class CreateGRXTransmission extends CreateTransmissions {
    product!: GRXTransmission;

    public getTransmission(): ITransmission {
        return this.product;
    }

    public createTransmission(): GRXTransmission{
        this.product = new GRXTransmission();

        return this.product
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

export { CreateGRXTransmission };
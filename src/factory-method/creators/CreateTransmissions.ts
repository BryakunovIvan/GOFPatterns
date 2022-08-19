import { ITransmission } from "../products/ITransmission";

abstract class CreateTransmissions {
    product!: ITransmission;
    public abstract createTransmission(): ITransmission;

    public getTransmission(): ITransmission {
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

export { CreateTransmissions };
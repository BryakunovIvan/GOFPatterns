import { ITransmission } from "../products/ITransmission";

abstract class CreateTransmissions {
    public abstract getTransmission(): ITransmission;
    public abstract createTransmission(): ITransmission;
    public abstract testTransmission(): void;
}

export { CreateTransmissions };
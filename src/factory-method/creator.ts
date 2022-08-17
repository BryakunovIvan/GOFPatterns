import { Transmission } from "./product";

abstract class CreateTransmissions {
    abstract product: Transmission;
    public abstract getTransmission(): Transmission;
}

export { CreateTransmissions };
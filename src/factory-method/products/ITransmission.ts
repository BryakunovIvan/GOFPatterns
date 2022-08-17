interface ITransmission {
    speed: number;

    stop(): void;
    
    upFrontSpeed(): void;
    downFrontSpeed(): void;
    
    upBackSpeed(): void;
    downBackSpeed(): void;
    
    getName(): string;

    getSpeed(): number;
}

export { ITransmission };
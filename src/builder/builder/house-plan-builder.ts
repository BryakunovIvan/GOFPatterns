import { HousePlan } from "../products/house-plan";
import { IBuilder } from "./builder";

class HousePlanBuilder implements IBuilder {
    result: HousePlan;

    constructor() {
        // Не обязательно инициализировать поле result в конструкторе
        // Можно вынести данный функционал в отдельный метод билдера
        this.result = new HousePlan();
    }

    // Метод который сбрасывает поле результата
    // Позволяя создать новый продукт
    reset() {
        this.result = new HousePlan();
    }
    
    getResult(): HousePlan {
        return this.result
    }

    setDoor(countDoor: number): void {
        this.result.setDoor(countDoor);
    }

    setRoof(roof: string): void {
        this.result.setRoof(roof)
    }

    setWall(countWall: number): void {
        this.result.setWall(countWall);
    }

    setWindow(countWindow: number): void {
        this.result.setWindow(countWindow);
    }
}

export { HousePlanBuilder };
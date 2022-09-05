import { House } from "../products/house";
import { IBuilder } from "./builder";

class HouseBuilder implements IBuilder {
    result: House;

    constructor() {
        // Не обязательно инициализировать поле result в конструкторе
        // Можно вынести данный функционал в отдельный метод билдера
        this.result = new House();
    }

    // Метод который сбрасывает поле результата
    // Позволяя создать новый продукт
    reset() {
        this.result = new House();
    }

    getResult(): House {
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

export { HouseBuilder };
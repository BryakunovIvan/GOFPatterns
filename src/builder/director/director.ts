import { IBuilder } from "../builder/builder";

class Director {
    private builder: IBuilder;

    constructor(builder: IBuilder) {
        this.builder = builder;
    }

    setBuilder(builder: IBuilder) {
        this.builder = builder;
    }

    buildDefaultHouse() {
        this.builder.setDoor(1);
        this.builder.setWall(4);
        this.builder.setWindow(4);
        this.builder.setRoof('Flat');

        const result = this.builder.getResult();
        this.builder.reset();

        return result;
    }

    buildHouseWithManyWindow() {
        this.builder.setDoor(1);
        this.builder.setWall(4);
        this.builder.setWindow(10);
        this.builder.setRoof('Dome');

        const result = this.builder.getResult();
        this.builder.reset();

        return result;
    }
}

export { Director };
import { IBuilder } from "../builder/builder";
/**
 * Класс директор
 * Определяет порядок шагов билдеров для создания того или иного продукта.
 */
class Director {
    buildDefaultHouse(builder: IBuilder) {
        builder.reset();
        builder.setDoor(1);
        builder.setWall(4);
        builder.setWindow(4);
        builder.setRoof('Flat');

        return builder.getResult();
    }

    buildHouseWithManyWindow(builder: IBuilder) {
        builder.reset();
        builder.setDoor(1);
        builder.setWall(4);
        builder.setWindow(10);
        builder.setRoof('Dome');

        return builder.getResult();
    }
}

export { Director };
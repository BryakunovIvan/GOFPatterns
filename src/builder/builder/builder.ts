/** Интерфейс строителей
 * 
 * Отображает общие шаги построения объектов (продуктов)
 */
interface IBuilder {
    /** Функция возвращает готовый продукт */
    getResult();

    setDoor(number): void;
    setWall(number): void;
    setRoof(string): void;
    setWindow(number): void;

    reset();
}

export { IBuilder };
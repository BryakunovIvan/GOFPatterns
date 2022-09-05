/** Создаваемый объект
 * 
 * Продукты сделанные разными строителями не обязаны иметь общий интерфейс
 * В данном примере интерфейс общий
 */
class House {
    door: number = 1;
    roof: string = 'Flat';
    window: number = 0;
    wall: number = 4;

    setDoor(countDoor: number) {
        this.door = countDoor;
    }

    setRoof(roofType: string) {
        this.roof = roofType;
    }

    setWall(countWall: number) {
        this.wall = countWall;
    }

    setWindow(countWindow: number) {
        this.window = countWindow;
    }
}

export { House };
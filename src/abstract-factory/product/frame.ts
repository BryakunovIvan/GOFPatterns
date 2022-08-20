abstract class Frame {
    abstract name: string;

    getName() {
        return this.name;
    }

    paint() {
        console.log(this.name + ' Рама покрашена');
    }
}

export { Frame };
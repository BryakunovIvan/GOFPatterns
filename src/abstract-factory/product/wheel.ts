abstract class Wheel {
    abstract name: string;

    getName() {
        return this.name;
    }

    doSomething() {
        console.log(this.name + ' С рулем что то сделано');
    }
}

export { Wheel };
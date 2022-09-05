import { HouseBuilder } from "./builder/house-builder";
import { HousePlanBuilder } from "./builder/house-plan-builder";
import { Director } from "./director/director";

const houseBuilder = new HouseBuilder();
const housePlanBuilder = new HousePlanBuilder();

const director = new Director();

const defaultHouse = director.buildDefaultHouse(houseBuilder);
const defaultHousePlan = director.buildDefaultHouse(housePlanBuilder);

const houseWithManyWindow = director.buildHouseWithManyWindow(houseBuilder);
const housePlanWithManyWindow = director.buildHouseWithManyWindow(housePlanBuilder);



console.log(defaultHouse, defaultHousePlan)
console.log(houseWithManyWindow, housePlanWithManyWindow)

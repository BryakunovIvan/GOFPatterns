import { HouseBuilder } from "./builder/house-builder";
import { HousePlanBuilder } from "./builder/house-plan-builder";
import { Director } from "./director/director";

const houseBuilder = new HouseBuilder();
const housePlanBuilder = new HousePlanBuilder();

const director = new Director(houseBuilder);

const defaultHouse = director.buildDefaultHouse();
director.setBuilder(housePlanBuilder);
const defaultHousePlan = director.buildDefaultHouse();

director.setBuilder(houseBuilder);
const houseWithManyWindow = director.buildHouseWithManyWindow();
director.setBuilder(housePlanBuilder)
const housePlanWithManyWindow = director.buildHouseWithManyWindow();



console.log(defaultHouse, defaultHousePlan)
console.log(houseWithManyWindow, housePlanWithManyWindow)

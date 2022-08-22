import { Client } from "./Client";
import { CannondaleFactory } from "./factory/cannondale-factory";
import { StelsFactory } from "./factory/stels-factory";

const cannondaleFactory = new CannondaleFactory();
const stelsFactory = new StelsFactory();

const cannondaleClient = new Client(cannondaleFactory);
const stelsClient = new Client(stelsFactory);

const cannondaleBike = cannondaleClient.createBicycle();
const stelsBike = stelsClient.createBicycle();

cannondaleClient.paintBicycle(cannondaleBike);
stelsClient.paintBicycle(stelsBike);
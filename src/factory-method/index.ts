import { CreateGRXTransmission } from "./concreateCreator1";
import { CreateUltegraTransmission } from './concreateCreator2'
import { Transmission } from "./product";

const transmissions = [new CreateGRXTransmission(), new CreateUltegraTransmission(), new CreateGRXTransmission()];

function testTransmission(transmission: Transmission) {
    console.log(transmission.getName())
    transmission.downBackSpeed();
    transmission.downFrontSpeed();

    transmission.upBackSpeed();
    transmission.upFrontSpeed();

    transmission.stop();
}

transmissions.forEach((transmission) => testTransmission(transmission.getTransmission()))
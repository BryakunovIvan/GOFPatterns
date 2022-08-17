import { CreateGRXTransmission } from "./creators/CreateGRXTransmission";
import { CreateUltegraTransmission } from './creators/CreateUltegraTransmission'

const transmissions = [
    new CreateGRXTransmission(), 
    new CreateUltegraTransmission(), 
    new CreateGRXTransmission()
];

// Создаем трансмиссию
transmissions.forEach(transmission => transmission.createTransmission());

// Тестируем трансмиссию
transmissions.forEach((transmission) => transmission.testTransmission())
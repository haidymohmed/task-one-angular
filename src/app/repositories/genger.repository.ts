import { GenderModel } from "../models/gender.model";

export class GenderRepositoryImp {
    genders: GenderModel []= [
        new GenderModel('Male' , 1),
        new GenderModel('Female' , 2),
    ]

    getGenders(){
        return this.genders.slice();
    }
}
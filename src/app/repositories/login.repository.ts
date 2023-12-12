import { PatientModel } from "../models/patient.model";

export class LoginRepositoryImp {
    isValid : boolean = false ;
    private users  = [
        {username : "haidy", password: "123456"},
        {username : "test", password: "123456"},
        {username : "haidy", password: "123456"},
    ];

    login(username : string , password : string){
        for(let element of this.users){
            if(element.password == password && element.username == username){
                return true ;
            }
        }
        return false ;
    }
}
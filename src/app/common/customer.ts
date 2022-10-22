import { Time } from "@angular/common";

export class Customer 
{
    getTime: any;
    //configuration customer entity class here
    constructor(public id:number,public cname:string,public contact:number,public address:string,public orderedfood:string,public orderedfoodprise:number,public orderdate:Date,public placeorder:any,public reachedorder:any,public boyid:number)
    {

    }
}

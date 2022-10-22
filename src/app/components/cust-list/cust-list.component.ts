import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/common/customer';
import { CustomerServiceService } from 'src/app/customer-service.service';

@Component({
  selector: 'cust-emp-list',
  templateUrl: './cust-list.component.html',
  styleUrls: ['./cust-list.component.css']
})
export class CustListComponent implements OnInit {
customers:Customer[];
hasSearchName: any;
  hasDboyId : boolean;
  searchName: string;
  constructor(private custService:CustomerServiceService,public activateRoute :ActivatedRoute,private route:Router) 
  {

   }

  ngOnInit(): void 
  {
    this.activateRoute.paramMap.subscribe(()=>this.getAllCustomers())
   }
   getAllCustomers():void{
    

    this.hasSearchName = this.activateRoute.snapshot.paramMap.has("cname");


    if(this.hasSearchName){
        this.searchName  = this.activateRoute.snapshot.paramMap.get("cname");
        console.log(this.searchName)
        console.log("hai")
      this.custService.getAllCustomersSearchByCname(this.searchName).subscribe(data=>{
        console.log(data);
        this.customers= data;
        console.log("hai")
      });
    }

else {
   this.custService.getAllCustomers().subscribe(data => {
       console.log(data);
       this.customers=data;
     });
  }
}
   
  addCustomer():void{
    this.route.navigateByUrl("/custform")
  }
  updateCust(id:Number){
    this.route.navigateByUrl("/updatecust/" +id);
  }
  deleteCust(id : Number)
  {
    console.log(id);
    if(confirm("Do you want to delete ?")){
      this.custService.deleteCustomer(id).subscribe(data=>{
        console.log(data);
        this.getAllCustomers();
      })
    };
  }
  
}


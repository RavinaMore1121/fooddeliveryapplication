import { getLocaleDateTimeFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/common/customer';
import { CustomerServiceService } from 'src/app/customer-service.service';

@Component({
  selector: 'app-cust-form',
  templateUrl: './cust-form.component.html',
  styleUrls: ['./cust-form.component.css']
})
export class CustFormComponent implements OnInit
 {
customers:Customer=new Customer(0,"",0,"","",0,new Date(),getLocaleDateTimeFormat,getLocaleDateTimeFormat,0);
 isEditable: boolean;
  constructor(private CustService:CustomerServiceService,public router:Router,public activateRoute :ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(()=>
    this.getCustomerById());
    this.activateRoute.paramMap.subscribe(()=>this.customers);

  }

  onSubmit(){
    console.log(this.customers);
    if(this.isEditable){
      this.CustService.updateCustomer(this.customers).subscribe(data=>
        this.router.navigateByUrl("/customers"));
        
    }
    else{
    this.CustService.saveCustomer( this.customers).subscribe(data =>
      console.log(data));
      this.router.navigateByUrl("/customers");
  }
  }

getCustomerById()
{
  const custID  = parseFloat(this.activateRoute.snapshot.paramMap.get("id"));
    
  console.log(custID);
  if(custID> 0)
  {
    this.isEditable = true;
    this.CustService.getCustomerById(custID).subscribe(data=>{
      this.customers = data;
      console.log(this.customers)
    });
  }

  }
}



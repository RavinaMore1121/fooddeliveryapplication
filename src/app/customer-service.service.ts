import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,map } from 'rxjs';
import { Customer } from './common/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService 
{
  
  private custURL="http://localhost:8080/api/customer";
  constructor(private httpClient:HttpClient) 
  {
    
   }
   
   getAllCustomers():Observable<Customer[]>
   {
    return this.httpClient.get<getCustomerResponse>(this.custURL).pipe(map(response=>response._embedded.customers))
   }

   saveCustomer(customers:Customer):Observable<Customer>
   {
    const httpOptions=
    {
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'auto_token',
        'Access-control-Allow-Origin':'*'

      })
    };
    return this.httpClient.post<Customer>(this.custURL,customers,httpOptions);
   }
   getCustomerById(custId:number):Observable<Customer>
   {
    const custIDURl=this.custURL+"/"+custId;
   return this.httpClient.get<Customer>(custIDURl);
   }
   updateCustomer(customers:Customer):Observable<Customer>{
    const httpOptions = {
      headers : new HttpHeaders({
          'Content-Type' : 'application/json',
          'Authorization' : 'auth-token',
          'Access-Control-Allow-Origin' : '*'
      })
    };
    return  this.httpClient.put<Customer>(this.custURL+`/${customers.id}`,customers,httpOptions);
  }
  deleteCustomer(id: Number) {
    const httpOptions = {
      headers : new HttpHeaders({
          'Content-Type' : 'application/json',
          'Authorization' : 'auth-token',
          'Access-Control-Allow-Origin' : '*'
      })
    };
    return  this.httpClient.delete<Customer>(this.custURL+`/${id}`,httpOptions);
  }
  getAllCustomersSearchByCname(cname : string) : Observable<Customer[]> {
    const searchURL = "http://localhost:8080/api/customer/search/findByCnameIgnoreCase?cname" + cname;

    return this.httpClient.get<getSearchByCname>(searchURL).pipe(map(response => response._embedded.customers));
  }

 
}
interface getCustomerResponse
{
  _embedded:
  {
    customers:Customer[]
  }
}
interface getSearchByCname
{
  _embedded:
  {
    customers:Customer[]
  }
}



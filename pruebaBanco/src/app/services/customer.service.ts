import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }



  getCustomers():Observable<Customer []>{ ///return observable of type Customer []
      return this.http.get<Customer []>('http://localhost:3000/customers');
  }

  postCustomers(customer:Customer):Observable<Customer> {
    return this.http.post<Customer>('http://localhost:3000/customers',customer);
  }

  deleteCustomer(id:(string | undefined) ):Observable<any>{
    return this.http.delete(`http://localhost:3000/customers/${id}`);
  }

}

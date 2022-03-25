import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Customer } from '../models/customer';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  customers:Customer[] = [];
  customer: Customer = {
    nombre: '',
    descripcion: '',
    imagen: ''
  };

  customerForm:FormGroup = new FormGroup({});
  formBuilder:FormBuilder = new FormBuilder();


  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
      this.customerService.getCustomers().subscribe((customers:Customer [])=>{
          this.customers = customers;
      });
      

    this.customerForm = this.formBuilder.group({
      nombre: [''],
      descripcion: [''],
      imagen: ['']
      });

  }

  addCustomer(){
    console.log(this.customerForm.getRawValue());
    this.customer = this.customerForm.getRawValue();
    this.customerService.postCustomers(this.customer).subscribe((newCustomer:Customer) => this.customers.push(newCustomer));
  }
 

}

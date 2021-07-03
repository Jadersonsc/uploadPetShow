import { Product } from './../product.models';
import { Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {


  product: Product = {
    id: null as any,
    name: '',
    endereco: '',
    cep: null as any,
    price: null as any ,
    horario: ''

  }


  constructor(private ProductService: ProductService, private Router: Router) {

  }


  ngOnInit(): void {


  }

  createProduct(): void {

    this.ProductService.create(this.product).subscribe(() => {
      this.ProductService.showMessage('Produto Criado!')
      this.Router.navigate(['/'])
    })
  }
  cancel(): void {
    this.Router.navigate(['/'])
  }


}

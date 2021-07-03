import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Product } from './../product.models';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products!: Product[]
  product!: Product
  displayedColumns = ['id', 'name', 'price', 'endereco', 'cep', 'horario','action']

  constructor( private ProductService: ProductService, 
    
    private route: ActivatedRoute
    
    ) { }

  ngOnInit(): void {

    this.ProductService.read().subscribe(products => {
      this.products = products
  
    })

  }

  /*
  delete():void{
    
    const id = this.route.snapshot.paramMap.get('id') || ' '
    this.ProductService.delete(id).subscribe(product => {
      this.product = product
    });

    this.ProductService.delete(id).subscribe(()=>{
      this.ProductService.showMessage('Produto Deletado com Sucesso');
    });


  }
*/



}

import { ProductService } from './../product.service';
import { Product } from './../product.models';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product!: Product

  constructor(
    private ProductService: ProductService,
    private router: Router,
    private route: ActivatedRoute

  ) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id') as any;
    this.ProductService.readById(id).subscribe(product =>{
      this.product = product;
    })

    }

    deleteProduct(): void{
      
      this.ProductService.delete(this.product.id).subscribe(() => {
        this.ProductService.showMessage('Produto Excluido com sucesso')
        this.router.navigate(['/products'])
      })
      
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
}

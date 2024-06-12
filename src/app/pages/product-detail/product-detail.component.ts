import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { IProduct } from '../../models/product.model';
import { CurrencyPipe, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CurrencyPipe, TitleCasePipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnInit {
  private _route = inject(ActivatedRoute);
  private _apiService = inject(ApiService);

  loading: boolean = true;
  product?: IProduct;

  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      this._apiService.getProduct(params['id']).subscribe((product: IProduct) => {
        this.loading = false;
        this.product = product;
        console.log(product);
      });
    });
  }
}

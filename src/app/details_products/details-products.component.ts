import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsProductsService } from './details-products.service';

@Component({
  selector: 'app-details-products',
  templateUrl: './details-products.component.html',
  styleUrls: ['./details-products.component.scss']
})
export class DetailsProductsComponent {

  id:any;
  data: any;
  loading : boolean = false;
  constructor(
    private route:ActivatedRoute,
    private detailsService:DetailsProductsService
    ){
    this.id = this.route.snapshot.paramMap.get('id');
    }
  ngOnInit(): void {
    this.getDetailProduct();
  }

  getDetailProduct(){
    this.loading = true
    return this.detailsService.getDetailCategorieService(this.id).subscribe(res=>{
      this.data = res
      this.loading = false
    })
  }

}

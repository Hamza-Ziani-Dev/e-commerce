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

  constructor(
    private route:ActivatedRoute,
    private detailsService:DetailsProductsService
    ){
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('====================================');
    console.log(this.id);
    console.log('====================================');
    }
  ngOnInit(): void {
    this.getDetailProduct();
  }

  getDetailProduct(){
    return this.detailsService.getDetailCategorieService(this.id).subscribe(res=>{
      this.data = res
    })

  }

}

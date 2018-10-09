import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {BlockchainService} from '../blockchain/blockchain.service';
import {ContextService} from '../context.service';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-app-page',
  templateUrl: './app-page.component.html',
  styleUrls: ['./app-page.component.scss']
})
export class AppPageComponent implements OnInit {
  brandName: string;
  @ViewChild('createBrandTpl') createBrandTpl: TemplateRef<any>;
  @ViewChild('createProductTpl') createProductTpl: TemplateRef<any>;

  constructor(private blockchainSrv: BlockchainService, private contextSrv: ContextService, private dialog: MatDialog) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.blockchainSrv.getBrandIds().then(addresses => {
      for(let address of addresses){
        this.blockchainSrv.getBrand(address).then(brand => {
          if(this.contextSrv.userId === brand.appAccount){
            //todo display here since it belongs to this persons app;
          }
          //this.brandName = res.brandName;
        }).catch(err => console.log(err));
      }
    }).catch(err => console.log(err));
  }

  onCreateBrandClick() {
    const dialogRef = this.dialog.open(this.createBrandTpl).afterClosed().subscribe(res => {
      if(res) {
        debugger;
        var address = this.blockchainSrv.generateAddress();
        this.blockchainSrv.addBrand(address, res.brandName).then(() => {
        }).catch(err => console.log(err));
      }
    });
  }

  onAddProductClick() {
    this.dialog.open(this.createProductTpl).afterClosed().subscribe(res => {
      if(res) {
        this.blockchainSrv.addBrand(this.contextSrv.userId, res.brandName).then(() => {
        }).catch(err => console.log(err));
      }
    });
  }
}

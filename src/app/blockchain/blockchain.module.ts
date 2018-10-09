import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BlockchainService} from './blockchain.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[BlockchainService, ],
  declarations: []
})
export class BlockchainModule {

  constructor() {

  }

}

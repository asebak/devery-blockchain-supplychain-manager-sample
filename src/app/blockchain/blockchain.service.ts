import {Injectable} from '@angular/core';
import {DeveryRegistry, Utils} from '@devery/devery';
import {Product} from '../product';


@Injectable()
export class BlockchainService {
  private testnet = "0xf3838287aeae92300bd98a4d82ad5b841ff35f58";
  private mainnet = "0x0364a98148b7031451e79b93449b20090d79702a";
  deveryRegistryClient;

  constructor() {
    this.deveryRegistryClient = new DeveryRegistry({address: this.testnet});
  }

  getCurrentUser(){
    return this.deveryRegistryClient.getProvider().getAddress();
  }
  createApp(appName: string, accountId: string) {
    return this.deveryRegistryClient.addApp(appName, accountId, 5);
  }

  updateApp(appName: string, accountId: string) {
    return this.deveryRegistryClient.updateApp(appName, accountId, 5);
  }

  getApp(appId: string) {
    return this.deveryRegistryClient.getApp(appId);
  }

  getAppData(accountId: string){
    return this.deveryRegistryClient.getAppData(accountId);
  }

  addBrand(accountId: string, brandName: string) {
    return this.deveryRegistryClient.addBrand(accountId, brandName);
  }

  updateBrand(accountId: string, brandName: string) {
    return this.deveryRegistryClient.updateBrand(accountId, brandName, true);
  }

  getBrand(accountId: string) {
    return this.deveryRegistryClient.getBrand(accountId);
  }

  getBrandIds(){
    return this.deveryRegistryClient.appAccountsPaginated();
  }

  addProduct(product: Product) {
    return this.deveryRegistryClient.addProduct(product.productAccount, product.description, product.details, product.year, product.origin);
  }

  getProductIds(){
    return this.deveryRegistryClient.productAccountsPaginated();
  }

  getProduct(productId: string){
    return this.deveryRegistryClient.getProduct(productId);
  }

  updateProduct(product: Product) {
    return this.deveryRegistryClient.updateProduct(product.productAccount, product.description, product.details, product.year, product.origin, true);
  }
  generateAddress(){
    return Utils.getRandomAddress();
  }
}

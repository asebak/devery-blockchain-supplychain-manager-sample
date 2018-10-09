import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContextService {
  public userId: string;

  constructor() { }
}

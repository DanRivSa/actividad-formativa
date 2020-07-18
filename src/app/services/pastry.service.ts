import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PastryModel} from  '../models/pastrtymodel';

@Injectable({
  providedIn: 'root'
})
export class PastryService {

  private url = 'http://localhost:3000/pastries';
  private categoriesUrl = 'http://localhost:3000/categories';
  
  constructor(private httpClient:HttpClient) { }

  public getCategories()
  {
    return this.httpClient.get(`${this.categoriesUrl}`);
  }

  //opertaions
  public getPastries()
  {
    return this.httpClient.get(`${this.url}`);
  }

  public getSortedPastries(id:number) //get pastries by category
  {
    return this.httpClient.get(`${this.url}/categories/${id}`);
  }

  public postPastry(pastry:PastryModel)
  {
    return this.httpClient.post(`${this.url}`,pastry);
  }

}

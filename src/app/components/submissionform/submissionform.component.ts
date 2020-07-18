import { Component, OnInit } from '@angular/core';
import {PastryService} from '../../services/pastry.service';
import { NgForm, NgModel } from '@angular/forms';
import {PastryModel} from '../../models/pastrtymodel'

@Component({
  selector: 'app-submissionform',
  templateUrl: './submissionform.component.html',
  styleUrls: ['./submissionform.component.scss']
})
export class SubmissionformComponent implements OnInit {

  pastry:PastryModel;
  categories:any[];
  category_id:number;

  constructor(private pastryService:PastryService)
  {
    this.pastry = new PastryModel();
  }

  ngOnInit(): void 
  {
    this.getCategories();
  }

  //operations
  postPastry(form:NgForm)
  {
    if(form.value)
    {
      this.pastryService.postPastry(this.generatePastry(form)).subscribe(res=>
        {
          alert('pastry has been added');
        });
    }
  }

  generatePastry(form:NgForm)
  {
    let pastry = new PastryModel();
    pastry.p_name = form.value.name;
    pastry.p_price = form.value.price;
    pastry.p_desc= form.value.description;
    pastry.id_category = this.category_id;
    return pastry
  }

  getCategories()
  {
    this.pastryService.getCategories().subscribe(res=>
      {
        this.categories = res as any [];
        this.category_id=1;
      });
  }

  getCategoryId(event:any)
  {
    this.category_id = event.target.value;
  }
}

import { Component, OnInit} from '@angular/core';
import {PastryService} from '../../services/pastry.service';
import {ReportService} from '../../services/report.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit 
{
  categories: any[];
  public pastries:any[];
  categoryId:number;

  constructor(private pastryService:PastryService, private reportService:ReportService)
  {
    this.categoryId=1;
  }

  ngOnInit(): void 
  {
    this.pastryService.getCategories().subscribe(res=>
      {
        this.categories = res as any[];
      });
    this.pastryService.getSortedPastries(this.categoryId).subscribe(res=>
      {
        this.pastries = res as any[];
      });

  }

  getCategoryId(event:any)
  {
    this.categoryId = event.target.value;
    this.sortPastries(this.categoryId);
  }

  sortPastries(id:number)
  {
    this.pastries = [];
    this.pastryService.getSortedPastries(id).subscribe(res=>
      {
        this.pastries = res as any[];
      });
  }

  GeneratePastryReport(pastry:any)
  {
    this.reportService.generateReport(pastry.p_id);
  }
}

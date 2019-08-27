import { Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-factsheet',
  templateUrl: './factsheet.component.html',
  styleUrls: ['./factsheet.component.css'],
  
  
})
export class FactsheetComponent implements OnInit {
routers:any=[];
router:any;
  constructor(private http:HttpClient) { }

  ngOnInit() {
this.http.get("http://localhost:3000/getRouters").subscribe((data)=>
{
  this.routers=data;
})

  }

  handlerFunction($event)
  {
    this.http.get(`http://localhost:3000/getRouter/${$event.target.value}`).subscribe((data)=>
{
  this.router=data;
})
   console.log($event.target.value)
    
  }

}

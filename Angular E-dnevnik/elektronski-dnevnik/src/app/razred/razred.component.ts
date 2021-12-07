import { Component, OnInit } from '@angular/core';
import { Razred } from '../razred';
import { RazredService } from '../razred.service';

@Component({
  selector: 'app-razred',
  templateUrl: './razred.component.html',
  styleUrls: ['./razred.component.css']
})
export class RazredComponent implements OnInit {

  razredi!: Razred[];

  constructor(private razredService: RazredService) { }

  ngOnInit(): void {
    this.listRazred();
  }

  private listRazred(){
    this.razredService.getRazred().subscribe(data => {
      this.razredi = data;
    });
  }
  

}

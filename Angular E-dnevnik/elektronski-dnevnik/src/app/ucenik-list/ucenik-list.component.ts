import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ucenik } from '../ucenik';
import { UcenikService } from '../ucenik.service';
@Component({
  selector: 'app-ucenik-list',
  templateUrl: './ucenik-list.component.html',
  styleUrls: ['./ucenik-list.component.css']
})
export class UcenikListComponent implements OnInit {

  klikZakljuciti: boolean = false;
  ucenici!: Ucenik[];
  constructor(private ucenikService: UcenikService, private router: Router) { }

  ngOnInit(): void {
    this.getUcenici();
  }

  private getUcenici(){
    this.ucenikService.getUceniciList().subscribe(data => {
      this.ucenici = data;
    });
  }

  updateUcenik(id: number){
this.router.navigate(['update-ucenik', id]);
  }

  viewUcenik(id: number){
    this.router.navigate(['ucenik-grid', id]);
      }

 deleteUcenik(id: number){
   this.ucenikService.deleteUcenik(id).subscribe(data => {
    console.log(data); 
    this.getUcenici();
   })
 }

 zakljuciti(){
   this.klikZakljuciti = true;
 }


}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ucenik } from '../ucenik';
import { UcenikService } from '../ucenik.service';

@Component({
  selector: 'app-create-ucenik',
  templateUrl: './create-ucenik.component.html',
  styleUrls: ['./create-ucenik.component.css']
})
export class CreateUcenikComponent implements OnInit {

  ucenik: Ucenik = new Ucenik();

  constructor(private ucenikService: UcenikService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveUcenik(){
    this.ucenikService.createUcenik(this.ucenik).subscribe(data =>{
      console.log(data);
      },
    error => console.log(error));
    this.goToUceniciList();
  }

  goToUceniciList(){
    this.router.navigate(['/ucenici']);
    }

  onSubmit(){
    console.log(this.ucenik);
    this.saveUcenik();
  }

  

}

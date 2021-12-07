import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ucenik } from '../ucenik';
import { UcenikService } from '../ucenik.service';

@Component({
  selector: 'app-ucenik-grid',
  templateUrl: './ucenik-grid.component.html',
  styleUrls: ['./ucenik-grid.component.css']
})
export class UcenikGridComponent implements OnInit {

  id!: number;
  ucenik: Ucenik = new Ucenik();
  
    constructor(private ucenikService: UcenikService, private route: ActivatedRoute) { }
  
    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
   
  
    this.ucenikService.getUcenikById(this.id).subscribe(data => {
     this.ucenik = data;
    }, error => console.log(error));
   }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ucenik } from '../ucenik';
import { UcenikService } from '../ucenik.service';


@Component({
  selector: 'app-update-ucenik',
  templateUrl: './update-ucenik.component.html',
  styleUrls: ['./update-ucenik.component.css']
})
export class UpdateUcenikComponent implements OnInit {

  id!: number;
ucenik: Ucenik = new Ucenik();

  constructor(private ucenikService: UcenikService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
 

  this.ucenikService.getUcenikById(this.id).subscribe(data => {
   this.ucenik = data;
  }, error => console.log(error));
 }

onSubmit(){
this.ucenikService.updateUcenik(this.id, this.ucenik).subscribe(data => {
  this.goToUceniciList();
}
, error => console.log(error));

}

goToUceniciList(){
  this.router.navigate(['/ucenici']);
}

}

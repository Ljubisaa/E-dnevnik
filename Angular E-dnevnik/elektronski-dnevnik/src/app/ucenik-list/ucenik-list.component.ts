import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  currentRazredId!: number;
  searchMode!: boolean;


  constructor(private ucenikService: UcenikService, private router: Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(() => {
      this.getUcenici();
    })
  }

  private getUcenici() {


    this.searchMode = this._activatedRoute.snapshot.paramMap.has('keyword');

    if (this.searchMode) {
      this.handleSearchUcenici();
    }
    else {
      this.handleListUcenici();
    }

  }

  updateUcenik(id: number) {
    this.router.navigate(['update-ucenik', id]);
  }

  viewUcenik(id: number) {
    this.router.navigate(['ucenik-grid', id]);
  }

  deleteUcenik(id: number) {
    this.ucenikService.deleteUcenik(id).subscribe(data => {
      console.log(data);
      this.getUcenici();
    })
  }

  zakljuciti() {
    this.klikZakljuciti = true;
  }

  handleListUcenici() {

    const hasRazredId: boolean = this._activatedRoute.snapshot.paramMap.has('id');

    if (hasRazredId) {
      this.currentRazredId = +this._activatedRoute.snapshot.paramMap.get('id')!;
    }
    else {
      this.currentRazredId = 1;
    }

    this.ucenikService.getUceniciList(this.currentRazredId).subscribe(data => {
      this.ucenici = data;
    });

  }

  handleSearchUcenici() {

    const keyword: string = this._activatedRoute.snapshot.paramMap.get('keyword')!;

    this.ucenikService.searchUcenici(keyword).subscribe(
      data => {
        this.ucenici = data;
      }
    )

  }


}
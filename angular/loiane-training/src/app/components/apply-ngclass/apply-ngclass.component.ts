import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apply-ngclass',
  templateUrl: './apply-ngclass.component.html',
  styleUrls: ['./apply-ngclass.component.css']
})
export class ApplyNgclassComponent implements OnInit {

  myFavorite: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  onClick() {
    this.myFavorite = !this.myFavorite;
  }

}

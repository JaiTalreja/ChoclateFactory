import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  
  constructor(private _router : Router) { }

  Scart() {

    this._router.navigate(['/scart']);
  }
  QTY() : string {

    return localStorage.getItem("GrandQuantity");
  }
  ngOnInit(): void {
    
    //alert(this.qty);
  }

}

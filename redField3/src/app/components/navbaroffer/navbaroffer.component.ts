import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-navbaroffer',
  templateUrl: './navbaroffer.component.html',
  styleUrls: ['./navbaroffer.component.css']
})
export class NavbarofferComponent implements OnInit {

  constructor(private router:Router) { }
    
  ngOnInit(): void {
  }

}

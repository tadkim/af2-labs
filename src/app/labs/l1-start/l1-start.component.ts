import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'l1-start',
  templateUrl: './l1-start.component.html',
  styleUrls: ['./l1-start.component.css']
})
export class L1StartComponent implements OnInit {

  constructor() { }
  commentArr = [
    "원래", "시작이", "가장 어렵고", "-",
    "원래", "시작이", "가장 폼나지.", "-", "-",
    "정말", "이것들은", "어쩔쭐을", "모르다가", "-",
    "갑자기", "멋져보여.",
    "-", "-",
    "나는",
    "만들었다.", "벌써",
    "-",
    "긴",
    "-",
    "스크롤을."
  ];
  ngOnInit() {
  }

}

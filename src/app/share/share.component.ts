import { Component, Input, EventEmitter , Output ,  OnInit } from '@angular/core';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {
  @Input() public first ;
  @Output() public childSent = new EventEmitter<number>() ;
  votes: number;
constructor( ) {
  this.votes = 0 ;
}
 UpVote(agree: number): boolean {
   this.first.votes += 1;
   this.childSent.emit(agree);
   return false;
 }
 downVote(agree: number): boolean  {
  this.first.votes -= 1;
  this.childSent.emit(agree);
  return false;
}

  ngOnInit() {
  }


}

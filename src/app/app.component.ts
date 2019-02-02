import { Component } from '@angular/core';
import { Child } from './child';
import { setRootDomAdapter } from '@angular/platform-browser/src/dom/dom_adapter';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'QUOTES';
  children = [ new Child ( 'By:William ' , 'When you want to make your life feel better and your thoughts more positive…' ),
               new Child ('By:Rojer'  ,'When you want to take control of your life and make the most of everything around you…' ),
               new Child ('By:Ledgester' , 'When you want to experience more good things in your life but you’ve been focused on the problems…'  )
];

message (event: any) {
  this.children.sort(function(a,b)
  {
    return b.votes - a.votes
  } ) 
}

}

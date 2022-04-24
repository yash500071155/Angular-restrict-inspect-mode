import { Component ,OnInit,HostListener,Inject} from '@angular/core';
import { DOCUMENT} from '@angular/common';
import * as $ from 'jquery';
import * as moment from "moment"; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  isLoading:boolean=true;
  title = 'demo';
  constructor(
    @Inject(DOCUMENT) private document: Document
    ) {

  }
  ngOnInit(){
  //   this.document.onkeydown = (e:any) => {
  //     e = e || window.event;//Get event
      
  //     //F12
  //     if(e.keyCode == 123) {
  //       return false;
  //     }
  //     if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
  //         return false;
  //     }
  //     if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
  //         return false;
  //     }
  //     if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
  //         return false;
  //     }
  //     if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
  //       return false;
  //    }
  //   }
  }
  

    // checkIfLoaded(){
      
    //     window.addEventListener("load", function (event) {
    //       console.log("All resources finished loading!");
    //       //here i should do something, either returning false or...
    //       //...manipulating the isLoading, but i can't access isLoading from here
    //       // console.log($('#elemId').width());
    //     });
  // }
  // @HostListener('document:keyup', ['$event'])
  // onKeyUp (event: KeyboardEvent) {
  //   if ( event.keyCode == 8  || event.key === 'ctrl') {
  //     event.preventDefault()
  //   }
  // }
  
  // @HostListener('document:click', ['$event'])
  //   documentClick(event: MouseEvent) {
  //       console.log('clicked')
  //   }
 
  //   key:any;
  // @HostListener('document:keypress', ['$event'])
  // handleKeyboardEvent(event: KeyboardEvent) { 
  //   console.log(event)
  //   this.key = event;
  //   // this.key = event.key;

  //   console.log(this.key.keyCode)
  
  // }


key:any;
  @HostListener('window:keydown', ['$event'])
  handleKeyDown(e: KeyboardEvent) {
    console.log(e,'events')
    this.key=e;
    if(this.key.keyCode == 123) {
      return false;
    }
    if(e.ctrlKey && e.shiftKey && this.key.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if(e.ctrlKey && e.shiftKey && this.key.keyCode  == 'J'.charCodeAt(0)) {
        return false;
    }
    if(e.ctrlKey && e.shiftKey && this.key.keyCode  == 'C'.charCodeAt(0)) {
        return false;
    }
    if(e.ctrlKey && this.key.keyCode  == 'U'.charCodeAt(0)) {
      return false;
   }
   return true;
  }
  @HostListener("contextmenu", ["$event"])
  onRightClick(event:any) {
    console.log(event);
    return false
     //your code here
  }

    @HostListener('window:load',['$event'])
onPageLoad(event: Event) {
   console.log('loaded',event);
  
   if ((window.outerHeight - window.innerHeight) >= 100) {

    alert('close the console')
    
  return false;

  } 
   if ((window.outerWidth - window.innerWidth) >= 250) {

    alert('close the console')
    
  return false;

  } 
  
   
    //is open

  return true;
}


// function isInspectOpen() {
//   console.profile();
//   console.profileEnd();
//   if (console.clear) {
//     console.clear();
//   }
//   return console.profiles.length > 0;
// }
// function showIfInspectIsOpen() {
//   alert(isInspectOpen());
// }
// array=['f12','ctrl','shift','I','C','J','U'];

 



  // function disabledInspect(){
  //   document.addEventListener('contextmenu', function(e) {
  //   e.preventDefault();
  // });
  //   document.onkeydown = function (e) {
  //         if (e.keyCode == 123) {
  //           return false;
  //         }
  //         if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
  //           return false;
  //         }
  //         if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
  //           return false;
  //         }
  //         if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
  //           return false;
  //         }
  //         if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
  //           return false;
  //         }
  //       }
  //   }
  // disabledInspect()


}

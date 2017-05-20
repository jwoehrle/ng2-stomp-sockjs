import {Component, OnDestroy, OnInit} from '@angular/core';
import {MessageService} from "./message.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app works!';
  messages: Array<string> = [];

  messageSub: Subscription;

  constructor(private messageService: MessageService) {
  }



  ngOnInit(): void {
    this.messageSub = this.messageService.messageReceived$.subscribe( message => this.messages.push(message));
  }

  ngOnDestroy(): void {
    if ( this.messageSub ) {
      this.messageSub.unsubscribe();
    }
  }
}

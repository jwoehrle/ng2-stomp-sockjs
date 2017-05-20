import {Component, OnInit} from '@angular/core';

//import * as sockjs from 'sockjs-client';
import * as stompjs from 'stompjs';
import * as SockJS from "sockjs-client";
import {Client, Frame, Message} from "stompjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works!';

  stompClient: Client;

  messages: Array<string> = [];

  ngOnInit(): void {

    const socket = new SockJS('http://localhost:8080/gs-guide-websocket') as WebSocket;
    this.stompClient = stompjs.over(socket);
    this.stompClient.connect('', '', (frame: Frame) => {
      console.log('CONNECT CONNECT');
      this.stompClient.subscribe('/topic/greetings', (message : Message ) => {
        console.log('Received greeting:', message.body);
        let json = JSON.parse(message.body);
        this.messages.push(json['content']);
        console.log(this.messages);
      });
    });

  }
}

import { Component, OnInit } from '@angular/core';
import {message} from "../interfaces/message";
import {LES_MESSAGES} from "./messages.mock";

@Component({
  selector: 'app-messages-candidat',
  templateUrl: './messages-candidat.component.html',
  styleUrls: ['./messages-candidat.component.css']
})
export class MessagesCandidatComponent implements OnInit {

  private messages : message[];

  constructor() {
    this.messages = [];
  }

  ngOnInit() {
    this.messages = LES_MESSAGES;
  }

  get lesmessages(): message[]{
    return this.messages;
  }

}

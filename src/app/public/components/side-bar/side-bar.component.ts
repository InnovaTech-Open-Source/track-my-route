import { Component } from '@angular/core';
import {MatDrawer, MatDrawerContainer} from "@angular/material/sidenav";
import {MatToolbar} from "@angular/material/toolbar";
import {MatListItem, MatNavList} from "@angular/material/list";
import {MatDrawerContent} from "@angular/material/sidenav";
import {MatButton} from "@angular/material/button";
import {NgIf} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {PayTicketComponent} from "../../pages/pay-ticket/pay-ticket.component";
import {HelpComponent} from "../../pages/help/help.component";
import {SearchRoutesComponent} from "../../pages/search-routes/search-routes.component";

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [
    MatDrawerContent,
    MatDrawerContainer,
    MatToolbar,
    MatNavList,
    MatListItem,
    MatDrawer,
    MatButton,
    NgIf,
    MatIcon,
    PayTicketComponent,
    HelpComponent,
    SearchRoutesComponent
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  selectedContent = 'content1';
  buttonColor1 = 'primary';
  buttonColor2 = ' ';
  buttonColor3 = ' ';
  buttonColor4 = ' ';
  buttonColor5 = ' ';
  buttonColor6 = ' ';
  buttonColor7 = ' ';

  selectContent(content: string) {
    this.selectedContent = content;
    switch (content) {
      case 'content1':
        this.buttonColor1 = 'primary';
        this.buttonColor2 = ' ';
        this.buttonColor3 = ' ';
        this.buttonColor4 = ' ';
        this.buttonColor5 = ' ';
        this.buttonColor6 = ' ';
        this.buttonColor7 = ' ';
        break;
      case 'content2':
        this.buttonColor1 = ' ';
        this.buttonColor2 = 'primary';
        this.buttonColor3 = ' ';
        this.buttonColor4 = ' ';
        this.buttonColor5 = ' ';
        this.buttonColor6 = ' ';
        this.buttonColor7 = ' ';
        break;
      case 'content3':
        this.buttonColor1 = ' ';
        this.buttonColor2 = ' ';
        this.buttonColor3 = 'primary';
        this.buttonColor4 = ' ';
        this.buttonColor5 = ' ';
        this.buttonColor6 = ' ';
        this.buttonColor7 = ' ';
        break;
      case 'content4':
        this.buttonColor1 = ' ';
        this.buttonColor2 = ' ';
        this.buttonColor3 = ' ';
        this.buttonColor4 = 'primary';
        this.buttonColor5 = ' ';
        this.buttonColor6 = ' ';
        this.buttonColor7 = ' ';
        break;
      case 'content5':
        this.buttonColor1 = ' ';
        this.buttonColor2 = ' ';
        this.buttonColor3 = ' ';
        this.buttonColor4 = ' ';
        this.buttonColor5 = 'primary';
        this.buttonColor6 = ' ';
        this.buttonColor7 = ' ';
        break;
      case 'content6':
        this.buttonColor1 = ' ';
        this.buttonColor2 = ' ';
        this.buttonColor3 = ' ';
        this.buttonColor4 = ' ';
        this.buttonColor5 = ' ';
        this.buttonColor6 = 'primary';
        this.buttonColor7 = ' ';
        break;
      case 'content7':
        this.buttonColor1 = ' ';
        this.buttonColor2 = ' ';
        this.buttonColor3 = ' ';
        this.buttonColor4 = ' ';
        this.buttonColor5 = ' ';
        this.buttonColor6 = ' ';
        this.buttonColor7 = 'primary';
        break;
      default:
        break;
    }
  }
}

import { Component } from '@angular/core';
import {
  MatCard,
  MatCardContent,
  MatCardHeader, MatCardLgImage, MatCardMdImage,
  MatCardSubtitle,
  MatCardTitle,
  MatCardTitleGroup
} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitleGroup,
    MatCardContent,
    MatCardSubtitle,
    MatCardTitle,
    MatCardMdImage,
    MatCardLgImage,
    MatButtonModule
  ],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent {
  notification = "Hubo un cambio de ruta debido a obras y el paradero de 2 de Mayo no estará en funcionamiento, tome sus precauciones"
  notification2 = "Se ha detectado un atascamiento en la Av. Los girasoles"
  notification3="Hemos hecho nuevos cambios y hemos añadido nuevas funcionalidades para que usted pueda usar con mayor facilidad nuestro servicio!"
}

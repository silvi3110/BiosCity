import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  userName = 'Silvana';

  reportes = [
    {
      titulo: 'Jaguar andino',
      fecha: '2025-05-16',
      estado: 'Crítico',
    },
    {
      titulo: 'Colibrí violeta',
      fecha: '2025-05-14',
      estado: 'Estable',
    },
    {
      titulo: 'Oso jukumari',
      fecha: '2025-05-10',
      estado: 'Peligro',
    },
  ];

  getColor(estado: string): string {
    switch (estado.toLowerCase()) {
      case 'crítico':
        return 'danger';
      case 'peligro':
        return 'warning';
      case 'estable':
        return 'success';
      default:
        return 'medium';
    }
  }
}
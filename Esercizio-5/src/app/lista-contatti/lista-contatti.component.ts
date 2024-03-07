import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'lista-contatti',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-contatti.component.html',
  styleUrl: './lista-contatti.component.css'
})
export class ListaContattiComponent {

  contatti =[
    { nome: 'Mario', cognome: 'Rossi', eta: 30, numeroTelefono: '123456789', isOnline: true, colorePreferito: 'purple', immagine:"https://media-assets.wired.it/photos/615dad252707bc568326ad4e/3:2/w_594,h_396,c_limit/cicciogamer.jpg" },
    { nome: 'Luigi', cognome: 'Bianchi', eta: 25, numeroTelefono: '987654321', isOnline: false, colorePreferito: 'yellow' }
    // Aggiungi altri contatti se necessario
  ];

}

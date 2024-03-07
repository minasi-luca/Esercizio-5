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
    { nome: 'Ciccio', cognome: 'Gamer', eta: 32, numeroTelefono: '864203951', isOnline: true, colorePreferito: 'purple', immagine:"https://media-assets.wired.it/photos/615dad252707bc568326ad4e/3:2/w_594,h_396,c_limit/cicciogamer.jpg" },
    { nome: 'Mike', cognome: 'Showsha', eta: 37, numeroTelefono: '854219763', isOnline: true, colorePreferito: 'yellow', immagine: "https://www.webboh.it/wp-content/uploads/2021/07/MikeShowSha.jpg"},
    { nome: 'Danny', cognome: 'Lazzarin', eta: 32, numeroTelefono: '637481592', isOnline: false, colorePreferito: 'purple', immagine: "https://www.ildigitale.it/wp-content/uploads/2023/02/danny-lazzarin-1200x900.jpeg"},
    { nome: 'Riccardo', cognome: 'Dose', eta: 28, numeroTelefono: '901376248', isOnline: true, colorePreferito: 'pink', immagine: "https://tuberfan.com/sito/wp-content/uploads/2019/11/Riccardo-Dose-contro-1024x852.jpg"},
    { nome: 'Daniel', cognome: 'Daddetta', eta: 34, numeroTelefono: '524897613', isOnline: true, colorePreferito: 'white', immagine: "https://www.influenceritalia.it/in/imgs/ig/3086/profile.jpg"},
    { nome: 'Simone', cognome: 'Paciello', eta: 29, numeroTelefono: '765134982', isOnline: true, colorePreferito: 'blue', immagine: "https://biografieonline.it/img/bio/s/Simone_Paciello.jpg"},
    { nome: 'Amedeo', cognome: 'Preziosi', eta: 30, numeroTelefono: '309825476', isOnline: false, colorePreferito: 'black', immagine: "https://www.ilsussidiario.net/wp-content/uploads/ampimg/2018/07/05/thumb_w1200_amedeo_preziosi_instagram_2018.jpg"},
    { nome: 'Gianmarco', cognome: 'Tocco', eta: 29, numeroTelefono: '482156790', isOnline: false, colorePreferito: 'white', immagine: "https://staticfanpage.akamaized.net/wp-content/uploads/sites/34/2023/08/blurr-1200x675.jpg"},
    { nome: 'Cristiano', cognome: 'Spadaccini', eta: 28, numeroTelefono: '617240835', isOnline: true, colorePreferito: 'grey', immagine: "https://yt3.googleusercontent.com/vKKCYP5LPRdta7SNv42ysnFowUnJteB6eqOOAyIshOIqCehl7tQl2vSBPeyV8S8jdeWZ1_pFSw=s900-c-k-c0x00ffffff-no-rj"},
    { nome: 'Brazo', cognome: 'Crew', eta: 34, numeroTelefono: '935682147', isOnline: false, colorePreferito: 'orange', immagine: "https://www.webboh.it/wp-content/uploads/2020/08/Brazo-Crew-758x479.jpg"}

    
  ];

}

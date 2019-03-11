import { Component } from '@angular/core';
import { addListener } from 'cluster';
import { noUndefined } from '@angular/compiler/src/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour-des-heros';
  heroes = [
    'Superman',
    'Batman',
    'Wonderwoman',
    'Thor',
    

     
  ];
  name = '';
  heroToAdd = '';

  addHero() {
    // Si heroToAdd === ' coucou ';
    // alors heroToAdd.trim() = 'coucou'
    // donc si HeroToAdd = '
    // alors heroToAdd.trim() = ''
    if(this.heroToAdd.length > 0) {
      this. heroes.push(this.heroToAdd.trim());
      this.heroToAdd = '';
    } else {
      alert('Le nom du héros ne doit pas étre vide')
    }

   
  }
}


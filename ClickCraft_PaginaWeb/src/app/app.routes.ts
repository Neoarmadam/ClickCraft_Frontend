import { Routes } from '@angular/router';
import { AcercadeComponent } from './acercade/acercade.component';
import { SnakeGameComponent } from './snake-game/snake-game.component';

export const routes: Routes = [
    {
        path: 'acercade',
        component: AcercadeComponent,
    },
    {
        path: 'SnakeGame',
        component: SnakeGameComponent,
    }
];

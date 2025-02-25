import { Routes } from '@angular/router';
import { AcercadeComponent } from './acercade/acercade.component';
import { SnakeGameComponent } from './snake-game/snake-game.component';
import { CrearcuentaComponent } from './crearcuenta/crearcuenta.component';
import { InicioComponent } from './inicio/inicio.component';

export const routes: Routes = [
    {
        path: 'acercade',
        component: AcercadeComponent,
    },
    {
        path: 'SnakeGame',
        component: SnakeGameComponent,
    },
    {
        path: 'crearcuenta',
        component: CrearcuentaComponent,
    },
    {
        path: 'inicio',
        component: InicioComponent,
    }
];

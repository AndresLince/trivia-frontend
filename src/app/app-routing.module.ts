import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'trivia/category-question',
    pathMatch: 'full',
  },
  {
    path: 'user',
    loadChildren: () => import('./user/feature/user-shell/user-shell.module').then(m => m.UserShellModule)
  },
  {
    path: 'trivia',
    canActivate: [ AuthGuard ],
    loadChildren: () => import('./trivia/feature/trivia-shell/trivia-shell.module').then(m => m.TriviaShellModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

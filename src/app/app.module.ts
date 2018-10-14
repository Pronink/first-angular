import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {MenuSuperiorComponent} from './menu-superior/menu-superior.component';
import {ListaUsuariosComponent} from './lista-usuarios/component/lista-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuSuperiorComponent,
    ListaUsuariosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

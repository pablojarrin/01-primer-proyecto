import { NgModule } from "@angular/core";
import { ListadoComponent } from './listado/listado.component';
import { HeroeComponent } from './heroe/heroe.component';
import { CommonModule } from "@angular/common";

@NgModule({
declarations: [
    HeroeComponent,
    ListadoComponent
],
exports: [
    HeroeComponent,
    ListadoComponent
],
imports: [
    CommonModule
],
providers: [],
})

export class HeroesModule{

}
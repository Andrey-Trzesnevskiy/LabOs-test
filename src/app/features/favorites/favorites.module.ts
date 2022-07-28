import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesRoutingModule } from './favorites.routing.module';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { FavoritesOrdersTableComponent } from './components/favorites-orders-table/favorites-orders-table.component';
import { FavoritesPatientsTableComponent } from './components/favorites-patients-table/favorites-patients-table.component';
import { SharedModule } from 'app/shared/shared.module';
import { ArrayFilterPipe } from './pipes/array-filter.pipe';

@NgModule({
  declarations: [FavoritesComponent,
    FavoritesOrdersTableComponent,
    ArrayFilterPipe,
    FavoritesPatientsTableComponent],
  imports: [
    CommonModule,
    SharedModule,
    FavoritesRoutingModule
  ]
})
export class FavoritesModule { }

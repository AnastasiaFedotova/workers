import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { WorkersContainerComponent } from './components/workers-container/workers-container.component';
import { WorkerComponent } from './components/worker/worker.component';
import { AppReducer } from './store/redurcers/app.reducers';
import { WorkersListEffect } from './store/effects/workersList.effects';
import { AddedWorkerEffect } from './store/effects/addedWorker.effects';

@NgModule({
  declarations: [
    AppComponent,
    WorkersContainerComponent,
    WorkerComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(AppReducer),
    HttpClientModule,
    StoreModule.forRoot(AppReducer),
    EffectsModule.forRoot([WorkersListEffect, AddedWorkerEffect])
  ],
  providers: [Store],
  bootstrap: [AppComponent]
})
export class AppModule { }

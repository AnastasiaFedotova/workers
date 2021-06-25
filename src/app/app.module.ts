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
import { RemovedWorkerEffect } from './store/effects/removedWorker.effects';
import { TimerComponent } from './components/timer/timer.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkersContainerComponent,
    WorkerComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(AppReducer),
    HttpClientModule,
    StoreModule.forRoot(AppReducer),
    EffectsModule.forRoot([WorkersListEffect, AddedWorkerEffect, RemovedWorkerEffect])
  ],
  providers: [Store],
  bootstrap: [AppComponent]
})
export class AppModule { }

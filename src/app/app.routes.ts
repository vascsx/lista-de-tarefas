import { Component } from '@angular/core';
import { Routes } from '@angular/router';

//Pages
import { ListComponent } from './modules/lista-de-tarefas/pages/list/list.component';

export const routes: Routes = [
    {
        path: '',
        component: ListComponent,
    }
    
];

import { Routes } from '@angular/router'
import { ListViewComponent } from './list-view/list-view.component';
import { WordEntryComponent } from './word-entry/word-entry.component';
import { WordViewComponent } from './word-view/word-view.component';

export const appRoutes: Routes = [
    {path: '', redirectTo: '/wordentry', pathMatch: 'full'},
    {path: "listview", component: ListViewComponent},
    {path: "wordentry", component: WordEntryComponent},
    {path: "wordview", component: WordViewComponent}    
]
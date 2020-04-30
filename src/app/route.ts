import { EventsListResolver } from './events/shared/events-list-resolver.service';
import { EventRouteActivator } from './events/events-details/event-route-activator.service';
import { Error404Component } from './errors/404.component';
import { CreateEventComponent } from './events/create-event.component';
import { EventDetailsComponent } from './events/events-details/event-details.component';
import { EventsListComponent } from './events/events-list.component';
import { Routes } from '@angular/Router';

export const appRoutes: Routes = [
  {
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate: [EventRouteActivator],
  },
  {
    path: 'events',
    component: EventsListComponent,
    resolve: { events: EventsListResolver }
  },
  {
    path: 'events/:id',
    component: EventDetailsComponent,
    canActivate: [EventRouteActivator],
  },
  {path: '404',
component: Error404Component
},
  {
    path: '', redirectTo: '/events', pathMatch: 'full'
  }
];

import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { binToNbQueryParameters } from 'src/utils/query-params';
import { Subscription, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RouterService {
  private routerSubscriptions: Subscription[];

  constructor(private activatedRoute: ActivatedRoute) {
    this.routerSubscriptions = [];
  }

  listen(): Observable<boolean> {
    const { key, value } = binToNbQueryParameters;

    return new Observable((observer) => {
      this.routerSubscriptions.push(
        this.activatedRoute.queryParams.subscribe((params) => {
          const isNumToBin = params[key] === value;
          observer.next(isNumToBin);
        })
      );
    });
  }

  destroy(): void {
    this.routerSubscriptions.forEach((sub) => sub.unsubscribe());
  }
}

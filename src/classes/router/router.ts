import { inject } from '@angular/core';
import { RouterService } from 'src/services/router/router.service';

export class Router {
  isBinToNum!: boolean;
  private routerService: RouterService;

  constructor() {
    this.routerService = inject(RouterService);
    this.listenForRouter();
  }

  listenForRouter(): void {
    this.routerService
      .listen()
      .subscribe((isBinToNum) => (this.isBinToNum = isBinToNum));
  }

  routerDestroy(): void {
    this.routerService.destroy();
  }
}

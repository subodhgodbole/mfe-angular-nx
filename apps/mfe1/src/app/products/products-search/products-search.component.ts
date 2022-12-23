import {Component, ViewChild, ViewContainerRef, Inject, Injector, ComponentFactoryResolver, OnInit} from '@angular/core';
import { AuthService } from '@demo/auth-lib';

@Component({
  selector: 'app-products-search',
  templateUrl: './products-search.component.html',
})
export class ProductsSearchComponent {

  @ViewChild('vc', { read: ViewContainerRef, static: true }) viewContainer: ViewContainerRef;

  constructor(
    private authService: AuthService,
    @Inject(Injector) private injector,
    @Inject(ComponentFactoryResolver) private cfr) { }


userName = this.authService.userName;

  search(): void {
    alert ('TODO: search!');
  }
}

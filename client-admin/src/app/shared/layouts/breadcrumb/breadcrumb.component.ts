import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {MenuItem} from "primeng/api";
import {distinctUntilChanged, filter} from "rxjs";
import {TranslocoService} from "@ngneat/transloco";

@Component({
  selector: 'breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  static readonly ROUTE_DATA_BREADCRUMB = 'breadcrumb';
  readonly home = {icon: 'pi pi-home', routerLink: '/'};
  menuItems: MenuItem[];

  constructor(
    private translocoService: TranslocoService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        distinctUntilChanged()
      )
      .subscribe(() => {
        this.translocoService.langChanges$.subscribe(lang => {
          this.menuItems = this.createBreadcrumbs(this.activatedRoute.root)!
          this.menuItems = this.menuItems.map(item => {
            return {
              routerLink: item.routerLink,
              label: this.translocoService.translate(item.label!)
            }
          })
        });
      });
  }

  private createBreadcrumbs(route: ActivatedRoute, routerLink: string = '', breadcrumbs: MenuItem[] = []): MenuItem[] | undefined {
    const children: ActivatedRoute[] = route.children;

    if (!children.length) {
      return breadcrumbs;
    }

    for (const child of children) {
      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
      if (routeURL != 'authorization') {
        const label = child.snapshot.data[BreadcrumbComponent.ROUTE_DATA_BREADCRUMB];
        if (routeURL !== '') {
          routerLink += `/${routeURL}`;
        }
        const isExistPath = breadcrumbs.filter(breadcrumb => breadcrumb.label == label).length > 0;

        if (label && !isExistPath) {
          breadcrumbs.push({label: label, routerLink});
        }

        return this.createBreadcrumbs(child, routerLink, breadcrumbs);
      }
    }
  }
}

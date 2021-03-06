import {AfterViewInit, Component, Inject, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {BreakpointObserver} from "@angular/cdk/layout";
import {delay, Subscription, take} from "rxjs";
import {MenuItem, PrimeNGConfig} from "primeng/api";
import {ISelectModal} from '../../models/select.model';
import {TranslocoService} from "@ngneat/transloco";
import {Router} from '@angular/router';
import {AuthService} from "../../services/auth/auth.service";
import {LOCAL_STORAGE, StorageService} from "ngx-webstorage-service";


@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  private _isLogin: boolean

  langs: ISelectModal[];
  selectedLang: string;

  sideNavNavigations: MenuItem[];
  private subscription: Subscription = Subscription.EMPTY;

  constructor(
    private config: PrimeNGConfig,
    private router: Router,
    private authService: AuthService,
    private translocoService: TranslocoService,
    private observer: BreakpointObserver,
    @Inject(LOCAL_STORAGE) private storage: StorageService) {
  }

  ngOnInit(): void {
    this.onChangeLang(this.activeLang);
    this.setSelectedLang();
    this.setSideNavNavigations();
  }

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).pipe(delay(1)).subscribe(res => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }

  get isLogin(): boolean {
    return this._isLogin;
  }

  @Input()
  set isLogin(value: boolean) {
    this._isLogin = value;
  }

  get activeLang() {
    return this.translocoService.getActiveLang();
  }

  onChangeLang(lang: string) {
    this.subscription.unsubscribe();
    this.subscription = this.translocoService.load(lang)
      .pipe(take(1))
      .subscribe(() => {
        this.selectedLang = lang;
        this.translocoService.setActiveLang(lang);
        this.config.setTranslation(this.translocoService.translateObject('primeng'));
        this.setSelectedLang();
        this.setSideNavNavigations();
      });
  }

  logout() {
    this.authService.logout();
  }

  redirectToStudentFullInfo() {
    if (this.storage.get('user')) {
      this.router.navigate(['students', this.storage.get('user'), 'full-info']);
    }
  }

  setSelectedLang() {
    this.langs = [{
      name: this.translocoService.translate('en_EN'),
      code: 'en'
    }, {
      name: this.translocoService.translate('ru_RU'),
      code: 'ru'
    }];
  }

  setSideNavNavigations() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

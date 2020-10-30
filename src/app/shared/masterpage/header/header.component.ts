import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, of } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() onMenuToggle = new EventEmitter();

  navs: {
    icon: string;
    link: string;
    name: string;
    external?: boolean;
  }[];

  logoUrl = environment.logoUrl;
  appName = environment.appName;
  searchExpanded = false;

  headerOpen$: Observable<boolean> = of(true);

  constructor(
    private translate: TranslateService,
    private breakpointObserver: BreakpointObserver,
  ) { }

  ngOnInit() {

    this.navs = [
      {
        icon: 'gavel',
        link: '/producers',
        name: this.translate.instant('Producers')
      },
      {
        icon: 'link',
        link: '/blocks',
        name: this.translate.instant('Blocks')
      },
      {
        icon: 'list_alt',
        link: '/transactions',
        name: this.translate.instant('Transactions')
      },
    ];

    console.log(this.headerOpen$)
  }

}

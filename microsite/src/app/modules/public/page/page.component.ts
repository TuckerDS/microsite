import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
// import { CmsService } from '@services';
import { CmsService } from 'app/services/cms/cms.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  private page: string;
  private content: any;
  private components: any[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cmsService: CmsService
  ) {
    route.url.subscribe((res: Array<any>) => {
      this.page = res[0].path;
    });
  }

  ngOnInit() {
    const options = {page: <string>''};
    options.page = this.page;

    this.cmsService.getPage(options).subscribe((res: Array<any>) => {
      this.content = res;
      this.components = this.content.components ? this.content.components : [];
    });
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DevJournalNgApp';
  showFiller = false;
  events: string[] = [];
  opened: boolean;

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

  toggle() {
    if (this.showFiller) {
      this.showFiller = false;
    } else {
      this.showFiller = true;
    }
  }
}

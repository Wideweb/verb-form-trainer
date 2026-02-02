import { Component, ChangeDetectionStrategy, signal, computed, OnInit } from '@angular/core';
import { Verb, VERBS } from './verb.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // Fix: `standalone: true` is default in Angular v20+ and should be removed.
  // Fix: Remove `CommonModule` import to favor new built-in control flow over directives like *ngIf.
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  currentVerb = signal<Verb | null>(null);
  userChoice = signal<'ing' | 'to' | null>(null);
  showResult = signal(false);

  isCorrect = computed(() => {
    if (!this.currentVerb() || !this.userChoice()) {
      return false;
    }
    return this.currentVerb()?.correctForm === this.userChoice();
  });

  ngOnInit() {
    this.nextVerb();
  }

  private getRandomVerb(): Verb {
    const randomIndex = Math.floor(Math.random() * VERBS.length);
    return VERBS[randomIndex];
  }

  selectAnswer(form: 'ing' | 'to'): void {
    if (this.showResult()) return;
    this.userChoice.set(form);
    this.showResult.set(true);
  }

  nextVerb(): void {
    let newVerb: Verb;
    do {
      newVerb = this.getRandomVerb();
    } while (newVerb === this.currentVerb());

    this.currentVerb.set(newVerb);
    this.userChoice.set(null);
    this.showResult.set(false);
  }
}

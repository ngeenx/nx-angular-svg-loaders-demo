import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

import {
  NxAudioLoaderComponent,
  NxBallTriangleLoaderComponent,
  NxBarsLoaderComponent,
  NxCirclesLoaderComponent,
  NxGridLoaderComponent,
  NxHeartsLoaderComponent,
  NxOvalLoaderComponent,
  NxPuffLoaderComponent,
  NxRingsLoaderComponent,
  NxSpinningCirclesLoaderComponent,
  NxTailSpinLoaderComponent,
  NxThreeDotsLoaderComponent,
} from '@ngeenx/nx-angular-svg-loaders';

const sizes: number[] = [10, 15, 20, 25, 30, 35, 40, 50];

const loaderTypes: string[] = [
  'Audio',
  'Ball Triangle',
  'Bars',
  'Circles',
  'Grid',
  'Hearts',
  'Oval',
  'Puff',
  'Rings',
  'Spinning Circles',
  'Tail Spin',
  'Three Dots',
];

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <main>
      <header>Angular SVG Loaders</header>

      @for (loaderType of loaderTypes; track $index) {
      <section>
        <h1>{{ loaderType }} Loaders</h1>

        <div>
          @for (size of sizes; track $index) {
          <ng-container [ngSwitch]="loaderType">
            <nx-angular-svg-audio-loader
              *ngSwitchCase="'Audio'"
              [isLoading]="true"
              [size]="size"
            />
            <nx-angular-svg-ball-triangle-loader
              *ngSwitchCase="'Ball Triangle'"
              [isLoading]="true"
              [size]="size"
            />
            <nx-angular-svg-bars-loader
              *ngSwitchCase="'Bars'"
              [isLoading]="true"
              [size]="size"
            />
            <nx-angular-svg-circles-loader
              *ngSwitchCase="'Circles'"
              [isLoading]="true"
              [size]="size"
            />
            <nx-angular-svg-grid-loader
              *ngSwitchCase="'Grid'"
              [isLoading]="true"
              [size]="size"
            />
            <nx-angular-svg-hearts-loader
              *ngSwitchCase="'Hearts'"
              [isLoading]="true"
              [size]="size"
            />
            <nx-angular-svg-oval-loader
              *ngSwitchCase="'Oval'"
              [isLoading]="true"
              [size]="size"
            />
            <nx-angular-svg-puff-loader
              *ngSwitchCase="'Puff'"
              [isLoading]="true"
              [size]="size"
            />
            <nx-angular-svg-rings-loader
              *ngSwitchCase="'Rings'"
              [isLoading]="true"
              [size]="size"
            />
            <nx-angular-svg-spinning-circles-loader
              *ngSwitchCase="'Spinning Circles'"
              [isLoading]="true"
              [size]="size"
            />
            <nx-angular-svg-tail-spin-loader
              *ngSwitchCase="'Tail Spin'"
              [isLoading]="true"
              [size]="size"
            />
            <nx-angular-svg-three-dots-loader
              *ngSwitchCase="'Three Dots'"
              [isLoading]="true"
              [size]="size"
            />
          </ng-container>
          }
        </div>
      </section>
      }
    </main>
  `,
  styleUrls: ['./global_styles.scss'],
  imports: [
    CommonModule,

    // SVG loader components
    NxOvalLoaderComponent,
    NxAudioLoaderComponent,
    NxBallTriangleLoaderComponent,
    NxBarsLoaderComponent,
    NxCirclesLoaderComponent,
    NxGridLoaderComponent,
    NxBarsLoaderComponent,
    NxHeartsLoaderComponent,
    NxPuffLoaderComponent,
    NxRingsLoaderComponent,
    NxSpinningCirclesLoaderComponent,
    NxTailSpinLoaderComponent,
    NxThreeDotsLoaderComponent,
  ],
})
export class App {
  public sizes: number[] = sizes;
  public loaderTypes: string[] = loaderTypes;
}

bootstrapApplication(App);

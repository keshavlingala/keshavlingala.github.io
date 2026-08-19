# Dynamic Timeline for Angular: angular2-timeline

> Build visually compelling timelines effortlessly with angular2-timeline—a CSS-based Angular library designed to display dynamic data in a sleek, customizable timeline view. Tailor the design and colors of each timeline item to suit your application's style, ensuring that your content stands out. Perfect for creating responsive timelines that look great on any device, this library offers simple installation and intuitive usage to streamline your development process. Elevate your Angular projects with a timeline component that’s both powerful and easy to implement.

- **Author:** Keshav Lingala (Senior Software Engineer) — https://keshav.codes
- **Published:** August 2020
- **Project page:** https://keshav.codes/angular2-timeline/ (screenshots and diagrams are on that page)
- **Tech:** Angular, CSS, HTML, Typescript
- **Live demo:** https://www.npmjs.com/package/angular2-timeline
- **Source:** https://github.com/keshavlingala/angular2-timeline
- **Topics:** Angular Library, Angular Reusable library, angular2, timeline, npm module, NPM Registry, Keshav Lingala, Keshav Reddy, Keshav Reddy Lingala, Lingala Keshav Reddy, Keshav

---

*Figure: Screenshot of the timeline UI*

## Overview

A lightweight, CSS-based Angular library, published to npm, for rendering dynamic data as a clean, responsive timeline. Each item's colors are individually customizable so the component blends into any design.

> This library is no longer maintained.

## Installation

Install from npm:

```bash
> npm i angular2-timeline
```

Add the timeline module to your app:

```typescript
import {TimelineModule} from "angular2-timeline";

@NgModule({
    ...
  imports: [
    TimelineModule,
    ...
  ],
```

## Exposed Components

- `TimelineComponent`
- `TimelineItemComponent`

## How to use

```html
<timeline>
  <timeline-item>
 <!-- your content here -->
  </timeline-item>
</timeline>
```

A complete example with statically and dynamically added items:

```typescript
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="more.push(0)">Add More</button>
    <timeline>
      <timeline-item>
        <div style="background-color: azure;padding: 10px;box-shadow: 3px 3px 15px 3px #6565656b;">
          <h1>Title</h1>
          <h4>Subtitle</h4>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's
            standard dummy text ever since the 1500s.</p>
        </div>
      </timeline-item>
      <timeline-item>
        <div style="background-color: azure;padding: 10px;box-shadow: 3px 3px 15px 3px #6565656b;">
          <h1>Title</h1>
          <h4>Subtitle</h4>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's
            standard dummy text ever since the 1500s.</p>
        </div>
      </timeline-item>
      <timeline-item *ngFor="let i of more">
        <div style="background-color: azure;padding: 10px;box-shadow: 3px 3px 15px 3px #6565656b;">
          <h1>Title</h1>
          <h4>Subtitle</h4>
        </div>
      </timeline-item>
    </timeline>
  `,
})
export class AppComponent {
  more = [];
}
```

Set a dot color per item with a HEX code:

```html
<timeline>
    <timeline-item color="#42b5b6">
        <!--Your Content Goes Here-->
    </timeline-item>
</timeline>
```

# Features

- Mobile responsive
- Customizable dot color for each timeline item

***

---

From the project archive of Keshav Lingala — https://keshav.codes. Machine-readable index: https://keshav.codes/llms.txt

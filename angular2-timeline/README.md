#angular2-timeline

##Installation
Install using npm  
```bash
> npm i angular2-timeline
```

Add Timeline Module
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

- TimelineComponent
- TimelineItemCompoenent

##How to use
```html
<timeline>
  <timeline-item>
 <!-- your content here -->
  </timeline-item>
</timeline>
```
Create a simple timeline
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
#Features
- Mobile Responsive
- Customizable colors for each timeline item

## Author

**Keshav Lingala**
 
+ [github/keshavlingala](https://github.com/keshavlingala)
+ [twitter/keshavlingala](http://twitter.com/keshavlingala) 

***




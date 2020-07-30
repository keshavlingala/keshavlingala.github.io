import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatDividerModule, MatExpansionModule, MatFormFieldModule,
  MatIconModule, MatInputModule, MatListModule,
  MatMenuModule,
  MatProgressBarModule, MatProgressSpinnerModule, MatSidenavModule,
  MatSnackBarModule, MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatIconModule,
    MatMenuModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatButtonModule,
    MatToolbarModule,
    MatTooltipModule,
    MatListModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatSidenavModule,
  ]
})
export class MaterialModule {
}

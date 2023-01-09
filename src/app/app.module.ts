import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DispatcherPlanningComponent } from './Components/dispatcher-planning/dispatcher-planning.component';
import { ConvertingComponent } from './Components/converting/converting.component';
import { CasterComponent } from './Components/caster/caster.component';
import { MessageBoxComponent } from './Components/message-box/message-box.component';
import { SampleBoxComponent } from './Components/sample-box/sample-box.component';
import { ProcessBoxComponent } from './Components/process-box/process-box.component';
import { AbnormalityBoxComponent } from './Components/abnormality-box/abnormality-box.component';
import { FormFieldComponent } from './Components/form-field/form-field.component';
import { Section1Component } from './Components/section1/section1.component';
import { Section2Component } from './Components/section2/section2.component';
import { Section3Component } from './Components/section3/section3.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { NavTabsComponent } from './nav-tabs/nav-tabs.component';
import { Section4Component } from './section4/section4.component';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    DispatcherPlanningComponent,
    ConvertingComponent,
    CasterComponent,
    MessageBoxComponent,
    SampleBoxComponent,
    ProcessBoxComponent,
    AbnormalityBoxComponent,
    FormFieldComponent,
    Section1Component,
    Section2Component,
    Section3Component,

    NavTabsComponent,
     Section4Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

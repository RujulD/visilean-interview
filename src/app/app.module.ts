import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {IvyCarouselModule} from 'angular-responsive-carousel';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExpandableItemComponent } from './components/header/expandable-item/expandable-item.component';
import { ReadMoreComponent } from './components/common/read-more/read-more.component';
import { BannerComponentComponent } from './components/banner-component/banner-component.component';
import { SectionTitleComponent } from './components/common/section-title/section-title.component';
import { FeaturesComponent } from './components/features/features.component';
import { CardComponentComponent } from './components/features/card-component/card-component.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientCardComponent } from './components/clients/client-card/client-card.component';
import { ArrowComponent } from './components/common/svg/arrow/arrow.component';
import { TestimonialCardComponent } from './components/testimonial/testimonial-card/testimonial-card.component';
import { DownArrowComponent } from './components/header/down-arrow/down-arrow.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ExpandableItemComponent,
    ReadMoreComponent,
    BannerComponentComponent,
    SectionTitleComponent,
    FeaturesComponent,
    CardComponentComponent,
    TestimonialComponent,
    ClientsComponent,
    ClientCardComponent,
    ArrowComponent,
    TestimonialCardComponent,
    DownArrowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

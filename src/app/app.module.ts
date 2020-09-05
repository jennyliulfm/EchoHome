import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef, APP_INITIALIZER } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClient, HttpBackend, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { routes } from './app.routes';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { NgxFileDropModule } from 'ngx-file-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { NavigationComponent } from './components/common/navigation/navigation.component';
import { TopnavigationComponent } from './components/common/topnavigation/topnavigation.component';
import { BasicLayoutComponent } from './components/layouts/basic-layout/basic-layout.component';
import { LogoutComponent } from './components/user/logout/logout.component';

import { HomeComponent } from './components/home/home.component';
// import { ProductComponent } from './components/admin/product/product.component';
// import { CategoryComponent } from './components/admin/category/category.component';
import { EmailConfirmComponent } from './components/user/email-confirm/email-confirm.component';
import { TokenInterceptor } from '../app/auth/token.interceptor'
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AddressService } from './services/address.service';
import { OrderService } from './services/order.service';
import { OrderdetailComponent } from './components/orderdetail/orderdetail.component';
import { UserLayoutComponent } from './components/user/user-layout/user-layout.component';
import { UserNavigationComponent } from './components/user/user-navigation/user-navigation.component';
// import { UserProfileComponent} from './components/user/user-profile/user-profile.component';
// import { AddressManagementComponent } from './components/user/address-management/address-management.component';
// import { OrderHistoryComponent } from './components/user/order-history/order-history.component';
import { TopnavComponent } from './components/common/topnav/topnav.component';
import { TopbannerComponent } from './components/common/topbanner/topbanner.component';
import { FeaturedComponent } from './components/common/featured/featured.component';
import { MiddlebannerComponent } from './components/common/middlebanner/middlebanner.component';
import { LatestProductsComponent } from './components/common/latest-products/latest-products.component';
import { TopcategoryComponent } from './components/common/topcategory/topcategory.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MiddletopbannerComponent } from './components/common/middletopbanner/middletopbanner.component';
import { FlashsaleComponent } from './components/common/flashsale/flashsale.component';
import { MiddleEventComponent } from './components/common/middle-event/middle-event.component';
import { PopularProductComponent } from './components/common/popular-product/popular-product.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavigationComponent,
    TopnavigationComponent,
    BasicLayoutComponent,
    LogoutComponent,
    HomeComponent,
    // ProductComponent,
    // CategoryComponent,
    EmailConfirmComponent,
    CheckoutComponent,
    OrderdetailComponent,
    UserLayoutComponent,
    UserNavigationComponent,
    // UserProfileComponent,
    // AddressManagementComponent,
    // OrderHistoryComponent,
    TopnavComponent,
    TopbannerComponent,
    FeaturedComponent,
    MiddlebannerComponent,
    LatestProductsComponent,
  
    TopcategoryComponent,
    MiddletopbannerComponent,
    FlashsaleComponent,
    MiddleEventComponent,
    PopularProductComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(routes),
    FontAwesomeModule,
    NgxFileDropModule,
    ModalModule.forRoot(),
    SocialLoginModule,
    CarouselModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    AddressService,
    OrderService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '624796833023-clhjgupm0pu6vgga7k5i5bsfp6qp6egh.apps.googleusercontent.com'
            ),
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('298510618024928'),
          },
        ],
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }

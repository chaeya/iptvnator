import 'reflect-metadata';
import '../polyfills';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';

// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NgxUploaderModule } from 'ngx-uploader';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecentPlaylistsComponent } from './home/recent-playlists/recent-playlists.component';
import { ChannelListContainerComponent } from './channel-list-container/channel-list-container.component';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { VjsPlayerComponent } from './vjs-player/vjs-player.component';
import { UrlUploadComponent } from './home/url-upload/url-upload.component';
import { FileUploadComponent } from './home/file-upload/file-upload.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    declarations: [
        AppComponent,
        ChannelListContainerComponent,
        FileUploadComponent,
        HomeComponent,
        RecentPlaylistsComponent,
        VideoPlayerComponent,
        VjsPlayerComponent,
        UrlUploadComponent,
    ],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        BrowserModule,
        HttpClientModule,
        SharedModule,
        AppRoutingModule,
        FilterPipeModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient],
            },
        }),
        NgxUploaderModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {
  AdMobFree, AdMobFreeBannerConfig,
  AdMobFreeInterstitialConfig
} from '@ionic-native/admob-free';

// Setup the config options for the banner/full screen interstitial
// The config id is setup and retrieved from the admob site https://apps.admob.com
const bannerConfig: AdMobFreeBannerConfig = {
  id: 'ca-app-pub-xxx/xxx', 
  isTesting: true,
  autoShow: true
};

const interstitialConfig: AdMobFreeInterstitialConfig = {
  id: 'ca-app-pub-xxx/xxx',
  isTesting: true,
  autoShow: true
};

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController,
    private admob: AdMobFree) {
    // Apply config to the ad setup
    this.admob.banner.config(bannerConfig);
    this.admob.interstitial.config(interstitialConfig);
    this.admob.banner.prepare() // OR this.admob.interstitial.prepare()
      .then(() => {
        // At this stage the ad is ready to show
        // depending on the bannerConfig settings
        // either the ad will autoShow (if true)
        // otherwise we need to call this.admob.banner.show()
        this.admob.banner.show() // this.admob.interstitial.show()
          .then(() => {
            console.log('Ad showing');
            // Apply some logic here defining how long the ad
            // displays for and then hide it
            this.admob.banner.hide() // this.admob.interstitial.hide()
              .then(() => {
                console.log('ad hidden');
              })
              .catch(e => console.error(e));
          })
          .catch((e) => console.error(e))
      })
      .catch((e) => console.error(e));
  }
}

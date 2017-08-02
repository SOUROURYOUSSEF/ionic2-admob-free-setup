## Ionic 2 Admob-Free Integration

Create your Ionic 2 App

Ensure you have added the admob-free plugin and package

$ ionic cordova plugin add cordova-plugin-admob-free --save
$ npm install --save @ionic-native/admob-free

Add the plugin to the app module

import { AdmobFree } from '@ionic-native/admob-free';
...
providers: [
    ...
    AdmobFree
    ...
]
...
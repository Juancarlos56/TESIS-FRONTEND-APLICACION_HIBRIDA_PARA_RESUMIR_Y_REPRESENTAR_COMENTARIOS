// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    projectId: 'aplicacion-resumen-comentarios',
    appId: '1:973370360772:web:f972e443a570ff352f9a91',
    storageBucket: 'aplicacion-resumen-comentarios.appspot.com',
    locationId: 'europe-west',
    apiKey: 'AIzaSyB5Kv8v_DpH6GeMEeHcmExz4o0P-8OFjoU',
    authDomain: 'aplicacion-resumen-comentarios.firebaseapp.com',
    messagingSenderId: '973370360772',
  },
  //WS_PATH : 'http://172.16.221.49:8080/api/'

  WS_PATH : 'http://192.168.100.184:8080/api/'

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

# noreml
NOde-REd on MobiLe - everything's normal then...


This is a simple proof of concept to get node-red running on mobile devices, with clustering available through node-red-contrib-dnr.


It makes use of JxCore running atop cordova, with a simple app to report on the status of the express web server that runs node-red.


The principal idea behind this is the ability to visually program in a completely cross-platform fashion - 
Node-red has the ability to create dashboards in a drag-n-drop fashion, with the functionality mediated by supporting flows.
No UI platform has been defined in this project, there appear to be 3 available - Dashboard (based on Angular), Polymer, and Vue.


Node-red can already run cross-platform on non-mobile devices thanks to Electron, with the framework here we can run on IOS and Android devices as well.
Only Android is tested here at present.


Links:
[Node-Red](https://nodered.org/)<br/>
[JXCore](https://github.com/jxcore/jxcore)<br/>
[Binary JXCore runtimes](https://github.com/jxcore/jxcore-release)<br/>
[Cordova](https://cordova.apache.org/)<br/>
[JXCore Cordova plugin](https://github.com/jxcore/jxcore-cordova)<br/>
[DNR Editor for clustered computing](https://github.com/namgk/dnr-editor)<br/>
[Node-Red Polymer UI](https://www.npmjs.com/package/node-red-contrib-polymer)<br/>
[Node-Red Electron](https://github.com/natcl/electron-node-red)<br/>


Build Instructions:

1.Install [Node JS](https://nodejs.org/en/)<br/>
2.Install [Android Studio](https://developer.android.com/studio/index.html)<br/>
3.Install Cordova - from the commandline: npm install -g cordova<br/>
4.Clone this repo to a local folder.<br/>
5.Navigate to the directory <yourlocalfolder>\www\jxcore\<br/>
6.From the commandline in this directory: npm install<br/>
(this installs all the npm dependencies for Node-Red, it is equivalent to the root folder for a NodeJS project)<br/>
7.From the commandline in the directory <yourlocalfolder>: cordova run android<br/>
8.When the Android emulator starts, you can see when Node-Red has started, you can then navigate in a web browser to http://localhost:1880/red<br/>


The index.html in <yourlocalfolder>\www\ is the entry point into the Cordova application. It can be built as per any normal Cordova app.

In this case, the idea is that we can design a dashboard (or more complicated blocks) in Node-Red, have the Cordova app run the Node-Red server, 
and open a webview which directs to http:localhost:1880/red/ui (the dashboard address).

ie. It appears to the user that they click on the app, and it runs as per any other app that they use.




Build notes - these are very rough and outline the changes I had to make to get this to run correctly.
JXCore is based on NodeJS 0.1.0, and as such has no ES6 functionality. We can use polyfils or ES5 versions where possible:


https://github.com/jxcore/jxcore/issues/650

https://www.npmjs.com/package/jxc#

npm install -g android-sdk https://www.npmjs.com/package/android-sdk/tutorial

https://www.npmjs.com/package/update-android

npm install -g cordova

cordova create jtest com.alexis.jtest Jtest

install jxcore for windows (V8 engine for 64bit) https://github.com/jxcore/jxcore-release

npm install -g jxc

in cordova folder: cordova platform add android

in cordova folder: jxc install 0.1.0 --sample express_sample

jx io.jxcore.node.jx

cordova plugins add io.jxcore.node/

then: cordova run

node_modules not found => D:\Apps\jtest\www\jxcore\install_modules.md:

jx install --autoremove ".*,*.md,*.MD"

https://github.com/jxcore/jxcore/issues/874 - this is a jxcore version issue

from the package.json: D:\Apps\jtest\www\jxcore => npm install express --save

https://www.sitepoint.com/how-to-run-node-js-with-express-on-mobile-devices/

C:\Windows\System32\telnet.exe localhost 5584

C:\Users\User\.emulator_console_auth_token => auth dCAc+BaWXu3r+r21

redir add tcp:8080:3000




npm install node-red-contrib-dnr --save

D:\Apps\jtest\www\jxcore\app.js => paste from D:\Apps\jtest\www\jxcore\node_modules\node-red\red.js then line 116:

// We put the settings file next to this file

settingsFile = "settings.js";

D:\Apps\jtest\www\jxcore\node_modules\node-red\red\red.js - function checkVersion(userSettings)

mqtt.min.js => use mqtt.js

jsonata => use es5 version

	Execution failed for task ':mergeDebugAssets'.

	> [www/jxcore/node_modules/tar-pack/test/fixtures/packed.tar] 

	=> remove D:\Apps\jtest\www\jxcore\node_modules\tar-pack\test\fixtures\packed.tar as it's considered a dupe vs packed.tar.gz

require('es5-shim'); D:\Apps\jtest\www\jxcore\node_modules\node-red\red.js

require('es6-shim'); D:\Apps\jtest\www\jxcore\node_modules\node-red\red.js
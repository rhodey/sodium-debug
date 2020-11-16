# sodium-debug
Small example project to reproduce sodium-universal browser bundling issue.

```
$ npm install && npm install -g browserify
$ browserify index.js -o bundle.js
> Error: Can't walk dependency graph: Cannot find module './crypto_auth' from '/home/rhodey/dev/dsp/js/sodium-debug/node_modules/sodium-universal/index.js'
    required by /home/rhodey/dev/dsp/js/sodium-debug/node_modules/sodium-universal/index.js
        at /home/rhodey/.nvm/versions/node/v14.13.1/lib/node_modules/browserify/node_modules/resolve/lib/async.js:137:35
	    at load (/home/rhodey/.nvm/versions/node/v14.13.1/lib/node_modules/browserify/node_modules/resolve/lib/async.js:156:43)
	        at onex (/home/rhodey/.nvm/versions/node/v14.13.1/lib/node_modules/browserify/node_modules/resolve/lib/async.js:181:17)
		    at /home/rhodey/.nvm/versions/node/v14.13.1/lib/node_modules/browserify/node_modules/resolve/lib/async.js:15:69
		        at FSReqCallback.oncomplete (fs.js:181:21)
```

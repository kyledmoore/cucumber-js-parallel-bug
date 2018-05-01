# cucumber-js-parallel-bug
Sample project to illustrate error running cucumber w/ parallel flag set in Windows environment


## Run tests synchronously (and successfully)

`npm test`

## Run tests in parallel (fails)

`npm run-script test-parallel`

Presently fails with (Windows 7, Node 8.11.1):

```
C:\dev\cucumber-js-parallel-bug>npm run-script test-parallel

> cucumber-js-parallel-bug@1.0.0 test-parallel C:\dev\cucumber-js-parallel-bug
> cucumber-js --parallel 4

Error: write EPIPE
    at _errnoException (util.js:1022:11)
    at Socket._writeGeneric (net.js:780:25)
    at Socket._write (net.js:799:8)
    at doWrite (_stream_writable.js:397:12)
    at writeOrBuffer (_stream_writable.js:383:5)
    at Socket.Writable.write (_stream_writable.js:290:11)
    at Socket.write (net.js:717:40)
    at Master.startSlave (C:\dev\cucumber-js-parallel-bug\node_modules\cucumber\lib\runtime\parallel\master.js:108:27)
    at C:\dev\cucumber-js-parallel-bug\node_modules\cucumber\lib\runtime\parallel\master.js:142:23
    at baseTimes (C:\dev\cucumber-js-parallel-bug\node_modules\lodash\lodash.js:976:23)
    at Function.times (C:\dev\cucumber-js-parallel-bug\node_modules\lodash\lodash.js:16116:20)
    at Master.run (C:\dev\cucumber-js-parallel-bug\node_modules\cucumber\lib\runtime\parallel\master.js:141:24)
    at C:\dev\cucumber-js-parallel-bug\node_modules\cucumber\lib\cli\index.js:207:35
    at Promise._execute (C:\dev\cucumber-js-parallel-bug\node_modules\bluebird\js\release\debuggability.js:303:9)
    at Promise._resolveFromExecutor (C:\dev\cucumber-js-parallel-bug\node_modules\bluebird\js\release\promise.js:483:18)
    at new Promise (C:\dev\cucumber-js-parallel-bug\node_modules\bluebird\js\release\promise.js:79:10)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! cucumber-js-parallel-bug@1.0.0 test-parallel: `cucumber-js --parallel 4`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the cucumber-js-parallel-bug@1.0.0 test-parallel script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
```

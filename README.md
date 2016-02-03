# Event Dispatcher

[![Build Status](https://travis-ci.org/vaalentin/event-dispatcher.svg?branch=master)](https://travis-ci.org/vaalentin/event-dispatcher)

Simple event dispatcher.

## Installation

```sh
$ npm install --save @vaalentin/event-dispatcher
```

## Usage

```js
import EventDispatcher from '@vaalentin/event-dispatcher';

class App extends EventDispatcher {
  start() {
    this.dispatchEvent('start', performance.now());
  }
}

const app = new App();

app.addEventListener('start', time => {
  console.log(`app started at: ${time}`);
});

app.start();
```

## API

#### `dispatcher = new EventDispatcher()`

Can be used directly, or extended.

#### `dispatcher.addEventListener(type, cb)`

Add listener `cb` to `type`. `dispatcher.on(type, cb)` is an alias.

#### `dispatcher.removeEventListener(type, cb)`

Remove listener `cb` from 'type'. `dispatcher.off(type, cb)` is an alias.

#### `dispatcher.dispatchEvent(type, ...data)`

Call all listeners of `type` and pass `data`. `dispatcher.trigger(type, ...data)` is an alias.

#### `dispatcher.dispose()`

Delete instance.

## License

MIT, see [LICENSE.md](https://github.com/vaalentin/event-dispatcher/blob/master/LICENSE.md) for more details.

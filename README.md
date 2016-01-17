# @vaalentin/event-dispatcher

Simple event dispatcher.

## Installation

```
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

`type` is a `string` representing the event name, `cb` is `function` that will
be called with the data passed when using `dispatchEvent`.

#### `dispatcher.removeEventListener(type, cb)`

This is the same as `addEventListener`, except that it removes the listener.

#### `dispatcher.dispatchEvent(type[, data])`

Call all listeners of `type`, while passing `data`.

#### `dispatcher.dispose()`

Delete instance.

## License

MIT, see [LICENSE.md](https://github.com/vaalentin/event-dispatcher/blob/master/LICENSE.md) for more details.

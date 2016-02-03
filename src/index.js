/**
 * @class EventDispatcher
 */
export default class EventDispatcher {
  /**
   * @constructs EventDispatcher
   */
  constructor() {
    this._listeners = {};
  }

  /**
   * @method dispatchEvent
   * @public
   * @param {string} type
   * @param {any[]} args
   * @returns {this}
   */
  dispatchEvent(type, ...args) {
    if(!this._listeners[type]) {
      return;
    }

    for(let listener of this._listeners[type]) {
      listener(...args);
    }

    return this;
  }

  /**
   * Alias for dispatchEvent
   *
   * @method trigger
   * @public
   */
  trigger = this.dispatchEvent;

  /**
   * @method addEventListener
   * @public
   * @param {string} type
   * @param {(any) => any} cb
   * @returns {this}
   */
  addEventListener(type, cb) {
    if(!this._listeners[type]) {
      this._listeners[type] = [];
    }

    if(this._listeners[type].indexOf(cb) !== -1) {
      throw new Error('You can\'t add the same listener to the same event more than once');  
    }

    this._listeners[type].push(cb);

    return this;
  }

  /**
   * Alias for addEventListener
   *
   * @method on
   * @public
   */
  on = this.addEventListener;

  /**
   * @method removeEventListener
   * @public
   * @param {string} type
   * @param {(any) => any} cb
   * @returns {this}
   */
  removeEventListener(type, cb) {
    if(!this._listeners[type]) {
      return;
    }

    const i = this._listeners[type].indexOf(cb);

    if(i !== -1) {
      this._listeners[type].splice(i, 1);
    }

    return this;
  }

  /**
   * Alias for removeEventListener
   *
   * @method off
   * @public
   */
  off = this.removeEventListener;

  /**
   * @method dispose
   * @public
   */
  dispose() {
    this._listeners = null;
  }
}


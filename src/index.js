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
   * @protected
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

    if(this._listeners[type].indexOf(cb) === -1) {
      this._listeners[type].push(cb);
    }

    return this;
  }

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

  dispose() {
    
  }
}


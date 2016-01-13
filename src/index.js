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
   * @method dispatch
   * @protected
   * @param {string} type
   * @param {any[]} args
   */
  dispatch(type, ...args) {
    if(!this._listeners[type]) {
      return;
    }

    for(let listener of this._listeners[type]) {
      listener(...args);
    }
  }

  /**
   * @method addEventListener
   * @public
   * @param {string} type
   * @param {(any) => any} cb
   */
  addEventListener(type, cb) {
    if(!this._listeners[type]) {
      this._listeners[type] = [];
    }

    if(this._listeners[type].indexOf(cb) === -1) {
      this._listeners[type].push(cb);
    }
  }

  /**
   * @method removeEventListener
   * @public
   * @param {string} type
   * @param {(any) => any} cb
   */
  removeEventListener(type, cb) {
    if(!this._listeners[type]) {
      return;
    }

    const i = this._listeners[type].indexOf(cb);

    if(i !== -1) {
      this._listeners[type].splice(i, 1);
    }
  }
}


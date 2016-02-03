import test from 'tape';
import EventDispatcher from '../src/';

test('should be instanciable', t => {
  t.plan(1);

  const dispatcher = new EventDispatcher();

  t.ok(dispatcher instanceof EventDispatcher, 'instance of EventDispatcher');
});

test('should be able to add, dispatch and remove a listener', t => {
  t.plan(2);

  const dispatcher = new EventDispatcher();

  let called = 0;

  const listener = () => {
    called++ > 0
      ? t.fail('listener shouldn\'t be triggered again')
      : t.pass('listener trigger ok');
  }

  dispatcher.addEventListener('name', listener);

  dispatcher.dispatchEvent('name');

  dispatcher.removeEventListener('name', listener);

  dispatcher.dispatchEvent('name');

  t.pass('listeners remove ok');
});

test('should throws if trying to add the same listener to the same event more than once', t => {
  t.plan(1);

  const dispatcher = new EventDispatcher();

  const listener = () => null;

  dispatcher.addEventListener('name', listener);

  t.throws(() => {
    dispatcher.addEventListener('name', listener);
  }, Error, 'throws ok');
});

test('should pass data', t => {
  t.plan(2);

  const dispatcher = new EventDispatcher();

  const data1 = { value: Math.random() };
  const data2 = 12;

  dispatcher.addEventListener('name', (d1, d2) => {
    t.deepEqual(d1, data1, 'data passed by ref ok');
    t.equal(d2, data2, 'data passed by value ok');
  });

  dispatcher.dispatchEvent('name', data1, data2);
});

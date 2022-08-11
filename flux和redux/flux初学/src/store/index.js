//store有两个功能,存储数据,当数据发生改变时，视图要进行更新
const EventEmitter = require( 'events' ).EventEmitter;
//events 模块只提供了一个对象： events.EventEmitter。EventEmitter 的核心就是事件触发与事件监听器功能的封装。可以通过require("events");来访问该模块。
      const store = {
        ...EventEmitter.prototype,
        //state 是 react 中用来存储组件数据状态的,可以类比成 vue 中的 data。
        state: {
          count: 0
        },
        //与 vue 中不同的是 state 不能直接被修改，需要通过 setState() 的方法去修改。setState() 更新组件状态之后不会立即生效，react 为提高性能会按批次更新 state 然后 render, 即异步操作，所以 setSate() 之后立即去取state的值并不是更新之后的状态。
        getState () {
          return this.state
        }
      };
      export default store ;

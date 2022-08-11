import { Dispatcher } from 'flux';
  import * as type from './type'
  import state from './state'
  const dispatcher = new Dispatcher();

  // dispatcher.register( callback )

  dispatcher.register( ( actions) => {
    switch ( actions.type ) {
      case type.INCRMENT:
          // 用户操作了
          state.count++
        break;
    
      default:
        break;
    }
  })
  export default dispatcher;

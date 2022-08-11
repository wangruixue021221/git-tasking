import store from './store'
//React 的组件可以定义为 class 或函数的形式,定义 class 组件，需要继承 React.Component
    class xxx extends React.Component{
      constructor () {
        super();
        //永远不要直接改变 this.state，因为后续调用的 setState() 可能会替换掉改变,把 this.state 看作是不可变的。
        this.state = {
            //获取数据store.getState()
          count: store.getState().count
        }
      }
//render() 方法是 class 组件中唯一必须实现的方法。
      render () {
        return (
          <div>
            <p> { this.state.count } </p>
          </div>
        )
      }
    }
import { createElement, Component, render } from './toy-react'

class MyComponent extends Component {
  constructor () {
    super();
    this.state = {
      a: 1,
      b: 2,
    }
  }

  render() {
    return <div>
      <h1>my component</h1>
      <span>{ this.state.a}</span>
      { this.children }
    </div>
  }
}

render(<MyComponent id="a" class="c">
  <div>abc</div>
  <div>e</div>
  <div>f</div>
  <div>g</div>
</MyComponent>, document.body)

import { Component } from 'react';

class Test extends Component {
  constructor(props: number) {
    super(props);
    this.state = {
      value: 1,
    };
  }

  handleClick = (): void => {
    console.log(1);
  };
}

export default Test;

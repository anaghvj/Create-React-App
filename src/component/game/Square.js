import React from "react";
import Button from "semantic-ui-react/dist/commonjs/elements/Button/Button";
class Square extends React.Component {
  render() {
    return (
      <Button className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </Button>
    );
  }
}

export default Square;

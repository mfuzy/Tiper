import React from "react";

export class Inp extends React.Component {
  render() {
    return (
      <div>
        Kurz {this.props.zapas}:{" "}
        <input
          name={this.props.name}
          className="green"
          type="number"
          step="0.01"
          value={this.props.val}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

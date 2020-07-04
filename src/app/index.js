import React from "react";
import ReactDOM from "react-dom";
import { Inp } from "./components/Inp";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { vklad: "", pocet: 1, inp0: 1 };

    this.pridaj = this.pridaj.bind(this);
    this.uber = this.uber.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  pridaj(e) {
    const inp = "inp" + this.state.pocet;
    this.setState({ pocet: this.state.pocet + 1, [inp]: 1 });
  }

  uber(e) {
    if (this.state.pocet === 1) {
      return;
    } else {
      this.setState({ pocet: this.state.pocet - 1 });
    }
  }

  onChange(e) {
    const name = e.target.name;
    const val = e.target.value;

    this.setState({ [name]: val });
  }

  render() {
    const pole = new Array(this.state.pocet);

    for (var i = 0; i < pole.length; i++) {
      pole[i] = i;
    }

    const zapasy = pole.map((x, i) => {
      var inp = "inp" + x;
      return (
        <Inp
          key={i}
          name={"inp" + x}
          zapas={x + 1}
          val={this.state[inp]}
          onChange={this.onChange}
        />
      );
    });

    var kurzy = 1;
    var inp;

    for (var i = 0; i < pole.length; i++) {
      inp = "inp" + i;
      kurzy *= this.state[inp];
    }

    const vyhra = this.state.vklad * kurzy;

    return (
      <div>
        <strong>VKLAD:</strong>{" "}
        <input
          id="vklad"
          name="vklad"
          type="number"
          value={this.state.vklad}
          onChange={this.onChange}
          autoFocus
        />{" "}
        €
        <br />
        <br />
        {zapasy}
        <button onClick={this.pridaj}>Pridať zápas</button>{" "}
        <button onClick={this.uber}>Ubrať zápas</button>
        <br />
        <br />
        <br />
        <strong>VÝHRA:</strong>{" "}
        <input
          id="vyhra"
          name="vyhra"
          type="number"
          value={vyhra.toFixed(2)}
          readOnly
        />{" "}
        €
      </div>
    );
  }
}

//=============================================================

ReactDOM.render(<App />, document.getElementById("root"));

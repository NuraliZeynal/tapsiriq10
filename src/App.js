import React from "react";
import "./styles.css";
import CardForm from "./Form";
/*
По закрытию карты удаляйте ее из списка карт клиента
*/
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        { number: "7653 7553 5693 9862", balance: 100 },
        { number: "7453 9736 0763 3474", balance: 400 },
        { number: "9577 7543 9379 9784", balance: 800 }
      ]
    };
  }
  handleCloseCard = (idx) => {
    // YOUR CODE HERE 1
    const clone = [...this.state.cards];
    clone.splice(idx, 1);
    this.setState({ cards: clone });

    console.log(idx);
  };

  handleOpenCard = (card) => {
    // YOUR CODE HERE 2
    const array = [...this.state.cards];
    let exits = false;
    array.map((item) => {
      if (item.number === card.number) {
        exits = true;
      }
    });

    if (!exits) {
      array.push(card);
      this.setState({ cards: array });
    }

    console.log(array);
  };

  render() {
    return (
      <div className="app">
        <CardForm handleOpenCard={this.handleOpenCard} />
        {this.state.cards.map(({ number, balance }, idx) => (
          <div key={number} className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">
                Карта <br />
                {number}
              </h5>
              <div className="card-text">
                <ul className="list-group">
                  <li className="list-group-item">Баланс: {balance}</li>
                  <hr />
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => this.handleCloseCard(idx)}
                  >
                    Закрыть карту
                  </button>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

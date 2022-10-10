import React from "react";
import { Component } from "react";
import axios from "axios";
class expense extends Component {
  state = {
    name: "",
    income: "",
    foods: "",
    entertainment: "",
    savings: "",
    expense: 0,
    balance: 0,
  };
  income = (e) => {
    this.setState({ income: parseInt(e.target.value) });
  };
  foods = (e) => {
    this.setState({ foods: parseInt(e.target.value) });
  };
  entertainment = (e) => {
    this.setState({ entertainment: parseInt(e.target.value) });
  };
  savings = (e) => {
    this.setState({ savings: parseInt(e.target.value) });
  };
  //on form change and setting expense
  submit = (e) => {
    e.preventDefault();
    this.setState({
      expense: this.state.entertainment + this.state.foods + this.state.savings,
    });
    if (this.state.name === "") {
      alert("enter your name to continue");
    }
  };

  //balance setting
  balance = () => {
    if (
      this.state.income > this.state.entertainment &&
      this.state.income > this.state.foods &&
      this.state.income > this.state.savings
    ) {
      this.setState({ balance: this.state.income - this.state.expense });
    } else if (this.state.income === "") {
      alert("enter the income first");
    } else {
      alert("expense is more than income!");
    }
  };
  save = () => {
   
    const data = {
      name: this.state.name,
      income: this.state.income,
      expense: this.state.expense,
      balance: this.state.balance,
    };
    axios
      .post(
        "https://sheetdb.io/api/v1/2bzof5eih7pgj",
        data
      )
      .then((res) => {
        console.log(res);
        alert("data saved");
      });
  };
  render() {
    return (
      <div className="container">
        <h1 className="title">EXPENSES APP</h1>
        <form onSubmit={this.submit} className="form-input">
          <h1>Name</h1>
          <input
            type="text"
            placeholder="Enter your name"
            value={this.state.name}
            required
            onChange={(e) => {
              this.setState({ name: e.target.value });
            }}
          />
          <h1>Income</h1>
          <input
            type="number"
            placeholder="Enter your income"
            value={this.state.income}
            required
            onChange={this.income}
          />
          <h1>Foods</h1>
          <input
            type="number"
            placeholder="Enter for  foods"
            value={this.state.foods}
            required
            onChange={this.foods}
          />
          <h1>Entertainment</h1>
          <input
            type="number"
            placeholder="Enter money for entertainment"
            value={this.state.entertainment}
            required
            onChange={this.entertainment}
          />
          <h1>Savings</h1>
          <input
            type="number"
            placeholder="Enter money for savings "
            value={this.state.savings}
            required
            onChange={this.savings}
          />
          <button className="buttons-name" id="sub">
            submit
          </button>
        </form>
        2
        <div className="buttons">
          <div>
            <h1>{`Your Income ${this.state.income}`}</h1>
          </div>
          <div>
            <h1>{`Your expense ${this.state.expense}`}</h1>
          </div>
          <div>
            
            <h1>{`Your balance ${this.state.income - this.state.expense}`}</h1>
          </div>
          <div>
            <button id="btn-2" onClick={this.balance} className="buttons-name">Ok</button>
            <button id="btn-2" onClick={this.save} className="buttons-name">
              save
            </button>
          </div>
        </div>
      </div>
    );
  }
}


export default expense;

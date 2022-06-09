import React from "@types/react";
import { BlockResponse } from "./blockResponse";

export class BlockForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jason: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ jason: e.target.value });
    console.log('handleChange()', this.state.jason);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('handleSubmit()', this.state.jason);
  }

  render() {
    let parsedJason = this.state.jason ? JSON.parse(this.state.jason)['blocks'] : null;

    return (
      <div className="full-container">
        <form className="block-request-form" onSubmit={ this.handleSubmit }>
          <label>
            Jason:
            <br/>
            <br/>
            <textarea value={ this.state.jason } onChange={ this.handleChange }/>
          </label>
          <br/>
          <br/>
          <input type="submit" value="Submit"/>
        </form>
        <br/>
        <div className="slack-block-response">
          <BlockResponse parsedJason={ parsedJason }/>
        </div>
      </div>
    );
  }
}

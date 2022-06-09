import React from 'react';
import { BlockResponse } from "./blockResponse";
import { BuildPayloadDTO } from "../parsers/blockPayload";

export class BlockForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jason: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ jason: e.target.value });
    console.log('handleChange()', this.state.jason);
  }

  render() {
    const parsedJason = this.state.jason ? JSON.parse(this.state.jason)['blocks'] : null;
    const parsedPayload = parsedJason ? BuildPayloadDTO(parsedJason) : null;

    return (
      <div className="full-container">
        <form className="block-request-form">
          <label>
            Jason:
            <br/>
            <textarea value={ this.state.jason } onChange={ this.handleChange }/>
          </label>
        </form>
        <br/>
        <div className="slack-block-response">
          <BlockResponse parsedPayload={ parsedPayload }/>
        </div>
      </div>
    );
  }
}

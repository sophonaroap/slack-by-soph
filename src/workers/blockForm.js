import React from 'react';
import { BlockResponse } from "./blockResponse";
import { buildPayloadDTO } from "../parsers/blockPayload";

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
    const parsedPayload = this.state.jason ? buildPayloadDTO(JSON.parse(this.state.jason)['blocks']) : null;

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

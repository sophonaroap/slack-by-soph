import React from 'react';
import { BlockResponse } from "./blockResponse";
import { buildBlocksPayload } from "../parsers/buildBlocksPayload";

/**
 * BlockForm contains both the input form and the block response
 * The input form takes in a block payload (JSON)
 * The response contains the rendered blocks, which are contained in < BlockResponse />
 */
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
    // Parse the user input JSON, and return an array of BlockDTOs objects to later iterate through
    const parsedPayload = this.state.jason ? buildBlocksPayload(JSON.parse(this.state.jason)['blocks']) : null;

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

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

// functional component
// class SectionBlock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       type: 'section',
//       text: 'This is a plain text section block.',
//       block_id: ''
//     }
//   }
//
//   render() {
//     return (
//       <div>{ this.state.text }</div>
//     )
//   }
// }

/*
componentdidmount : traverse parsed_jason, build an array of section blocks by each dict in parsed_jason
once I have that array of section blocks, I set state (blocks_list)
render: traverse blocks list and
 */

function SectionBlock(props) {
  let block_text = props.block_text;
  let block_id = props.block_id;

  return (
    <div id={ block_id }>{ block_text }</div>
  );
}

class BlockResponse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parsed_jason: props.parsed_jason,
    };
  }
  //
  // componentDidUpdate(prevProps, prevState) {
  //   console.log('component did mount')
  //   console.log(this.state.parsed_jason)
  //   for (const block_dict in this.state.parsed_jason) {
  //     let this_block = < SectionBlock block_text={ block_dict['text']['text'] } block_id={ block_dict['block_id'] }/>;
  //
  //     this.setState((state) => {
  //       return { block_list: state.block_list.push(this_block) };
  //     });
  //   }
  // }

  render() {
    console.log('render', this.props.parsed_jason);

    let block_list = [];
    if (!this.props.parsed_jason) {
      return;
    }

    for (let block_index = 0; block_index < this.props.parsed_jason.length; block_index++) {
      let block_dict = this.props.parsed_jason[block_index]
      console.log('block_dict', block_dict);

      let this_block = < SectionBlock block_text={ block_dict['text']['text'] } block_id={ block_dict['block_id'] }/>;

      // this.setState((state) => {
      //   return { block_list: state.block_list.push(this_block) };
      // });
      block_list.push(this_block);
    }
    // for (const block_dict in this.props.parsed_jason) {
    //   console.log('block_dict');
    //   console.log(block_dict);
    //   let this_block = < SectionBlock block_text={ block_dict['text']['text'] } block_id={ block_dict['block_id'] }/>;
    //
    //   // this.setState((state) => {
    //   //   return { block_list: state.block_list.push(this_block) };
    //   // });
    //   block_list.push(this_block);
    // }
    const display_block_list = block_list.map((block, index) => {
      return (
        <div key={ index }>
          { block }
        </div>
      );
    })

    return (
      <>
        { display_block_list }
      </>
    );
  }
}

class SlackBlockForm extends React.Component {
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
    console.log('hello')
    console.log(this.state.jason)
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('hello2')
    console.log(this.state.jason)
  }

  render() {
    let parsed_jason = this.state.jason ? JSON.parse(this.state.jason)['blocks'] : null;
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
          <BlockResponse parsed_jason={ parsed_jason }/>
        </div>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SlackBlockForm />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

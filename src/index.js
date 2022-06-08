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
  let blockText = props.blockText;
  let blockId = props.blockId;

  return (
    <div id={ blockId }>{ blockText }</div>
  );
}

class BlockResponse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parsedJason: props.parsedJason,
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
    console.log('render', this.props.parsedJason);

    let blockList = [];
    if (!this.props.parsedJason) {
      return;
    }

    for (let blockIndex = 0; blockIndex < this.props.parsedJason.length; blockIndex++) {
      let blockDict = this.props.parsedJason[blockIndex]
      console.log('blockDict', blockDict);

      let thisBlock = < SectionBlock blockText={ blockDict['text']['text'] } blockId={ blockDict['block_id'] }/>;

      // this.setState((state) => {
      //   return { blockList: state.blockList.push(thisBlock) };
      // });
      blockList.push(thisBlock);
    }
    // for (const block_dict in this.props.parsed_jason) {
    //   console.log('block_dict');
    //   console.log(block_dict);
    //   let this_block = < SectionBlock block_text={ block_dict['text']['text'] } block_id={ block_dict['block_id'] }/>;
    //
    //   // this.setState((state) => {
    //   //   return { blockList: state.blockList.push(this_block) };
    //   // });
    //   blockList.push(this_block);
    // }
    const displayBlockList = blockList.map((block, index) => {
      return (
        <div key={ index }>
          { block }
        </div>
      );
    })

    return (
      <>
        { displayBlockList }
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

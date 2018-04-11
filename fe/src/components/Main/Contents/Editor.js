import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as wirte from 'redux/modules/contents/wirte';

import CodeMirror from 'react-codemirror';
require('codemirror/lib/codemirror.css');
require('codemirror/mode/markdown/markdown');
class CEditor extends Component {
    constructor(props) {
        super(props);
        this.changeContext = this.changeContext.bind(this);
        this.state = {
			mode: 'markdown'
        };
    }
    changeContext(newCode){
        const { status:{wirte} } = this.props;
        console.log(wirte.getIn(["context"]));
        wirte.setIn(["context"], newCode);
    }
    render() {
        const divStyle = {
            display: this.props.onHide ? "block" : "none"
        }
		const options = {
			lineNumbers: true,
            mode : this.state.mode
		};
        return(
            <div style={divStyle}>
                <CodeMirror
                    options={options} autoFocus={true} onChange={this.changeContext}
                />
            </div>
        );
    }
}

export default connect(
	state => ({
		status: {
			wirte: state.contents.wirte
		}
	}),
	dispatch => ({
		Contents: bindActionCreators(wirte, dispatch),
	})
)(CEditor);



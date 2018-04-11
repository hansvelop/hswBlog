import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as wirte from 'redux/modules/contents/wirte';

import showdown from 'showdown';

class Preview extends Component {
    state = {
        html: ''
    }
    componentDidMount() {
		const { status:{wirte} } = this.props;
        const markdown = wirte.getIn(['context']);
        const converter = new showdown.Converter({
            simpleLineBreaks: true
        });
        this.converter = converter;

        const html = converter.makeHtml(markdown);

        this.setState({
            html
        });
    }
    
    createMarkup = () => ({
        __html: this.state.html
    });

    render() {
        const { createMarkup } = this;
        const divStyle = {
            display: this.props.onHide ? "block" : "none"
        }
        return (
            <div style={divStyle}
                dangerouslySetInnerHTML={createMarkup()} 
            ></div>
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
)(Preview);

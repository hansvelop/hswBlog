import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as header from 'redux/modules/base/header';
import * as modal from 'redux/modules/base/modal';

import LeftArea from 'components/Main/LeftArea/LeftArea';
import RightArea from 'components/Main/RightArea';
import MainContent from 'components/Main/MainContent';
class MainRoute extends Component {
	render() {
         return (
            <div>
                <div className="main-warpper">
                    <LeftArea />
                    <MainContent />
                    <RightArea />
                </div>
            </div>
         );
    }
}
 
export default connect(
	state => ({
		status: {
			modal: state.base.modal,
			header: state.base.header
		}
	}),
	dispatch => ({
		ModalActions: bindActionCreators(modal, dispatch),
		HeaderActions: bindActionCreators(header, dispatch)
	})
)(MainRoute);
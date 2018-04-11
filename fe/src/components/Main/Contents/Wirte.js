import React, { Component } from 'react';
import {Icon} from 'semantic-ui-react';
import Dimmer from 'components/Common/Dimmer';
import CEditor from './Editor';
import Preview from './Preview';

class Wirte extends Component {
    constructor(props) {
        super(props);
        this.wirteOpenMode = this.wirteOpenMode.bind(this);
        this.wirteCloseMode = this.wirteCloseMode.bind(this);
        this.previewShowHide = this.previewShowHide.bind(this);
        this.state = {
            wirteMode: false,
            previewFlag : true
        };
    }
    wirteOpenMode(){
        this.setState({wirteMode: true});
    }
    wirteCloseMode(){
        this.setState({wirteMode: false});
    }
    previewShowHide(){
        this.setState({previewFlag: !this.state.previewFlag});
    }
    render() {
        const wirteMode = this.state.wirteMode;
        const previewFlag = this.state.previewFlag;
        const modeType = wirteMode ? 'wirteMode' : '';
        return (
            <div>
                <div className={`write-area ${modeType}`}>
                    <div className="write-header">
                        <div className="btn-area">
                        <a className="write-btn" onClick={this.wirteOpenMode} ><Icon name="write" /><span>Writing</span></a>
                        </div>
                        <div className="cancel-area" onClick={this.wirteCloseMode}>
                            <Icon className="cancel-btn" name="cancel" />
                        </div>
                    </div>
                    <div className="write-content" >
                        <div className="title-input" onClick={this.wirteOpenMode}>
                            <div className="input-wrapper">
                                <input type="text" placeholder="Post Title" />
                            </div>
                        </div>
                        <div className="desctiption">
                            <div className="preview-btn" onClick={this.previewShowHide}>{previewFlag ? "preview" : "code"}</div>
                            <CEditor onHide={previewFlag}/>
                            <Preview onHide={!previewFlag}/>
                        </div>
                    </div>
                </div>
                <Dimmer viewFlag={wirteMode} onClick={this.wirteCloseMode}/>
            </div>
        );
    }
}

export default Wirte;
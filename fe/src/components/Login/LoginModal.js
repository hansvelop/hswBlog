import React,{Component} from 'react'
import Dimmer from 'components/Common/Dimmer';
import EyeCatchy from 'components/Common/EyeCatchy';
import { Icon } from 'semantic-ui-react'
import auth from 'helpers/auth/auth';

class LoginModal extends Component{
    state = {
        closing : false
    }
    componentDidUpdate(preProps, nextState) {
        if(preProps.visible && !this.props.visible){
            this.setState({
                closing: true
            });
            setTimeout(
            () => {
                this.setState({closing:false});
            }    
            , 500);
        }
    }

    handleAuth = (provider) =>{
        this.props.onHide();
        auth[provider]().catch(
            error =>{
                
            }  
        );
    }

    render(){
        const {handleAuth} = this;
        const {visible, onHide} = this.props;
        const {closing} = this.state;
        if(!closing && !visible) return null;
        const animaition = visible ? 'bounceIn' : 'bounceOutDown';
        return(
            <div>
                <div className="login-modal-wrapper">
                    <EyeCatchy  onHide={onHide} >
                        <div className={`login-modal ${animaition}`}>
                            <div className="cancel-btn" onClick={onHide}><Icon size="big" name="cancel" /></div>
                            <div className="login-header"><Icon name='user' size='large' />로그인</div>
                            <div className="login-body">
                                <SocialLoginButton type="google" onClick={() => handleAuth('google')} />
                                <SocialLoginButton type="facebook" onClick={() => handleAuth('facebook')} />
                                <SocialLoginButton type="github" onClick={() => handleAuth('github')} />
                            </div>
                        </div>
                    </EyeCatchy>
                </div>
                <Dimmer viewFlag={true}/>
            </div>
        )
    }
    
}



const SocialLoginButton = ({type, onClick}) =>{
    const text = {
        github: 'Github',
        google: 'Google',
        facebook: 'Facebook'
    };

    const icon = {
        github: 'github square',
        google: 'google',
        facebook: 'facebook square'
    }

    return (
        <div onClick={onClick} className={`social-login-button ${type}`}><Icon size="big" name={`${icon[type]}`} /><b>{text[type]}</b> 계정으로 로그인 </div>
    );
};
export default LoginModal

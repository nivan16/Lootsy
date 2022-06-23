import React from 'react';

class SessionModal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.closeSessionModal = this.closeSessionModal.bind(this);
    }

    handleChange(field){
        console.log(field);
        return e => this.setState({ 
            [field]: e.target.value
        })
    }

    closeSessionModal(e){
        if (e.target === e.currentTarget){
            this.props.closeModal();
        }
    }

    render(){ 
        // I think this particular conditional will be handled by the nav bar in the future,
        //  as it will either render a signing/signup button or one specific to the user with a drop down
        return true ? (
            <div className='session-modal-background' onClick={this.closeSessionModal}>
                <div className='session-modal-wrapper'>
                    <form className='session-modal-form'> {/* why is this whole thing a form on etsy?*/}
                        <div className='session-modal-header-wrap'>
                            <h1 className='session-modal-header'>Sign in</h1> 
                            <button className='session-modal-register-button'>Register</button> {/* This is a dummy button for now */}
                        </div>

                        <div className='session-modal-input-wrap'>
                            <label htmlFor='session-modal-email'>Email address</label>
                            <input type="text" id='session-modal-email' value={this.state.email} onChange={this.handleChange('email')} />
                        </div>
                        
                        <div className='session-modal-input-wrap'>
                            <label htmlFor='session-modal-password'>Password</label>
                            <input type="password" id='session-modal-password' value={this.state.password} onChange={this.handleChange('password')} />
                        </div>
                        

                        <button className='session-modal-form-button'>Sign In</button>
                    </form>
                </div>
            </div>
        ) : null // either returns the modal or null!
    }
}

export default SessionModal;
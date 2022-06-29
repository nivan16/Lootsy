import React from 'react';

class SessionModal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            register: false,
            user: {
                email: "",
                name: "",
                password: ""
            }
        };

        //binding methods that are invoked functional style
        this.handleChange = this.handleChange.bind(this);
        this.handleModalSwitch = this.handleModalSwitch.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.closeSessionModal = this.closeSessionModal.bind(this);
    }

    resetState(){
        this.setState({
            register: false,
            user: {
                email: "",
                name: "",
                password: ""
            }
        });
    }

    handleSubmit(e){
        e.preventDefault();
        if(this.state.register){
            this.props.signupCurrentUser(this.state.user)
                .then(() => {
                    this.props.closeModal() 
                    this.resetState();
                }); //only on successfull submission!
        }
        else {
            this.props.loginCurrentUser(this.state.user) 
                .then(() => {
                    this.props.closeModal() 
                    this.resetState();
                }); //only on successfull submission!
        }
    }

    handleModalSwitch(){
        this.setState({
            register: true
        });
    }

    handleChange(field){
        //Since setState only offers shallow updates, the
        //  solution here was to deconstruct the previous state of the user,
        //  and then have the new, updated version overwrite the previous field
        //  before sending back this deeper updated ver. of state.

        //Order matters! If the prevState is deconstructed after the [field]: e.target.value line,
        //  the prevState will always override the newState!
        return e => this.setState( (prevState) => ({
            user: {
                ...prevState.user,
                [field]: e.target.value
            }
        }));
    }

    closeSessionModal(e){
        e.stopPropagation();
        const targetClass = e.target.className; //this is so that the event object isnt queried twice
        //e.button returns which mouse button triggered the event, 0 being the primary (left) button
        if ((targetClass === 'session-modal-background' || targetClass === 'session-modal-close-button') && (e.button === 0)){
            this.props.closeModal();
            this.props.clearSessionErrors();
            this.resetState();
        }
    }

    renderErrorMessage(error){
        return (
            <div className='session-modal-input-error'>{error}</div>
        ) 
    }

    render(){
        // debugger;
        const emailError = this.props.errors['email'];
        const passwordError = this.props.errors['password'];
        const nameError = this.props.errors['name'];
        // I think this particular conditional will be handled by the nav bar in the future,
        //  as it will either render a signing/signup button or one specific to the user with a drop down
        return this.props.isOpen ? (
            <div className='session-modal-background' onMouseDown={this.closeSessionModal}>
                <div className='session-modal-wrapper'>
                    <form className='session-modal-form' onSubmit={this.handleSubmit}> {/* why is this whole thing a form on etsy?*/}
               
                        <span>
                            <button className='session-modal-close-button'>X</button>
                        </span>
                     
                        {
                            this.state.register ? (
                                <div className='session-modal-register-header-wrap'>
                                    <h1 className='session-modal-register-header'>Create your account</h1>
                                    <div className='session-modal-register-header-extra'>Registration is easy.</div>
                                </div>
                            ) : (
                                <div className='session-modal-login-header-wrap'>
                                    <h1 className='session-modal-login-header'>Sign in</h1> 
                                    <button className='session-modal-register-button' type='button' onClick={this.handleModalSwitch}>Register</button>
                                </div>
                            )
                        }
                        <div className='session-modal-input-wrap'>
                            <label htmlFor='session-modal-email'>Email address</label>
                            <input type="text" id='session-modal-email' className='session-modal-email-input'  value={this.state.user.email} onChange={this.handleChange('email')} />
                        </div>

                        { 
                            emailError ? this.renderErrorMessage(emailError) : null
                        }
                        
                        {/* this is the ---***Name input field***--- that will only render on the register form */}
                        {  
                            this.state.register ? (
                                <>
                                    <div className='session-modal-input-wrap'>
                                        <label htmlFor='session-modal-name'>Name</label>
                                        <input type="text" id='session-modal-name' className='session-modal-name-input'  value={this.state.user.name} onChange={this.handleChange('name')} />
                                    </div>

                                    { nameError ? this.renderErrorMessage(nameError) : null }
                                </>
                            ) : null
                        }
                        
                        <div className='session-modal-input-wrap'>
                            <label htmlFor='session-modal-password'>Password</label>
                            <input type="password" id='session-modal-password' className='session-modal-password-input' value={this.state.user.password} onChange={this.handleChange('password')} />
                        </div>

                        {
                            passwordError ? this.renderErrorMessage(passwordError) : null
                        }

                        {/*  this is a terrible line of code, must refactor backend to send more specific errors or have frontend select this better!!! (selector.js file??) */ }
                        {/*  there are still fringe cases yet unresolved with the model validations returning pure errs (kinda) */ }
                        {
                            this.props.errors instanceof Array ? this.props.errors.map( err => this.renderErrorMessage(err)) : null
                        }

                        <button type="submit" className='session-modal-form-button'>{this.state.register ? 'Register' : 'Sign In'}</button>
                    </form>
                </div>
            </div>
        ) : ( 
            // either returns the modal or null!   
            null
        )
    }
}

export default SessionModal;
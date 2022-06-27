import React from 'react';

class SessionModal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleModalSwitch = this.handleModalSwitch.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.closeSessionModal = this.closeSessionModal.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.loginCurrentUser(this.state) 
            .then(() => this.props.closeModal()) //these two async functions might be able to just be one
            .then( () => this.setState({
                email: "",
                password: ""
            }) );
    }

    handleModalSwitch(){
        // debugger;
        //first

        // this.setState({name: ''})
        // debugger;
        // // ss

        this.setState(null)
  
    }

    handleChange(field){
        return e => this.setState({ 
            [field]: e.target.value
        })
    }

    closeSessionModal(e){
        e.stopPropagation();

        const targetClass = e.target.className; //this is so that the event object isnt queried twice
        if (targetClass === 'session-modal-background' || targetClass === 'session-modal-close-button'){
            this.props.closeModal();
        }
    }

    render(){ 
        debugger;
        // I think this particular conditional will be handled by the nav bar in the future,
        //  as it will either render a signing/signup button or one specific to the user with a drop down
        return this.props.isOpen ? (
            <div className='session-modal-background' onMouseDown={this.closeSessionModal}>
                <div className='session-modal-wrapper'>
                    <form className='session-modal-form' onSubmit={this.handleSubmit}> {/* why is this whole thing a form on etsy?*/}
               
                        <span>
                            <button className='session-modal-close-button'>X</button>
                        </span>
                     

                        <div className='session-modal-header-wrap'>
                            <h1 className='session-modal-header'>Sign in</h1> 
                            <button className='session-modal-register-button' type='button' onClick={this.handleModalSwitch}>Register</button>
                        </div>

                        <div className='session-modal-input-wrap'>
                            <label htmlFor='session-modal-email'>Email address</label>
                            <input type="text" id='session-modal-email' value={this.state.email} onChange={this.handleChange('email')} />
                        </div>
                        
                        <div className='session-modal-input-wrap'>
                            <label htmlFor='session-modal-password'>Password</label>
                            <input type="password" id='session-modal-password' value={this.state.password} onChange={this.handleChange('password')} />
                        </div>
                        

                        <button type="submit" className='session-modal-form-button'>Sign In</button>
                    </form>
                </div>
            </div>
        ) : null // either returns the modal or null!
    }
}

export default SessionModal;
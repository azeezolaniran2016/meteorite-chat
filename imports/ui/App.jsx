import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Accounts } from 'meteor/accounts-base';
import { connect } from 'react-redux';
import ChatPanel from './components/ChatPanel';
import UsersPanel from './components/UsersPanel';
import SignupForm from './components/authentication/SignupForm';
import LoginForm from './components/authentication/LoginForm';
import { Messages } from '../../api/models';
import * as MessageActions from '../redux/actions/Message';
import * as UserActions from '../redux/actions/User';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      message: '',
      loginEmail: '',
      loginPassword: '',
      signupEmail: '',
      signupPassword: '',
      signupUsername: '',
      selectedUser: {},
      signinSelected: true,
      searchUsername: ''
    }
    this.composeMessage = this.composeMessage.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.enterNewLine = this.enterNewLine.bind(this);
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
    this.handleSignout = this.handleSignout.bind(this);
    this.onTextInputChange = this.onTextInputChange.bind(this);
    this.selectChatUser = this.selectChatUser.bind(this);
    this.toggleAuthTab = this.toggleAuthTab.bind(this);
  }

  sendMessage(e) {
    e.preventDefault();
    const { message, selectedUser } = this.state;
    if (!message.trim()) {
      return;
    }
    const { dispatch, user } = this.props;
    const msgObj = {
      message,
      receiver: selectedUser,
      sender: {
        username: user.username, _id: user._id
      },
      isGeneral: true,
      time: new Date().toLocaleTimeString()
    }
    dispatch(MessageActions.sendMessage(msgObj));
    this.setState({ message: ''});
  }

  toggleAuthTab(event) {
    const { signinSelected } = this.state;
    const { id } = event.target;
    if (id === 'signinTab' && !signinSelected )
      this.setState({ signinSelected: true });
    if (id === 'signupTab' && signinSelected) {
      this.setState({ signinSelected: false })
    }

  }

  enterNewLine(e) {
    e.preventDefault();
    let { message } = this.state;
    message += '\n';
    this.setState({ message })
  }

  composeMessage(event) {
    this.setState({ message: event.target.value });
  }

  onTextInputChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  login(event) {
    event.preventDefault();
    const { loginEmail, loginPassword } = this.state;
    this.props
      .dispatch(UserActions.login({
        email: loginEmail, password: loginPassword
      }));
    this.setState({ loginPassword: '' });
  }

  selectChatUser(event) {
    const { users } = this.props;
    const id = event.target.id;
    const user = users.find(user => user._id === id );
    this.setState({ 
      selectedUser: {
        username: user.username, _id: user._id
      }
    });
  }

  signup(event) {
    event.preventDefault();
    const { signupEmail, signupPassword, signupUsername } = this.state;
    this.props
      .dispatch(UserActions.createUser({
        email: signupEmail,
        password: signupPassword,
        username: signupUsername
      }));
    this.setState({ signupPassword: '' });
  }

  handleSignout(event) {
    event.preventDefault();
    this.props
      .dispatch(UserActions.logout());
  }

  render() {
    const { messages, user, users } = this.props;
    const {
      message, userEmail, userPassword, signupEmail, signupUsername,
      signupPassword, selectedUser, signinSelected, searchUsername
    } = this.state;
    return (
      <div>
        <div className="app-header row">
          <span><i className="fa fa-comments-o fa-lg" aria-hidden="true"></i> Meteorite Chat</span>
          {
            user ?
            <span onClick={this.handleSignout} style={{float: 'right'}}>
              <i className="fa fa-sign-out" aria-hidden="true"/>
            </span>
            :
            null
          }
        </div>
        {user ? 
          <div className="row main">
            <UsersPanel
              users={searchUsername ? users.filter(user => user.username.match(searchUsername, 'i')) : users}
              searchUsername={searchUsername}
              selectedUser={selectedUser}
              currentUser={user}
              selectChatUser={this.selectChatUser}
              filterUsers={this.onTextInputChange}
            />
            {selectedUser._id ? 
            <ChatPanel
              messages={messages.filter(
                message => (message.sender._id === selectedUser._id &&
                message.receiver._id === user._id) || 
                (message.sender._id === user._id &&
                message.receiver._id === selectedUser._id))
              }
              sendMessage={this.sendMessage}
              message={message}
              selectedUser={selectedUser}
              user={user}
              composeMessage={this.composeMessage}
              enterNewLine={this.enterNewLine}
            />
            :
            <div className='col-7 empty-msg-panel'> 
              <p>Select a user to chat with!!! </p>
            </div>
            }
          </div>
          :
          <div className="auth-page">
            <div>
              <div
                id='signinTab'
                className={`col-6 auth-tab-btn ${signinSelected ?
                'auth-tab-btn-active': 'auth-tab-btn'}`}
                onClick={this.toggleAuthTab}
              >
                Login
              </div>
              <div
                id='signupTab'
                className={`col-6 auth-tab-btn ${!signinSelected ?
                'auth-tab-btn-active': 'auth-tab-btn'}`}
                onClick={this.toggleAuthTab}
              >
                Signup
              </div>
            </div>
            {signinSelected ?
              <LoginForm
                id='loginForm'
                email={userEmail}
                onTextInputChange={this.onTextInputChange}
                submit={this.login}
                password={userPassword}
              />
              :
              <SignupForm
                id='signupForm'
                email={signupEmail}
                password={signupPassword}
                username={signupUsername}
                submit={this.signup}
                onTextInputChange={this.onTextInputChange}
              />
            }
          </div>
        }
        <div className="app-footer row">
          <span className='footer-text'>Meteor.js Solution</span>
        </div>
      </div>
    );
  }
}

const ConnectedApp = connect( state => { state })(App);

export default createContainer(() => {
  return {
    messages: Messages.find({}).fetch(),
    user: Meteor.user(),
    users: Accounts.users.find({}).fetch()
  }
}, ConnectedApp);

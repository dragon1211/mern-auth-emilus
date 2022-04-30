import React from 'react'
import { Route, Switch, } from 'react-router-dom';
import Conversation from './Conversation';

const ConversationEmpty = () => (
  <div className="chat-content-empty">
    <div className="text-center">
      <img src="/img/others/img-11.png" alt="Start a Conversation" />
      <h1 className="font-weight-light">Start a conversation</h1>
    </div>
  </div>
)

const ChatContent = ({match}) => {
  return (
    <Switch>
      <Route path={`${match.url}/:id`} component={Conversation} />
      <Route path={`${match.url}`} component={ConversationEmpty} />
    </Switch>
  )
}

export default ChatContent

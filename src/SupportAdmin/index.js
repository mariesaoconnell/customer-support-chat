import React from 'react';
import { ChatEngine } from 'react-chat-engine';

const SupportAdmin = () => {
  return (
    <ChatEngine
    projectID={process.env.REACT_APP_CE_PROJECT_ID}
    userName='Admin'
    userSecret='12345'
    height='calc(100vh - 20px)'
    />
  );
}

export default SupportAdmin;

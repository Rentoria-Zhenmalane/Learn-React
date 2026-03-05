import { useState } from 'react'
import { ChatInput } from './components/ChatInput';
import ChatMessages from './components/ChatMessages'; // called as default export

import './App.css' //feature of Vite is to let us import ay kind of file



function App() {

  {/*
        const chatMessageComponent = chatMessages.map((chatMessage) => {
        return (
          <ChatMessage
            message={chatMessage.message}
            sender={chatMessage.sender}
          />
        )
      });
       Insted of saving result in a variable, can just directly insert the result directly into JSX in function ChatMessages
      */}

  const [chatMsg, setChatMessages] = useState([{ //useState updates the HTML when we update the data. Destructured it for shorter and cleaner syntax

    message: 'hello Chatbot',
    sender: 'user',
    id: 'id1'
  }, {
    message: 'Hello! How can I help you?',
    sender: 'robot',
    id: 'id2'
  }, {
    message: 'Can you get me todays date?',
    sender: 'user',
    id: 'id3'
  }, {
    message: 'Today is February 21',
    sender: 'robot',
    id: 'id4'
  }]
  );
  {/*const chatMsg = array[0]; //Initial state of the array.
        const setChatMessages = array[1]; 
        Function that updates data. 
        const[chatMsg, setChatMessages] = array; //Called Array Destructuring, shortcut of the code above.*/}



  return (
    <div className="app-container">

      { /*{ChatInput()}
              <ChatInput></ChatInput> Called as Component Syntax, does the same thing as the code above.*/ }

      {/* Can also do this kind of syntax if element has no value. Called as Self closing  
          <ChatMessage
            message="hello"
            sender="user" />
          <ChatMessage
            message="Hello! How can I help you?"
            sender="robot" />
          <ChatMessage
            message="Can you get me todays date?"
            sender="user" />
          <ChatMessage
            message="Today is February 21"
            sender="robot" />{/*Reused ChatMessage component here.*/}

      <ChatMessages
        chatMsg={chatMsg}
      />

      <ChatInput
        chatMsg={chatMsg} //{} = save any type of value inside prop
        setChatMessages={setChatMessages}
      />

    </div>
  );
}
//App Component represent the entire application.

//4:51 yt
export default App

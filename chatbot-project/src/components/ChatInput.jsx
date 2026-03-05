import { useState } from 'react'
import { Chatbot } from 'supersimpledev';
import './ChatInput.css';

//where you type and send
export function ChatInput({ chatMsg, setChatMessages }) {
  const [inputText, setInputText] = useState('');

  function saveInputText(event) { //event conatins details about the change
    setInputText(event.target.value); //React gives us access to the input automatically using .target. To get text inside input use .value. After accessing then getting text inside input we want to use updater function(setInputText) to update and save it into inputText.
  }

  function sendMessage() {
    const newChatMessages = [
      ...chatMsg,//Called as Spread Operator, in React modifying data is a must not. So use Spread operator to copy and modify the data.
      {
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID()// generates unique id
      }// This object adds new data to chatMsg
    ]

    setChatMessages(newChatMessages);//updates React state memory for that component.

    const response = Chatbot.getResponse(inputText);
    console.log(response);

    setChatMessages([
      ...newChatMessages,//Called as Spread Operator, in React modifying data is a must not. So use Spread operator to copy and modify the data.
      {
        message: response,
        sender: 'robot',
        id: crypto.randomUUID()// generates unique id
      }// This object adds new data to chatMsg
    ]);

    setInputText(''); //why use updater function instead of inputText? inputText is just the data/value, in React you can't mutate data directly and also const is in use. An updater function or a setter handles the changes of data/value and updates, that's why it's called updater funtion.  
  }


  return (
    <div className="chat-input-container"> {/*Using to div to group multiple elements actually create a bunch of extra div. How to Avoid that? Using a fragment*/}
      <input
        placeholder="Send a message to chatbot"
        size="30"
        onChange={saveInputText} //event handler that runs a function when we change a text inside an <input/>. we use curly brackets here because we wanna save function inside this prop rather than just a string
        value={inputText} //This is a prop, a controlled input. Means input field's value is controlled by react state. Hence, clears the input whenever pressed send.
        className="chat-input"
      />
      <button
        onClick={sendMessage}
        className="send-button">
        Send
      </button>
    </div>

  );
}
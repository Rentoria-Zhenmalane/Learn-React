import { useRef, useEffect } from 'react';
import { ChatMessage } from './ChatMessage';
import './ChatMessages.css';

function ChatMessages({ chatMsg }) {//This function includes all chat related data. Generates all the HTML. This function is an example of component encapsulation.

  const chatMsgRef = useRef(null); //automatically save an HTML element from the component. ref is a container with special react feature. Null is the initial value, it will start as empty.

  //Do not put hooks inside anything like if statement or function. Put hooks at the top of the component.
  useEffect(() => {
    const containerElem = chatMsgRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
      //scrolls all the way down to the bottom.
    }
  }, [chatMsg]); // useEffect runs everytime the component is created or updated, let's us insert special effects from react.
  //
  //2nd parameter(array) called dependency array controls when useEffect runs. Epmty array means run once.

  return (
    <div className="chatMessages-container"
      ref={chatMsgRef}>
      {chatMsg.map((chatMessage) => {
        return (
          <ChatMessage
            message={chatMessage.message}
            sender={chatMessage.sender}
            key={chatMessage.id} //key helps React track which items changed. It compares Old list vs New list. This comparison process is called reconciliation. Key should be UNIQUE.
          />
        );
      })}
    </div>
  );
}

export default ChatMessages; // called as default export
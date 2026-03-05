import RobotProfileImage from '../assets/robot.png';
import UserProfileImage from '../assets/shane.jpg'; // .. means going out of this specific folder to got to assets folder then locate the images
import './ChatMessage.css';


//Message bubble

export function ChatMessage({ message, sender })// also called destructuring, even shorter syntax in JS.
{
  {/*-Components are designed to be reusable
        - Props short for properties, contains all the properties of an attribute.*/ }
  //const {message, sender} = props;  Called as destructuring
  /*
        if (sender === 'robot') {
          return (
            <div>
              <img src="images/robot.png" width="50" />
              {message}
            </div>
          );
        }
    This code is the longcut version of code below.
  */
  return (
    <div className={
      sender === 'user' ?
        'chat-message-user'
        : 'chat-message-robot '}> {/*Can use conditional statement as className in JSX*/}

      {sender === 'robot' &&
        <img src={RobotProfileImage}
          className="chat-profile" />} {/*Called as Guard Operator, If left is true then do the right. It's just like an if statement but in JSX.*/}
      <div className="chat-message-text">
        {message}
      </div>
      {sender === 'user' &&
        <img src={UserProfileImage}
          className="chat-profile" />}

    </div>
  );
};


console.log(UserProfileImage);
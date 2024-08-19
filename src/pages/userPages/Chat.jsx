// import React, { useEffect, useState } from 'react';
// import io from 'socket.io-client';

// const socket = io('http://localhost:8086'); // Adjust the URL if necessary

// const Chat = () => {
//   const [message, setMessage] = useState('');
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     socket.on('chat message', (msg) => {
//       setMessages((prevMessages) => [...prevMessages, msg]);
//     });

//     return () => {
//       socket.off('chat message');
//     };
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (message) {
//       const obj={
//         message:message
//       }
//       socket.emit('chat message', message);
//       setMessage('');
//     }
//   };

//   return (
//     <div>
//       <ul id="messages">
//         {messages.map((msg, index) => (
//           <li key={index}>{msg.message}</li>
//         ))}
//       </ul>
//       <form id="form" onSubmit={handleSubmit}>
//         <input
//           id="input"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           autoComplete="off"
//         />
//         <button type="submit">Send</button>
//       </form>
//     </div>
//   );
// };

// export default Chat;

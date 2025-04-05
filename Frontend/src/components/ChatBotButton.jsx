// import React, { useState } from "react";
// import ChatWindow from "./ChatWindow";

// const ChatBotButton = () => {
//   const [isChatOpen, setIsChatOpen] = useState(false);

//   const toggleChat = () => {
//     setIsChatOpen(!isChatOpen);
//   };

//   const closeChat = () => {
//     setIsChatOpen(false);
//   };

//   const user = localStorage.getItem("accessToken")
//   if(!user){
//     return null
//   }

//   return (
//     <div className="fixed bottom-4 right-4">
//       <button
//         className="bg-black text-white p-3 rounded-full"
//         onClick={toggleChat}
//       >
//         <span role="img" aria-label="Chat Icon" style={{ fontSize: "1.5em" }}>
//           💬 AI Assistant
//         </span>
//       </button>
//       {isChatOpen && <ChatWindow onClose={closeChat} />}
//     </div>
//   );
// };

// export default ChatBotButton;




import React, { useState } from "react";
import ChatWindow from "./ChatWindow";
import { FiMessageSquare } from "react-icons/fi";

const ChatBotButton = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const closeChat = () => {
    setIsChatOpen(false);
  };

  const user = localStorage.getItem("accessToken")
  if(!user){
    return null
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isChatOpen && (
        <button
          className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 flex items-center gap-2"
          onClick={toggleChat}
          aria-label="Open AI Assistant"
        >
          <FiMessageSquare size={22} />
          <span className="font-medium">AI Assistant</span>
        </button>
      )}
      {isChatOpen && <ChatWindow onClose={closeChat} />}
    </div>
  );
};

export default ChatBotButton;
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

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isChatOpen && (
        <button
          className="bg-[#3498db] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 flex items-center gap-2"
          onClick={toggleChat}
          aria-label="Open AI Assistant"
        >
          <FiMessageSquare size={22} />
          {/* <span className="font-medium">AI Assistant</span> */}
        </button>
      )}
      {isChatOpen && <ChatWindow onClose={closeChat} />}
    </div>
  );
};

export default ChatBotButton;
// import React, { useState, useEffect, useRef } from "react";
// import { FiSend, FiX } from "react-icons/fi";
// import { GoogleGenerativeAI } from "@google/generative-ai";

// const genAI = new GoogleGenerativeAI("AIzaSyCdVdYxncXdiIFIywI6FNyUWAH3S2Jsmgg");
// const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

// const ChatWindow = ({ onClose }) => {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState("");
//   const [isTyping, setIsTyping] = useState(false);
//   const messagesEndRef = useRef(null);
//   const welcomeMessageAdded = useRef(false);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   useEffect(() => {
//     if (!welcomeMessageAdded.current) {
//       receiveMessage("👋 Hello! I'm your AI Stock assistant. How can I help you today?");
//       welcomeMessageAdded.current = true;
//     }
//   }, []);

//   const handleInputChange = (e) => {
//     setNewMessage(e.target.value);
//   };

//   const fetchGeminiResponse = async (userMessage) => {
//     try {
//       const prompt = `You are a Expert Stock and financial assistant chatbot. Only provide information related to Stock and financial assistant. If the user asks something unrelated, respond with: 'I am a Stock and financial assistant chatbot. Please ask questions related to that.'\nUser: ${userMessage}`;
//       const result = await model.generateContent(prompt);
//       return result.response.text().replace(/\*/g, "");
//     } catch (error) {
//       console.error("Error fetching response from Gemini:", error);
//       return "Sorry, something went wrong. Please try again later.";
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (newMessage.trim() === "") return;

//     sendMessage(newMessage);
//     setNewMessage("");
//     setIsTyping(true);

//     const botResponse = await fetchGeminiResponse(newMessage);
//     setIsTyping(false);
//     receiveMessage(botResponse);
//   };

//   const sendMessage = (message) => {
//     setMessages((prevMessages) => [...prevMessages, { text: message, type: "user" }]);
//   };

//   const receiveMessage = (message) => {
//     setMessages((prevMessages) => [...prevMessages, { text: message, type: "bot" }]);
//   };

//   return (
//     <div className="fixed bottom-4 right-4 w-[400px] h-[600px] bg-white rounded-xl shadow-2xl flex flex-col">
//       <div className="bg-black p-4 rounded-t-xl flex justify-between items-center">
//         <div className="flex items-center space-x-2">
//           <div className="w-3 h-3 rounded-full bg-green-400"></div>
//           <h2 className="text-white font-semibold">AI Stock Assistant</h2>
//         </div>
//         <button onClick={onClose} className="text-white hover:bg-white-200 p-2 rounded-full">
//           <FiX size={20} />
//         </button>
//       </div>

//       <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
//         <div className="space-y-4">
//           {messages.map((message, index) => (
//             <div key={index} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
//               <div className={`max-w-[80%] p-3 rounded-lg ${message.type === "user" ? "bg-blue-600 text-white rounded-br-none" : "bg-gray-200 text-gray-800 rounded-bl-none"}`}>
//                 {message.text}
//               </div>
//             </div>
//           ))}
//           {isTyping && (
//             <div className="flex justify-start">
//               <div className="bg-gray-200 p-3 rounded-lg">
//                 <div className="flex gap-1">
//                   <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></span>
//                   <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-200"></span>
//                   <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-400"></span>
//                 </div>
//               </div>
//             </div>
//           )}
//           <div ref={messagesEndRef} />
//         </div>
//       </div>

//       <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 bg-white rounded-b-xl">
//         <div className="flex space-x-2">
//           <input
//             type="text"
//             placeholder="Type your message..."
//             className="flex-1 p-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
//             value={newMessage}
//             onChange={handleInputChange}
//           />
//           <button type="submit" className="bg-black text-white p-2 rounded-full hover:bg-blue-700" disabled={isTyping}>
//             <FiSend size={20} />
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ChatWindow;



import React, { useState, useEffect, useRef } from "react";
import { FiSend, FiX } from "react-icons/fi";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyCdVdYxncXdiIFIywI6FNyUWAH3S2Jsmgg");
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

const ChatWindow = ({ onClose }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const welcomeMessageAdded = useRef(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (!welcomeMessageAdded.current) {
      receiveMessage("👋 Hello! I'm your AI Stock assistant. How can I help you today?");
      welcomeMessageAdded.current = true;
    }
  }, []);

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const fetchGeminiResponse = async (userMessage) => {
    try {
      const prompt = `You are a Expert Stock and financial assistant chatbot. Only provide information related to Stock and financial assistant. If the user asks something unrelated, respond with: 'I am a Stock and financial assistant chatbot. Please ask questions related to that.'\nUser: ${userMessage}`;
      const result = await model.generateContent(prompt);
      return result.response.text().replace(/\*/g, "");
    } catch (error) {
      console.error("Error fetching response from Gemini:", error);
      return "Sorry, something went wrong. Please try again later.";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newMessage.trim() === "") return;

    sendMessage(newMessage);
    setNewMessage("");
    setIsTyping(true);

    const botResponse = await fetchGeminiResponse(newMessage);
    setIsTyping(false);
    receiveMessage(botResponse);
  };

  const sendMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, { text: message, type: "user" }]);
  };

  const receiveMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, { text: message, type: "bot" }]);
  };

  return (
    <div className="fixed bottom-4 right-4 w-[350px] sm:w-[400px] h-[600px] bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 animate-slideUp">
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-4 rounded-t-xl flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
          <h2 className="text-white font-semibold">AI Stock Assistant</h2>
        </div>
        <button 
          onClick={onClose} 
          className="text-white hover:bg-white/20 p-2 rounded-full transition-colors"
          aria-label="Close chat"
        >
          <FiX size={20} />
        </button>
      </div>

      <div className="flex-1 p-4 overflow-y-auto bg-gray-50 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
              <div 
                className={`max-w-[80%] p-3 rounded-lg shadow-sm ${
                  message.type === "user" 
                    ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-br-none" 
                    : "bg-white text-gray-800 rounded-bl-none border border-gray-200"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-200">
                <div className="flex gap-1.5">
                  <span className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce delay-150"></span>
                  <span className="w-2 h-2 bg-purple-500 rounded-full animate-bounce delay-300"></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 bg-white rounded-b-xl">
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700 placeholder-gray-400"
            value={newMessage}
            onChange={handleInputChange}
          />
          <button 
            type="submit" 
            className={`bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-3 rounded-full hover:from-indigo-600 hover:to-purple-600 transition-all shadow-md ${isTyping ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg'}`} 
            disabled={isTyping}
            aria-label="Send message"
          >
            <FiSend size={20} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatWindow;
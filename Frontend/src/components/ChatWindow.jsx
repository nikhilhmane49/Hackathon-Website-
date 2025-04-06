import React, { useState, useEffect, useRef } from "react";
import { FiSend, FiX, FiCode, FiUsers, FiCpu, FiAward, FiTrendingUp, FiHelpCircle } from "react-icons/fi";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyCdVdYxncXdiIFIywI6FNyUWAH3S2Jsmgg");
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

const ChatWindow = ({ onClose }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showEmojis, setShowEmojis] = useState(false);
  const [quickSuggestions] = useState([
    { text: "What is a hackathon?", icon: <FiHelpCircle size={12} /> },
    { text: "How to organize a hackathon?", icon: <FiAward size={12} /> },
    { text: "Best judging criteria?", icon: <FiTrendingUp size={12} /> },
    { text: "Team formation tips", icon: <FiUsers size={12} /> }
  ]);
  const messagesEndRef = useRef(null);
  const welcomeMessageRef = useRef(false);
  
  // Animation states
  const [showWelcomeAnimation, setShowWelcomeAnimation] = useState(true);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Fixed welcome message logic
  useEffect(() => {
    // Only show welcome animation and message once when component mounts
    if (!welcomeMessageRef.current) {
      welcomeMessageRef.current = true;
      
      // Show welcome animation for 1 second
      setTimeout(() => {
        setShowWelcomeAnimation(false);
        receiveMessage("👋 Hello! I'm your Hackathon Platform Assistant. Need help organizing or participating in a hackathon? Ask me anything or try one of the quick suggestions below!");
      }, 1000);
    }
  }, []);

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleQuickSuggestion = (suggestion) => {
    sendMessage(suggestion);
    setIsTyping(true);
    
    fetchGeminiResponse(suggestion).then(response => {
      setIsTyping(false);
      receiveMessage(response);
    });
  };

  const fetchGeminiResponse = async (userMessage) => {
    try {
      const prompt = `You are an expert Hackathon Platform Assistant. Your platform allows organizers to create custom hackathons where participants can compete, engage, and interact with each other. 

Always interpret the user's question generously, even if it contains typos or is unclear. If they ask about "Hacakhon" or similar misspellings, assume they're asking about hackathons.

For basic questions like "What is a hackathon?", provide a helpful and informative answer rather than redirecting.

Provide helpful information about:
- Creating and managing hackathon events
- Setting up team formation and project submissions
- Judging criteria and evaluation processes
- Participant engagement features
- Virtual collaboration tools
- Community building features
- Technical implementation details
- Best practices for successful hackathons

Only redirect if the question is completely unrelated to hackathons, technology events, coding competitions, or software development.

Keep your responses engaging and visual by occasionally using relevant emojis like 🚀, 💻, 🏆, 👨‍💻, 👩‍💻, 🔧, 🛠️, 🧠, 💡, 🌟, ✨

User: ${userMessage}`;

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
    setShowEmojis(false);

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

  const formatMessage = (text) => {
    // Simple markdown-like formatting
    const formattedText = text
      .replace(/\*\*(.*?)\*\*/g, '<span class="font-bold">$1</span>')
      .replace(/\*(.*?)\*/g, '<span class="italic">$1</span>')
      .replace(/```([\s\S]*?)```/g, '<pre class="bg-gray-100 p-2 rounded my-2 text-sm overflow-x-auto">$1</pre>')
      .replace(/`(.*?)`/g, '<code class="bg-gray-100 px-1 rounded text-sm">$1</code>')
      .split('\n').join('<br/>');
    
    return <div dangerouslySetInnerHTML={{ __html: formattedText }} />;
  };

  const emojis = ["💻", "🚀", "🏆", "👨‍💻", "👩‍💻", "🔧", "🛠️", "🧠", "💡", "🌟"];
  
  const addEmoji = (emoji) => {
    setNewMessage(prev => prev + emoji);
    setShowEmojis(false);
  };

  return (
    <div className="fixed bottom-4 right-4 w-[350px] sm:w-[400px] h-[600px] bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 animate-slideUp z-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#3498db] to-[#2980b9] p-4 rounded-t-xl flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-white/10 animate-pulse rounded-full"></div>
            <FiCpu size={20} className="text-white relative z-10" />
          </div>
          <div>
            <h2 className="text-white font-semibold">Hackathon Assistant</h2>
            <div className="flex items-center text-xs text-white/80">
              <span className="w-2 h-2 rounded-full bg-green-400 mr-1.5 animate-pulse"></span>
              Active Now
            </div>
          </div>
        </div>
        <button 
          onClick={onClose} 
          className="text-white hover:bg-white/20 p-2 rounded-full transition-colors"
          aria-label="Close chat"
        >
          <FiX size={20} />
        </button>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 p-4 overflow-y-auto bg-gray-50 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
      {showWelcomeAnimation && (
          <div className="flex justify-center items-center h-full">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#3498db] flex items-center justify-center animate-pulse">
                <FiCpu size={32} className="text-white" />
              </div>
              <p className="text-gray-500">Initializing assistant...</p>
            </div>
          </div>
        )}
        
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"} animate-fadeIn`}>
              <div className="flex items-end gap-2 max-w-[85%]">
                {message.type === "bot" && (
                  <div className="w-8 h-8 rounded-full bg-[#3498db] flex items-center justify-center flex-shrink-0 shadow-md">
                    <FiCpu size={14} className="text-white" />
                  </div>
                )}
                <div 
                  className={`p-3 rounded-lg shadow-sm ${
                    message.type === "user" 
                      ? "bg-gradient-to-r from-[#3498db] to-[#2980b9] text-white rounded-br-none shadow-md" 
                      : "bg-white text-gray-800 rounded-bl-none border border-gray-200"
                  }`}
                >
                  {formatMessage(message.text)}
                </div>
                {message.type === "user" && (
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <FiUsers size={14} className="text-gray-600" />
                  </div>
                )}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start animate-fadeIn">
              <div className="flex items-end gap-2">
                <div className="w-8 h-8 rounded-full bg-[#3498db] flex items-center justify-center flex-shrink-0 shadow-md">
                  <FiCpu size={14} className="text-white" />
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 bg-[#3498db] rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-[#3498db] rounded-full animate-bounce delay-150"></span>
                    <span className="w-2 h-2 bg-[#3498db] rounded-full animate-bounce delay-300"></span>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Quick Suggestions */}
      {messages.length <= 2 && !isTyping && (
        <div className="px-4 py-3 bg-white border-t border-gray-100">
          <p className="text-xs text-gray-500 mb-2 font-medium">Popular questions:</p>
          <div className="flex flex-wrap gap-2">
            {quickSuggestions.map((suggestion, index) => (
              <button
                key={index}
                className="px-3 py-1.5 bg-gray-100 hover:bg-blue-50 hover:text-[#3498db] rounded-full text-sm text-gray-700 transition-colors flex items-center gap-1.5 border border-transparent hover:border-blue-100"
                onClick={() => handleQuickSuggestion(suggestion.text)}
              >
                {suggestion.icon}
                {suggestion.text}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input Area */}
      <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 bg-white rounded-b-xl relative">
        {showEmojis && (
          <div className="absolute bottom-16 right-4 bg-white rounded-lg shadow-lg border border-gray-200 p-2 animate-fadeIn">
            <div className="flex flex-wrap gap-2 max-w-[200px]">
              {emojis.map((emoji, index) => (
                <button
                  key={index}
                  type="button"
                  className="w-8 h-8 hover:bg-gray-100 rounded flex items-center justify-center"
                  onClick={() => addEmoji(emoji)}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>
        )}
        
        <div className="flex space-x-2">
          <button
            type="button"
            className="p-3 text-gray-500 hover:text-[#3498db] transition-colors"
            onClick={() => setShowEmojis(!showEmojis)}
          >
            😊
          </button>
          <input
            type="text"
            placeholder="Ask about hackathon features..."
            className="flex-1 p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#3498db] text-gray-700 placeholder-gray-400"
            value={newMessage}
            onChange={handleInputChange}
          />
          <button 
            type="submit" 
            className={`bg-[#3498db] text-white p-3 rounded-full hover:bg-[#2980b9] transition-all shadow-md ${isTyping ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg transform hover:scale-105'}`} 
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
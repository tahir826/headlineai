// components/Chat.tsx
import { useState } from 'react';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add user's message
    const newMessage: Message = { text: input, sender: 'user' };
    setMessages([...messages, newMessage]);

    // Clear input
    setInput('');

    // Mock AI response (Replace this with your actual AI API call)
    const aiResponse = await fetchAIResponse(input);
    setMessages((prevMessages) => [...prevMessages, { text: aiResponse, sender: 'bot' }]);
  };

  const fetchAIResponse = async (message: string) => {
    return new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve("This is a mock AI response to: " + message);
      }, 1000);
    });
  };

  return (
    <div className="max-w-lg mx-auto p-4 space-y-4 bg-black min-h-screen">
      <div className="bg-gray-900 p-4 rounded-md h-96 overflow-y-auto">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`p-3 my-2 max-w-xs rounded-md ${
              message.sender === 'user'
                ? 'bg-white text-black self-end'
                : 'bg-gray-700 text-white self-start'
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>

      <form onSubmit={sendMessage} className="flex space-x-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-grow p-2 bg-gray-800 text-white border border-gray-700 rounded-md"
        />
        <button
          type="submit"
          className="bg-white text-black p-2 rounded-md hover:bg-gray-200"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;

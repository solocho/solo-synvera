import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { MessageCircle, X, Send, Bot, User, Loader2, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, SERVICES, PORTFOLIO, SKILL_CATEGORIES } from '../constants';

interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'model',
      text: `Hi there! I'm Solomon's AI Assistant. Ask me anything about his skills, portfolio, or how he can help your business!`
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize Gemini
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const generateSystemPrompt = () => {
    const portfolioContext = PORTFOLIO.map(p => `- ${p.title} (${p.category}): ${p.description}`).join('\n');
    const servicesContext = SERVICES.map(s => `- ${s.title}: ${s.description}`).join('\n');
    const skillsContext = SKILL_CATEGORIES.map(s => `${s.title}: ${s.skills.join(', ')}`).join('\n');

    return `You are an AI Assistant for Solomon Chome Mumba's portfolio website. 
    Your tone should be professional, polite, enthusiastic, and concise.
    
    Here is the context about Solomon:
    Name: ${PERSONAL_INFO.name}
    Role: ${PERSONAL_INFO.role}
    Location: ${PERSONAL_INFO.location}
    Email: ${PERSONAL_INFO.email}
    Tagline: ${PERSONAL_INFO.tagline}

    Services Offered:
    ${servicesContext}

    Portfolio Highlights:
    ${portfolioContext}

    Skills:
    ${skillsContext}

    Instructions:
    1. Answer questions as if you are representing Solomon.
    2. If someone asks to hire him, direct them to the Contact page or suggest emailing ${PERSONAL_INFO.email}.
    3. Keep answers relatively short (under 3 paragraphs) unless asked for details.
    4. Do not make up facts not present in this context.
    5. If asked about something unrelated to VA work, politely steer the conversation back to Solomon's services.
    `;
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { id: Date.now().toString(), role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const systemInstruction = generateSystemPrompt();
      
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
          { role: 'user', parts: [{ text: `System Instruction: ${systemInstruction}\n\nUser Question: ${input}` }] }
        ]
      });

      const text = response.text || "I'm sorry, I couldn't process that request right now.";
      
      setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), role: 'model', text }]);
    } catch (error) {
      console.error("Error generating response:", error);
      setMessages(prev => [...prev, { 
        id: (Date.now() + 1).toString(), 
        role: 'model', 
        text: "I'm currently having trouble connecting to the server. Please try again later or contact Solomon directly via email." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 bg-navy-900 text-white rounded-full shadow-2xl hover:bg-gold-500 transition-all duration-300 transform hover:scale-110 ${isOpen ? 'hidden' : 'flex items-center justify-center'}`}
        aria-label="Open AI Chat"
      >
        <MessageCircle size={28} />
        <span className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-pulse"></span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-full max-w-[350px] sm:max-w-[400px] h-[500px] bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 flex flex-col overflow-hidden animate-[fadeIn_0.3s_ease-out]">
          
          {/* Header */}
          <div className="bg-navy-900 p-4 flex justify-between items-center text-white">
            <div className="flex items-center space-x-2">
              <div className="p-1.5 bg-gold-500 rounded-full">
                <Sparkles size={16} className="text-navy-900" />
              </div>
              <div>
                <h3 className="font-bold text-sm">Solomon's Assistant</h3>
                <p className="text-[10px] text-slate-300 flex items-center">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1"></span> Online
                </p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-slate-900">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'} items-end gap-2`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-navy-100 text-navy-900' : 'bg-navy-900 text-gold-500'}`}>
                    {msg.role === 'user' ? <User size={14} /> : <Bot size={16} />}
                  </div>
                  <div className={`p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-navy-900 text-white rounded-br-none' 
                      : 'bg-white dark:bg-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-bl-none shadow-sm'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex max-w-[85%] flex-row items-end gap-2">
                  <div className="w-8 h-8 rounded-full bg-navy-900 text-gold-500 flex items-center justify-center flex-shrink-0">
                    <Bot size={16} />
                  </div>
                  <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-3 rounded-2xl rounded-bl-none shadow-sm">
                    <Loader2 size={16} className="animate-spin text-slate-400" />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-900 rounded-full px-4 py-2 border border-transparent focus-within:border-gold-500 transition-all">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask me anything..."
                className="flex-1 bg-transparent outline-none text-sm text-slate-800 dark:text-slate-200 placeholder-slate-400"
                disabled={isLoading}
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="text-navy-900 dark:text-gold-500 disabled:opacity-50 hover:scale-110 transition-transform"
              >
                <Send size={18} />
              </button>
            </div>
            <div className="text-center mt-2">
              <p className="text-[10px] text-slate-400">Powered by Google Gemini</p>
            </div>
          </div>

        </div>
      )}
    </>
  );
};

export default ChatBot;
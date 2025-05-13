import React, { useState, useRef, useEffect } from "react";
import AI_incon from './images/ai_image.jpg';
import { getLangchainResponse } from "./langchain.jsx";

const ChatWidget = () => {
  const [userMessage, setUserMessage] = useState("");
  const [responses, setResponses] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  const predefinedResponses = {
    "How do I sell my license?": "To sell your license, upload it to SoftSell and we'll give you a quote.",
    "How fast is the process?": "You'll get paid within a few days.",
    "What types of licenses can I sell?": "We accept software licenses including productivity tools, antivirus, design software, and more.",
    "Is there any fee involved?": "There are no upfront fees. We only deduct a small commission after the sale.",
    "How do I get paid?": "Payments are made via bank transfer or PayPal, whichever you prefer.",
    "Is it legal to resell software licenses?": "Yes, reselling licenses is legal as long as they are original and transferable.",
    "Can I track my license status?": "Yes, once submitted, you can track the status on your dashboard in real-time.",
  };

  const handleSendMessage = async () => {
    if (userMessage.trim()) {
      setResponses((prev) => [...prev, { type: "user", message: userMessage }]);

      if (predefinedResponses[userMessage]) {
        setResponses((prev) => [
          ...prev,
          { type: "bot", message: predefinedResponses[userMessage] },
        ]);
      } else {
        await getAIResponse(userMessage);
      }

      setUserMessage("");
    }
  };

  const getAIResponse = async (message) => {
    try {
      setLoading(true);
       setResponses((prev) => [
        ...prev,
        { type: "bot", message: "Sorry, something went wrong. Please try again." },
      ]);
      // const aiMessage = await getLangchainResponse(message);
      // setResponses((prev) => [...prev, { type: "bot", message: aiMessage }]);
    } catch (error) {
      console.error("Langchain error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [responses]);

  return (
    <>
      {!isOpen && (
        <button
          className="fixed bottom-5 right-5 bg-white p-4 rounded-full shadow-lg hover:brightness-90 transition z-50"
          onClick={() => setIsOpen(true)}
        >
          <img
            src={AI_incon}
            alt="AI Icon"
            className="w-14 h-14 rounded-full shadow-md transition-transform duration-500 hover:scale-110"
          />
        </button>
      )}

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/40">
          <div className="bg-[#1E1E1E] rounded-xl shadow-xl w-full max-w-sm h-[500px] flex flex-col p-3 border border-white">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold text-white">Ask SoftSell AI</h2>
              <button
                className="text-white hover:text-red-500 text-xl"
                onClick={() => setIsOpen(false)}
              >
                ×
              </button>
            </div>

            <div className="mb-2">
              <textarea
                className="w-full border border-white bg-transparent rounded-md p-2 text-sm text-white resize-none focus:outline-none focus:ring-2 focus:ring-white"
                rows="2"
                placeholder="Type your question..."
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
              />
              <button
                onClick={handleSendMessage}
                className="bg-white text-black px-3 py-2 mt-1 rounded-md w-full text-sm hover:bg-gray-300"
              >
                Send
              </button>
            </div>

            <div className="mb-2 flex flex-wrap gap-2 text-xs">
              {Object.keys(predefinedResponses).map((q, idx) => (
                <button
                  key={idx}
                  onClick={async () => {
                    setResponses((prev) => [...prev, { type: "user", message: q }]);

                    if (predefinedResponses[q]) {
                      setResponses((prev) => [
                        ...prev,
                        { type: "bot", message: predefinedResponses[q] },
                      ]);
                    } else {
                      await getAIResponse(q);
                    }
                  }}
                  className="bg-white text-black hover:bg-gray-300 px-2 py-1 rounded-md transition"
                >
                  {q}
                </button>
              ))}
            </div>

            <div className="flex-1 overflow-y-auto bg-[#2A2A2A] p-2 border border-white rounded mb-2 text-white">
              {responses.map((res, idx) => (
                <div
                  key={idx}
                  className={`mb-2 flex ${res.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  {res.type === "bot" && (
                    <div className="w-6 h-6 bg-white text-black text-xs rounded-full flex items-center justify-center mr-2">
                      🤖
                    </div>
                  )}
                  <div
                    className={`p-2 rounded-md text-sm max-w-[75%] ${
                      res.type === "user"
                        ? "bg-white text-black text-right"
                        : "bg-gray-100 text-black text-left"
                    }`}
                  >
                    {res.message}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start items-center mb-2">
                  <div className="w-6 h-6 bg-white text-black text-xs rounded-full flex items-center justify-center mr-2">
                    🤖
                  </div>
                  <div className="bg-gray-100 text-left p-2 rounded-md text-sm text-black">
                    Thinking...
                  </div>
                </div>
              )}

              <div ref={chatEndRef} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;

"use client";
import { Card } from "antd";
import { MessageCircle, Send } from "lucide-react";

export default function AIChatFrame() {
  return (
    <Card 
      title={
        <div className="flex items-center gap-2">
          <MessageCircle size={16} />
          AI Assistant
        </div>
      }
      className="h-80"
      styles={{ body: { padding: '16px', height: 'calc(100% - 57px)' } }}
    >
      <div className="flex flex-col h-full">
        <div className="flex-1 bg-gray-50 rounded p-3 mb-3 text-sm text-gray-500">
          <div className="mb-2">
            <div className="bg-blue-100 text-blue-800 p-2 rounded mb-2 text-xs">
              AI: How can I help you with your tickets today?
            </div>
          </div>
          <div className="text-xs text-gray-400">
            Chat with AI to get insights about your tickets...
          </div>
        </div>
        <div className="flex gap-2">
          <input 
            type="text" 
            placeholder="Ask me anything..."
            className="flex-1 px-3 py-1 border rounded text-sm"
            disabled
          />
          <button className="px-3 py-1 bg-blue-500 text-white rounded text-sm flex items-center gap-1" disabled>
            <Send size={12} />
          </button>
        </div>
      </div>
    </Card>
  );
}

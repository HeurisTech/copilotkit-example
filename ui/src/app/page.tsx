"use client";
import { CopilotPopup } from "@copilotkit/react-ui";

export default function YourApp() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-4xl mx-auto p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Customer Support Chatbot
          </h1>
          <p className="text-lg text-gray-600">
            Welcome to our AI-powered customer support assistant. Click the chat icon to get started!
          </p>
        </div>
      </div>
      <CopilotPopup
        instructions={
          "You are assisting the user as best as you can. Answer in the best way possible given the data you have."
        }
        defaultOpen={true}
        labels={{
          title: "Customer Support Assistant",
          initial: "How can I help you today?",
        }}
      />
    </div>
  );
}

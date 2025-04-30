"use client"; // Use client-side rendering for potential interactivity

import { InterviewPromptVars } from "./types";

import { getInterviewAgentInstructions } from "../prompts/interviewAgentPrompt";

import { useEffect, useState } from "react";

import React from "react";

export default function OverviewPage() {
  const [instructions, setShowInstructions] = useState(getInterviewAgentInstructions({
    userName: "John Doe", // Example variable
  }));

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Overview Page</h1>
      <p>This is the overview page content.</p>
      <div className="mt-4">
        <code className="block p-4 bg-gray-100 border border-gray-300 rounded text-gray-700">
          {instructions.split("\n").map((line, index) => (
            <div key={index} className="whitespace-pre-wrap">
              {line}
              <br />
            </div>
          ))}
        </code>
      </div>
    </div>
  );
}

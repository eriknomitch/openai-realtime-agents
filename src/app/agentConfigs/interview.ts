import { AgentConfig } from "@/app/types";
// Import the function instead of a static string
import { getInterviewAgentInstructions } from "../prompts/interviewAgentPrompt";

const interviewAgent: AgentConfig = {
  name: "interviewAgent",
  publicDescription:
    "Conducts a mock interview based on a user's resume and a job description.",
  // Call the function to get the default instructions string.
  // This satisfies the AgentConfig type which expects a string.
  // The actual dynamic generation will happen in App.tsx before sending the session.update event.
  instructions: getInterviewAgentInstructions(),
  tools: [], // No external tools needed for this basic flow
  toolLogic: {}, // No tool logic needed
};

export default interviewAgent;

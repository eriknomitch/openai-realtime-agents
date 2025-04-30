import { AllAgentConfigsType } from "@/app/types";
import frontDeskAuthentication from "./frontDeskAuthentication";
import customerServiceRetail from "./customerServiceRetail";
import simpleExample from "./simpleExample";
import interviewAgent from "./interview"; // Import the new agent

export const allAgentSets: AllAgentConfigsType = {
  frontDeskAuthentication,
  customerServiceRetail,
  simpleExample,
  interview: [interviewAgent], // Add the new agent set
};

export const defaultAgentSetKey = "simpleExample"; // You can change this to "interview" if desired

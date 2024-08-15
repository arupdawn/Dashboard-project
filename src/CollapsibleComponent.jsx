import React from "react";
import "./CollapsibleComponent.css";
import Accordian from "./Accordian";
import { samplejson } from "./Dummy";

const CollapsibleComponent = () => {
  const jsonData = samplejson;

  return (
    <div className="collapsible-container">
      {jsonData?.workflow_steps?.map((workflow) => (
        <Accordian workflowData={workflow} />
      ))}
    </div>
  );
};

export default CollapsibleComponent;

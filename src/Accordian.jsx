import React, { useEffect, useRef, useState } from "react";
import "./Accordian.css";

const Accordian = ({ workflowData }) => {
  const [isDatasetOpen, setIsDatasetOpen] = useState(false);
  const openCloseRef = useRef(null);

  const [dottedHeight, setDottedHeight] = useState(0);

  useEffect(() => {
    if (openCloseRef?.current?.clientHeight && dottedHeight === 0) {
      setDottedHeight(openCloseRef?.current?.clientHeight);
    }
  }, [openCloseRef?.current?.clientHeight]);

  const toggleDataset = () => setIsDatasetOpen(!isDatasetOpen);

  const contentData = { ...workflowData?.params_extra };

  return (
    <div className="accordian-item">
      <div className="accordian-open-close-section">
        <div className="open-close-icon">
          {isDatasetOpen ? <span>&#x2212;</span> : <span>&#x2b;</span>}
        </div>

        <div
          className="dotted-lines"
          style={{
            height: isDatasetOpen && `${dottedHeight}px`,
          }}
        ></div>
      </div>

      <div className="collapsible-item">
        <div
          className={
            isDatasetOpen ? "collapsible-header" : "collapsible-header-open"
          }
          onClick={toggleDataset}
        >
          <span>{workflowData?.name_title}</span>
        </div>
        <div
          className="collapsible-content"
          style={{ display: isDatasetOpen ? "block" : "none" }}
          ref={openCloseRef}
        >
          {Object.keys(contentData).map((keyVal, index) => (
            <div key={index}>
              {keyVal} : {String(contentData[`${keyVal}`])}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordian;

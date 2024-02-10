import { useState } from "react";
import accordionData from "./data.js";
import "./style.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);
  const [multiSelected, setMultiSelected] = useState([]);

  function handleSingleSelection(currentId) {
    setSelected((prev) => (prev === currentId ? null : currentId));
  }

  function handleMultipleSelection(currentId) {
    let copyMultiSelection = [...multiSelected];

    const isCurrentIdPresent = copyMultiSelection.indexOf(currentId);

    if (isCurrentIdPresent === -1) {
      copyMultiSelection.push(currentId);
    } else {
      copyMultiSelection.splice(isCurrentIdPresent, 1);
    }

    setMultiSelected(copyMultiSelection);
  }

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultipleSelection((prev) => !prev)}>
        Enable Multi Selection
      </button>
      {enableMultipleSelection ? (
        <div id="multiselectionstatus">Multi Selection is: true</div>
      ) : (
        <div id="multiselectionstatus">Multi Selection is: false</div>
      )}
      <div className="accordian">
        {accordionData && accordionData.length > 0 ? (
          accordionData.map((data) => (
            <div className="item" key={data.id}>
              <div
                onClick={() =>
                  enableMultipleSelection
                    ? handleMultipleSelection(data.id)
                    : handleSingleSelection(data.id)
                }
                className="title"
              >
                <h3>{data.question}</h3>
                <span>+</span>
              </div>
              {enableMultipleSelection
                ? multiSelected.indexOf(data.id) !== -1 && (
                    <div className="content">{data.answer}</div>
                  )
                : selected === data.id && (
                    <div className="content">{data.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <div>No Data Found!</div>
        )}
      </div>
    </div>
  );
}

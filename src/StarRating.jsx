import "./index.scss";
import React, { useState } from "react";
import { Select } from "@chakra-ui/react";

/* eslint-disable no-unused-vars */

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
  marginTop: 50,
  marginLeft: 50,
};
const starContainerStyle = {
  display: "flex",
};

const textStyle = {
  lineHeight: "1",
  margin: 0,
};

export default function StarRating({ maxRating = 5 }) {
  const [rating, setRating] = useState(1);
  const [templateRating, setTemplateRating] = useState(0);
  function handleRating(rating) {
    setRating(rating);
  }

  return (
    <div>
      <div style={containerStyle}>
        <div style={starContainerStyle}>
          {Array.from({ length: maxRating }, (_, i) => (
            <Star
              key={i}
              onRate={() => handleRating(i + 1)}
              onHoverIn={() => setTemplateRating(i + 1)}
              onHoverOut={() => setTemplateRating(0)}
              full={templateRating ? templateRating >= i + 1 : rating >= i + 1}
            />
          ))}
        </div>
        <p style={textStyle}>{templateRating || rating || ""}</p>
      </div>
      <div className="translate-container">
        <div className="translate-header">
          <div className="header-change">
            <p className="change-into">Translate into : </p>
            <div className="change-language">
              <Select
                placeholder="ENG"
                className="language-select"
                style={{ color: "red" }}
              >
                <option style={{ marginBottom: 20 }} value="option1">
                  ENG
                </option>
                <option value="option2">VN</option>
                <option value="option3">CN</option>
              </Select>
            </div>
          </div>
        </div>

        {/* <div className="translate-header">
          <p className="header-into">Translate into : </p>
          <div className="header-language">
            <select className="language-select">
              <option value="input">ENG</option>
              <option value="description">VN</option>
              <option value="packed">CN</option>
            </select>
          </div>
        </div> */}
        <div className="translate-body"></div>
        <div className="translate-footer"></div>
      </div>
    </div>
  );
}

const starStyle = {
  width: 48,
  height: 48,
  display: "block",
  cursor: "pointer",
};

function Star({ onRate, full, onHoverIn, onHoverOut }) {
  return (
    <span
      role="button"
      style={starStyle}
      onClick={onRate}
      onMouseEnter={onHoverIn}
      //   onMouseEnter={() => console.log("enter")}
      //   onMouseLeave={onHoverOut}
      onMouseLeave={() => console.log("leave")}
    >
      {full ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="#000"
          stroke="#000"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#000"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="{2}"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      )}
    </span>
  );
}

/*
SPACING SYSTEM (px)
2 / 4 / 8 / 12 / 16 / 24 / 32 / 40 / 48 / 64 / 80 / 96 / 128

FONT SIZE SYSTEM (px)
10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 /52 / 62 / 74 / 86 / 98
*/

/*
FULL STAR

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 20 20"
  fill="#000"
  stroke="#000"
>
  <path
    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
  />
</svg>


EMPTY STAR

<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke="#000"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="{2}"
    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
  />
</svg>

*/

import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNightBlue } from "react-syntax-highlighter/dist/cjs/styles/hljs";

export default function High({ code }) {
  const codeString = `${code}`;
  return (
    <div>
      {" "}
      <SyntaxHighlighter
        language="javascript"
        showLineNumbers
        wrapLines
        style={tomorrowNightBlue}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}

import React from "react";

const defaultContext: { markdownText: string, setMarkdownText: React.Dispatch<React.SetStateAction<string>> } = {
  markdownText: '',
  setMarkdownText: () => { }
}

export default React.createContext(defaultContext)
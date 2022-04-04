import React, { useState } from "react";
import styled from "styled-components";
import MarkedInput from "./components/markedInput";
import Result from "./components/result";
import EditorContext from "./editorContext";

const App = () => {
    const [markdownText, setMarkdownText] = useState<string>("");

    const contextValue = {
        markdownText,
        setMarkdownText,
    };

    return (
        <EditorContext.Provider value={contextValue}>
            <AppContainer>
                <Title>Markdown Editor</Title>
                <EditorContainter>
                    <MarkedInput />
                    <Result />
                </EditorContainter>
            </AppContainer>
        </EditorContext.Provider>
    );
};

const AppContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const EditorContainter = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`;

const Title = styled.div`
    font-size: 25px;
    font-weight: 700;
    font-family: "Lato", sans-serif;
    margin-bottom: 1em;
`;
export default App;

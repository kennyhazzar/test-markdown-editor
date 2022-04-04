import React, { useContext } from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import editorContext from "../editorContext";

const Result = () => {
    const { markdownText } = useContext(editorContext);

    return (
        <Container>
            <Title>Converted Text</Title>
            <ResultArea>
                <ReactMarkdown>{markdownText}</ReactMarkdown>
            </ResultArea>
        </Container>
    );
};

const Container = styled.div`
    width: 50%;
    height: 100%;
    padding: 13px;
    border-left: 0.75px solid rgba(15, 15, 15, 0.4);
    font-family: "Lato", sans-serif;
`;

const Title = styled.div`
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 1em;
    padding: 8px 0;
    border-bottom: 1px solid rgba(15, 15, 15, 0.3);
`;

const ResultArea = styled.div`
    width: 100%;
    height: 100%;
    bottom: none;
    font-size: 17px;
`;

export default Result;

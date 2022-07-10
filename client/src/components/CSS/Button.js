import styled from "styled-components";

export default function Button({ content }) {
  return <StyledButton>{content}</StyledButton>;
}

const StyledButton = styled.button`
    font-family: "Cinzel Decorative";
    margin: 10px;
    background-color: #8fa189;
    height: 40px;
    line-height: 40px;
    padding: 0 20px;
    font-weight: bold;
    border: solid 5px #000;
    border-width: 0 4px 5px 0;
    border-radius: 5px;
    border-color: transparent #6c7b67 #7f8f79 transparent;
    background-clip: padding-box;
    text-shadow: 2px 2px 3px rgb(255 255 255 / 50%);
    color: black;
    width: fit-content;
    &:hover {
        border-width: 0 2px 3px 0;
        margin-right: 4px;
        position: relative;
        left: 2px;
        top: 3px;
    }
`;
import React from "react";
import styled from "styled-components";

interface Props {
  onClick: () => void;
  value: string | null;
}

const Square: React.FC<Props> = (props) => {
  return <Button onClick={props.onClick}>{props.value}</Button>;
};

const Button = styled.button`
  background: #fff;
  border: 1px solid #999;
  float: left;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  height: 34px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 34px;
  :hover {
    background-color: skyblue;
  }
`;

export default Square;

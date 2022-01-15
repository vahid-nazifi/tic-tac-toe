import React from "react";
import Square from "../square";
import styled from "styled-components";

interface Props {
  onClick: (i: number) => void;
  squares: any[];
}

const Board: React.FC<Props> = (props) => {
  function renderSquare(i: number) {
    return <Square value={props.squares[i]} onClick={() => props.onClick(i)} />;
  }
  return (
    <div>
      <Div>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </Div>
      <Div>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </Div>
      <Div>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </Div>
    </div>
  );
};

const Div = styled.div`
  display: table;
`;

export default Board;

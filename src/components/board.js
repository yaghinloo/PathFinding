import React from "react"
import Cell from "./cell";

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drawing: false,
        };
        this.lastVisited = [-1, -1];
    }

    handle = (col, row) => {
        if (this.state.drawing
            && this.lastVisited[0] === col
            && this.lastVisited[1] === row) return;
        this.lastVisited = [col, row];
        this.props.handleBoardChange(col, row, "select")
    }
    handleDraw = (isDrawing = true) => {
        this.setState({drawing: isDrawing})
    }

    render() {
        return (
            <div onMouseDown={() => this.handleDraw(true)}
                 onMouseUp={() => {
                     this.handleDraw(false);
                     this.lastVisited = [-1, -1];
                 }}
                 className={"board"}>
                {this.props.nodes.map((e, row) => <div key={row} className={"row"}>
                    {
                        e.map((r, col) => <Cell
                            key={col + (this.props.size * row)}
                            row={row}
                            col={col}
                            value={this.props.nodes[col][row]}
                            handle={this.handle}
                            drawing={this.state.drawing}
                        />)
                    }
                </div>)
                }
            </div>)
    }
}

export default Board

import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Board from "./components/board";
import Controlbar from "./components/controlbar";
import {
    states,
    cv,
    rv,
    cvDiag,
    rvDiag,
    defaultSpeed,
    defaultStartNode,
    defaultTargetNode
} from "./js/constants";
import Graph from "./js/graph";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.initialState = (size = this.props.size) => ({
            nodes: Array.from(Array(size), () => Array(size).fill(0)),
            size,
            speed: defaultSpeed,
            startNode: defaultStartNode,
            targetNode: defaultTargetNode,
            msg: "Draw walls in the grid then hit the button to find the shortest path ",
            isOrthogonal: true
        });
        this.state = {
            ...this.initialState()
        };

        this.graph = new Graph()
    }

    componentDidMount() {
        this.setBoard(this.state.size)
    }


    setBoard = (size, isOrthogonal = true) => {

        this.setState(() => ({
            ...this.initialState(Number(size)),
            isOrthogonal
        }));
        this.setStartEnd();
    };

    setStartEnd() {
        // TODO : improve this logic
        this.state.targetNode[1] = this.state.size - 3;
        const [sr, sc] = this.state.startNode;
        const [tr, tc] = this.state.targetNode;

        this.setState((prevState) => {
            const newNodes = [...prevState.nodes];
            newNodes[sc][sr] = states.startNode;
            newNodes[tc][tr] = states.targetNode;
            return {nodes: newNodes}
        })
    }

    setupNodes() {
        let idx = 0;
        for (let row = 0; row < this.state.size; row++) {
            for (let col = 0; col < this.state.size; col++) {
                this.graph.addNode(idx);
                idx++;
            }
        }
        idx = 0;
        for (let row = 0; row < this.state.size; row++) {
            for (let col = 0; col < this.state.size; col++) {
                this.getNeighbours(col, row).forEach(n => this.graph.addEdges(idx, n, 1));
                idx++;
            }
        }
    }

    getNeighbours = (c, r) => {
        const nei = [];
        //TODO : ADD support for diagonal paths
        // const [cVector, rVector] = this.state.isOrthogonal ? [cv, rv] : [cvDiag, rvDiag];
        const [cVector, rVector] = [cv, rv];

        if (this.state.nodes[c][r] === states.block) return [];

        for (let i = 0; i < rVector.length; i++) {
            let col = c + cVector[i];
            let row = r + rVector[i];
            if (col >= 0 && row >= 0
                && col < this.state.size
                && row < this.state.size) {
                if (this.state.nodes[col][row] === states["free"]) nei.push(row * this.state.size + col)
            }
        }
        return nei;
    };

    handleBoardChange = (row, col, action = "select") => {
        this.setState((prevState) => {
            const newNodes = [...prevState.nodes];
            const nodeState = newNodes[row][col];

            if (action === "select") {
                if (nodeState === states.block) {
                    newNodes[row][col] = states.free
                }
                if (nodeState === states.free) {
                    newNodes[row][col] = states.block
                }
            } else {
                if (nodeState !== states.startNode
                    && nodeState !== states.targetNode) newNodes[row][col] = states[action]
            }
            return {nodes: newNodes}
        })
    };

    showPath = (path) => {
        const timer = this.state.speed;
        let idx = 0;
        if (!path || path === Number.POSITIVE_INFINITY) {
            this.setState({msg: " there is no path between nodes "});
            return
        } else {
            this.setState({msg: `there are ${path[1]} steps to get to the target node`});
        }
        while (idx < path[0].length) {
            ((idx) => {
                setTimeout(() => {
                    let row = path[0][idx] % this.state.size;
                    let col = Math.floor(path[0][idx] / this.state.size);
                    this.handleBoardChange(row, col, "path");
                }, timer * idx)
            })(idx);
            idx++;
        }
    };


    solve = () => {
        this.graph.reset();
        this.setupNodes();
        const [sr, sc] = this.state.startNode;
        const [tr, tc] = this.state.targetNode;
        const shortestPath = this.graph.ShortestPath(
            sr * this.state.size + sc,
            tr * this.state.size + tc,
            () => {

            });
        this.showPath(shortestPath)

    };

    render() {
        return (
            <div className="App">
                <h1>Shortest Path on Graph</h1>
                <h3>By: Hadi Yaghinloo</h3>
                <Controlbar updateBoard={this.setBoard}/>
                <p>{this.state.msg}</p>
                <button id={"solve"} onClick={this.solve}> Find The Shortest Path</button>

                <button onClick={
                    () => {
                        window.location.reload()
                    }
                }>Reload
                </button>
                <Board handleBoardChange={this.handleBoardChange} {...this.state}/>

            </div>
        );
    }

}

export default App;

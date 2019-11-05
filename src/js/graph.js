class Graph {
    constructor() {
        this.nodes = []
        this.adjucList = {}
    }
    reset() {
        this.nodes = []
        this.adjucList = {}
    }

    addNode(node) {
        this.nodes.push(node)
        this.adjucList[node] = [];
    }

    addEdges(n1, n2, weight) {
        if ((this.adjucList[n1]).every(elm => elm.val !== n2)) this.adjucList[n1].push({val: n2, weight});
        if ((this.adjucList[n2]).every(elm => elm.val !== n1)) this.adjucList[n2].push({val: n1, weight});
    }

    DFS(startNode, targetNode) {
        const stack = [];
        const visited = {};
        stack.push(startNode);
        while (stack.length) {
            let node = stack.pop();
            if (visited[node]) continue;
            if (node === targetNode) {
                return true
            }

            this.adjucList[node].forEach((elm) => {
                if (!visited[elm.val]) stack.push(elm.val)
            });
            visited[node] = true;

        }
        return false
    }

    BFS(startNode, targetNode) {
        const queue = [];
        const visited = {};
        queue.push(startNode);
        const distance = {[startNode]: 0};
        while (queue.length) {
            debugger
            let node = queue.shift();
            if (visited[node]) continue;
            if (node === targetNode) return distance[node];
            this.adjucList[node].forEach((elm) => {
                if (!visited[elm.val]) {
                    queue.push(elm.val);
                }
                if (!distance[elm.val] || distance[elm.val] > distance[node] + elm.weight) distance[elm.val] = distance[node] + elm.weight
            });
            visited[node] = true;
        }
        return null
    }

    ShortestPath(startNode, targetNode , stepMethod = null) {
        const queue = [];
        const visited = {};
        queue.push(startNode);

        const distance = {}
        for (let n in this.adjucList) {
            distance[n] = {parent: null, distance: Number.POSITIVE_INFINITY}
        }

        distance[startNode].distance = 0;
        while (queue.length) {

            let node = queue.shift();
            if (visited[node]) continue;
            // if (node === targetNode) return distance[node];
            this.adjucList[node].forEach((elm) => {
                if (!visited[elm.val]) {
                    queue.push(elm.val);
                }
                if (distance[elm.val].distance > distance[node].distance + elm.weight) distance[elm.val] = {
                    parent: node,
                    distance: distance[node].distance + elm.weight
                }
            });
            visited[node] = true;
            if(stepMethod) stepMethod(visited);
        }

        if (distance[targetNode].distance === Number.POSITIVE_INFINITY) return Number.POSITIVE_INFINITY;

        const path = [];
        let node = targetNode
        while (node) {
            path.push(node);
            node = distance[node].parent
        }
        return [path.reverse(), distance[targetNode].distance]
    }
}


export default Graph;


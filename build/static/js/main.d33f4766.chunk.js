(this.webpackJsonppathfinding=this.webpackJsonppathfinding||[]).push([[0],{11:function(t,e,a){t.exports=a(18)},16:function(t,e,a){},17:function(t,e,a){},18:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),i=a(10),o=a.n(i),s=(a(16),a(1)),c=a(8),u=a(4),l=a(2),h=a(3),d=a(6),f=a(5),v=a(7),p=(a(17),{free:0,block:1,visited:2,path:3,startNode:4,targetNode:5}),g=[0,1,0,-1],b=[-1,0,1,0],j=200,m=[10,3],O=[10,17],w=function(t){return r.a.createElement("div",{"data-col":t.col,"data-row":t.row,onClick:function(){t.handle(t.col,t.row)},onMouseMove:function(){t.drawing&&t.handle(t.col,t.row)},className:" cell "+Object.keys(p)[t.value]},t.children)},N=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(d.a)(this,Object(f.a)(e).call(this,t))).handle=function(t,e){a.state.drawing&&a.lastVisited[0]===t&&a.lastVisited[1]===e||(a.lastVisited=[t,e],a.props.handleBoardChange(t,e,"select"))},a.handleDraw=function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];a.setState({drawing:t})},a.state={drawing:!1},a.lastVisited=[-1,-1],a}return Object(v.a)(e,t),Object(h.a)(e,[{key:"render",value:function(){var t=this;return r.a.createElement("div",{onMouseDown:function(){return t.handleDraw(!0)},onMouseUp:function(){t.handleDraw(!1),t.lastVisited=[-1,-1]},className:"board"},this.props.nodes.map((function(e,a){return r.a.createElement("div",{key:a,className:"row"},e.map((function(e,n){return r.a.createElement(w,{key:n+t.props.size*a,row:a,col:n,value:t.props.nodes[n][a],handle:t.handle,drawing:t.state.drawing})})))})))}}]),e}(r.a.Component),y=function(t){var e=Object(n.useState)(35),a=Object(s.a)(e,2),i=a[0],o=a[1],c=Object(n.useState)(!0),u=Object(s.a)(c,2),l=u[0];u[1];return r.a.createElement("div",null,r.a.createElement("label",null,"Board Size "),r.a.createElement("input",{id:"size",value:i,onChange:function(t){o(t.target.value)}}),r.a.createElement("button",{onClick:function(){return t.updateBoard(Number(i),l)}}," Update Settings"))},E=function(){function t(){Object(l.a)(this,t),this.nodes=[],this.adjucList={}}return Object(h.a)(t,[{key:"reset",value:function(){this.nodes=[],this.adjucList={}}},{key:"addNode",value:function(t){this.nodes.push(t),this.adjucList[t]=[]}},{key:"addEdges",value:function(t,e,a){this.adjucList[t].every((function(t){return t.val!==e}))&&this.adjucList[t].push({val:e,weight:a}),this.adjucList[e].every((function(e){return e.val!==t}))&&this.adjucList[e].push({val:t,weight:a})}},{key:"DFS",value:function(t,e){var a=[],n={};for(a.push(t);a.length;){var r=a.pop();if(!n[r]){if(r===e)return!0;this.adjucList[r].forEach((function(t){n[t.val]||a.push(t.val)})),n[r]=!0}}return!1}},{key:"BFS",value:function(t,e){var a=this,n=[],r={};n.push(t);for(var i=Object(u.a)({},t,0),o=function(){var t=n.shift();return r[t]?"continue":t===e?{v:i[t]}:(a.adjucList[t].forEach((function(e){r[e.val]||n.push(e.val),(!i[e.val]||i[e.val]>i[t]+e.weight)&&(i[e.val]=i[t]+e.weight)})),void(r[t]=!0))};n.length;){var s=o();switch(s){case"continue":continue;default:if("object"===typeof s)return s.v}}return null}},{key:"ShortestPath",value:function(t,e){var a=this,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=[],i={};r.push(t);var o={};for(var s in this.adjucList)o[s]={parent:null,distance:Number.POSITIVE_INFINITY};o[t].distance=0;for(var c=function(){var t=r.shift();if(i[t])return"continue";a.adjucList[t].forEach((function(e){i[e.val]||r.push(e.val),o[e.val].distance>o[t].distance+e.weight&&(o[e.val]={parent:t,distance:o[t].distance+e.weight})})),i[t]=!0,n&&n(i)};r.length;)c();if(o[e].distance===Number.POSITIVE_INFINITY)return Number.POSITIVE_INFINITY;for(var u=[],l=e;l;)u.push(l),l=o[l].parent;return[u.reverse(),o[e].distance]}}]),t}();function k(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function S(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?k(a,!0).forEach((function(e){Object(u.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):k(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var I=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(d.a)(this,Object(f.a)(e).call(this,t))).setBoard=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];a.setState((function(){return S({},a.initialState(Number(t)),{isOrthogonal:e})})),a.setStartEnd()},a.getNeighbours=function(t,e){var n=[],r=b,i=g;if(a.state.nodes[t][e]===p.block)return[];for(var o=0;o<i.length;o++){var s=t+r[o],c=e+i[o];s>=0&&c>=0&&s<a.state.size&&c<a.state.size&&a.state.nodes[s][c]===p.free&&n.push(c*a.state.size+s)}return n},a.handleBoardChange=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"select";a.setState((function(a){var r=Object(c.a)(a.nodes),i=r[t][e];return"select"===n?(i===p.block&&(r[t][e]=p.free),i===p.free&&(r[t][e]=p.block)):i!==p.startNode&&i!==p.targetNode&&(r[t][e]=p[n]),{nodes:r}}))},a.showPath=function(t){var e=a.state.speed,n=0;if(t&&t!==Number.POSITIVE_INFINITY)for(a.setState({msg:"there are ".concat(t[1]," steps to get to the target node")});n<t[0].length;)!function(n){setTimeout((function(){var e=t[0][n]%a.state.size,r=Math.floor(t[0][n]/a.state.size);a.handleBoardChange(e,r,"path")}),e*n)}(n),n++;else a.setState({msg:" there is no path between nodes "})},a.solve=function(){a.graph.reset(),a.setupNodes();var t=Object(s.a)(a.state.startNode,2),e=t[0],n=t[1],r=Object(s.a)(a.state.targetNode,2),i=r[0],o=r[1],c=a.graph.ShortestPath(e*a.state.size+n,i*a.state.size+o,(function(){}));a.showPath(c)},a.initialState=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.props.size;return{nodes:Array.from(Array(t),(function(){return Array(t).fill(0)})),size:t,speed:j,startNode:m,targetNode:O,msg:"Draw walls in the grid then hit the button to find the shortest path ",isOrthogonal:!0}},a.state=S({},a.initialState()),a.graph=new E,a}return Object(v.a)(e,t),Object(h.a)(e,[{key:"componentDidMount",value:function(){this.setBoard(this.state.size)}},{key:"setStartEnd",value:function(){this.state.targetNode[1]=this.state.size-3;var t=Object(s.a)(this.state.startNode,2),e=t[0],a=t[1],n=Object(s.a)(this.state.targetNode,2),r=n[0],i=n[1];this.setState((function(t){var n=Object(c.a)(t.nodes);return n[a][e]=p.startNode,n[i][r]=p.targetNode,{nodes:n}}))}},{key:"setupNodes",value:function(){for(var t=this,e=0,a=0;a<this.state.size;a++)for(var n=0;n<this.state.size;n++)this.graph.addNode(e),e++;e=0;for(var r=0;r<this.state.size;r++)for(var i=0;i<this.state.size;i++)this.getNeighbours(i,r).forEach((function(a){return t.graph.addEdges(e,a,1)})),e++}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Shortest Path on Graph"),r.a.createElement("h3",null,"By: Hadi Yaghinloo"),r.a.createElement(y,{updateBoard:this.setBoard}),r.a.createElement("p",null,this.state.msg),r.a.createElement("button",{id:"solve",onClick:this.solve}," Find The Shortest Path"),r.a.createElement("button",{onClick:function(){window.location.reload()}},"Reload"),r.a.createElement(N,Object.assign({handleBoardChange:this.handleBoardChange},this.state)))}}]),e}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(I,{size:35}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[11,1,2]]]);
//# sourceMappingURL=main.d33f4766.chunk.js.map
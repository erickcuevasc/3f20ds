//RemoveEdges
//Erick Cuevas Ceballos 3°F
function Graph(v) {
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    for (var i = 0; i < this.vertices; ++i) {
    this.adj[i] = [];
    this.adj[i].pop("");
    }
    this.addEdge = addEdge;
    this.toString = toString;
    }
    function RemEdge(v,w){
        this.adj[v].pop(w);
        this.adj[w].pop(v);
        this.edges--;
    }
    function remEdge(v,w) {
        this.adj[v].push(w);
        this.adj[w].push(v);
        this.edges++;
        }
    function showGraph() {
        for (var i = 0; i < this.vertices; ++i) {
        putstr(i + " -> ");
        for (var j = 0; j < this.vertices; ++j) {
        if (this.adj[i][j] != undefined)
        putstr(this.adj[i][j] + ' ');
    }
        print()
    }
}
g = new Graph(5);
g.remEdge(0,1);
g.remEdge(0,2);
g.remEdge(1,3);
g.remEdge(2,4);
console.log(g);
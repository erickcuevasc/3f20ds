//Size
//Erick Cuevas Ceballos 3°F
function Graph(v) {
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    for (var i = 0; i < this.vertices; ++i) {
    this.adj[i] = [];
    this.adj[i].push("");
    }
    this.addEdge = addEdge;
    this.toString = toString;
    }
    function addEdge(v,w) {
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
function dfs(v) {
    this.marked[v] = true;
    if (this.adj[v] != undefined) {
    print("Visited vertex: " + v);
    }
    for  (var w in this.adj[v]) {
    if (!this.marked[w]) {
    this.dfs(w);
    }
    }
    }
g = new Graph(5);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,3);
g.addEdge(2,4);
console.log(g);
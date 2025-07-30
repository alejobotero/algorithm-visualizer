export function buildBinaryTree() {
  const container = document.getElementById("visualization-container");

  const nodes = new vis.DataSet([
    { id: 1, label: "10" },
    { id: 2, label: "5" },
    { id: 3, label: "15" },
    { id: 4, label: "3" },
    { id: 5, label: "7" },
    { id: 6, label: "12" },
    { id: 7, label: "18" }
  ]);

  const edges = new vis.DataSet([
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 2, to: 4 },
    { from: 2, to: 5 },
    { from: 3, to: 6 },
    { from: 3, to: 7 }
  ]);

  const data = { nodes, edges };

  const options = {
    layout: {
      hierarchical: {
        direction: "UD",
        sortMethod: "directed"
      }
    },
    nodes: {
      shape: "circle",
      font: { color: "white" },
      color: {
        background: "#0074D9",
        border: "#001f3f",
        highlight: { background: "#FF4136", border: "#85144b" }
      }
    },
    edges: {
      arrows: { to: { enabled: false } }
    }
  };

  new vis.Network(container, data, options);
}

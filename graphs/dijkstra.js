export function dijkstra() {
  const container = document.getElementById('visualization-container');
  container.innerHTML = ''; // Clear previous content

  const nodes = new vis.DataSet([
    { id: 1, label: 'A' },
    { id: 2, label: 'B' },
    { id: 3, label: 'C' },
    { id: 4, label: 'D' },
    { id: 5, label: 'E' },
    { id: 6, label: 'F' }
  ]);

  const edges = new vis.DataSet([
    { from: 1, to: 2, label: '4' },   // A-B
    { from: 1, to: 3, label: '2' },   // A-C
    { from: 2, to: 3, label: '1' },   // B-C
    { from: 2, to: 4, label: '5' },   // B-D
    { from: 3, to: 4, label: '8' },   // C-D
    { from: 3, to: 5, label: '10' },  // C-E
    { from: 4, to: 5, label: '2' },   // D-E
    { from: 4, to: 6, label: '6' },   // D-F
    { from: 5, to: 6, label: '3' }    // E-F
  ]);

  const data = { nodes, edges };
  const options = {
    edges: {
      arrows: 'to',
      font: {
        align: 'middle'
      }
    },
    physics: {
      enabled: true,
      stabilization: false
    },
    layout: {
      improvedLayout: true
    }
  };

  new vis.Network(container, data, options);
}
document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('graph');
    const ctx = canvas.getContext('2d');
  
    canvas.width = 600;
    canvas.height = 100;
  
    let graphData = [100]; 
  
    function drawGraph() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      ctx.strokeStyle = '#007bff';
      ctx.lineWidth = 2;
  
      const spacingX = canvas.width / (graphData.length - 1);
      const spacingY = canvas.height / 100;
  
      ctx.beginPath();
      ctx.moveTo(0, canvas.height - graphData[0] * spacingY);
  
      for (let i = 1; i < graphData.length; i++) {
        ctx.lineTo(i * spacingX, canvas.height - graphData[i] * spacingY);
      }
        ctx.stroke();
    }
  
    drawGraph();
  
    document.getElementById('bugs').addEventListener('click', function() {
      graphData = [0];
      drawGraph();
    });
  
    document.getElementById('repair').addEventListener('click', function() {
      graphData = [100];
      drawGraph();
    });
  });
  
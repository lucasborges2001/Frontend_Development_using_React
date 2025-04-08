document.addEventListener('DOMContentLoaded', () => {
    const counterElement = document.getElementById('counter');
    const incrementBtn = document.getElementById('increment-btn');
    let count = 0;
  
    incrementBtn.addEventListener('click', () => {
      count += 1;
      counterElement.textContent = `Contador: ${count}`;
    });
  });
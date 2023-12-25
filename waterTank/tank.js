// JavaScript logic here
const input = [0, 4, 0, 0, 0, 6, 0, 6, 4, 0];
const tankWidth = 40;
const tankHeight = 20;
const waterLevel = 10;

const svg = document.getElementById('waterTank');


input.forEach((block, index) => {
  const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  rect.setAttribute('x', index * tankWidth);
  rect.setAttribute('y', 0);
  rect.setAttribute('width', tankWidth);
  rect.setAttribute('height', block * tankHeight);
  svg.appendChild(rect);
});


let waterUnits = 0;
for (let i = 0; i < input.length; i++) {
  if (i === 0 || i === input.length - 1) {
    continue;
  }
  const leftMax = Math.max(...input.slice(0, i));
  const rightMax = Math.max(...input.slice(i + 1));
  const minHeight = Math.min(leftMax, rightMax);
  if (minHeight > input[i]) {
    waterUnits += minHeight - input[i];
  }
}

const waterRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
waterRect.setAttribute('x', tankWidth);
waterRect.setAttribute('y', tankHeight * (tankHeight - waterLevel));
waterRect.setAttribute('width', (input.length - 2) * tankWidth);
waterRect.setAttribute('height', waterUnits * tankHeight);
waterRect.setAttribute('class', 'water');
svg.appendChild(waterRect);
// const colors = [
//   "#D8BFD8",
//   "#DDA0DD",
//   "#EE82EE",
//   "#DA70D6",
//   "#FF00FF",
//   "#FF00FF",
//   "#BA55D3",
//   "#9370DB",
//   "#8A2BE2",
//   "#9400D3",
//   "#9932CC",
//   "#8B008B",
//   "#800080",
//   "#4B0082",
//   "#6A5ACD",
//   "#483D8B",
// ];

// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// const randomColor = () => {
//   return colors[randomIntegerFromInterval(0, colors.length - 1)];
// };

function randomColor() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);

  return `rgb(${x}, ${y}, ${z})`;
}

export default randomColor;

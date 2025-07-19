
const sensitivity = document.getElementById('sensitivity');
const displayValue = document.getElementById('sensitivityValue');
sensitivity.oninput = () => {
  displayValue.textContent = sensitivity.value;
};
document.querySelector('.menu').addEventListener('change', () => {
  const config = {
    aimbot: document.getElementById('aimbot').checked,
    level: document.getElementById('aimLevel').value,
    mode: document.getElementById('mode').value,
    accuracy: document.getElementById('accuracy').checked,
    assist: document.getElementById('assist').checked,
    speedup: document.getElementById('speedup').checked,
    responsive: document.getElementById('responsive').checked,
    antiban: document.getElementById('antiban').checked,
    sensitivity: sensitivity.value
  };
  console.log('MIKI MENU config:', config);
});

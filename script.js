function spinCandy() {
  const candyNameEl = document.getElementById('CandyName');
  const againBtn = document.getElementById('againBtn');
  let spinInterval;

  // Disable both buttons while spinning
  document.getElementById('generateBtn').disabled = true;
  againBtn.disabled = true;

  // Add spinning animation class
  candyNameEl.classList.add('spin');

  // Start fast random spin
  spinInterval = setInterval(() => {
    const random = candys[Math.floor(Math.random() * candys.length)];
    candyNameEl.textContent = random;
  }, 100); // change every 100ms

  // Stop after 5 seconds
  setTimeout(() => {
    clearInterval(spinInterval);
    const finalCandy = candys[Math.floor(Math.random() * candys.length)];
    candyNameEl.textContent = finalCandy;

    // Remove animation
    candyNameEl.classList.remove('spin');

    // Show "Spin Again" button
    againBtn.style.display = 'inline-block';

    // Enable buttons again
    document.getElementById('generateBtn').disabled = false;
    againBtn.disabled = false;
  }, 5000); // 5 seconds
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('generateBtn').addEventListener('click', spinCandy);
  document.getElementById('againBtn').addEventListener('click', spinCandy);
});

export function HaveSomeFun() {
  const originalTransform = document.body.style.transform;
  let degree = 0;

  const intervalId = setInterval(() => {
    document.body.style.transform = `rotate(${degree}deg)`;
    degree += 10;
  }, 100); // rotate 10 degrees every 100ms

  setTimeout(() => {
    clearInterval(intervalId);
    document.body.style.transform = originalTransform;
  }, 5000); // stop rotating after 5 seconds
}

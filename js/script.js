// Path to your JSON animation file
const animationPath = 'Animation - 1722530462835.json'; 

// Preloader
const preloader = document.querySelector('#preloader');

if (preloader) {
  // Load the Lottie animation
  lottie.loadAnimation({
    container: preloader, // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: animationPath // the path to the animation json
  });

  // Remove preloader after 5 seconds
  window.addEventListener('load', () => {
    setTimeout(() => {
      preloader.remove();
    }, 5000); // 5000 milliseconds = 5 seconds
  });
}

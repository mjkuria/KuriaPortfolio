  const greetings = [
    "Hello", "Hola", "Bonjour", "Ciao", "こんにちは", "Привет", "Olá", "नमस्ते"
  ];
  
  const loader = document.getElementById('loading-screen');
  let delay = 0;

  greetings.forEach((word, i) => {
    const div = document.createElement('div');
    div.className = 'hello';
    div.textContent = word;
    div.style.animationDelay = `${i * 0.4}s`;
    loader.appendChild(div);
  });

  // Hide loader after all animations
  setTimeout(() => {
    loader.style.transition = 'opacity 1s ease';
    loader.style.opacity = 0;

    loader.addEventListener('transitionend', () => {
      loader.style.display = 'none';
      document.getElementById('main-content').style.display = 'block';
      document.body.style.overflow = 'auto';
    });
  }, (greetings.length * 400) + 1500);
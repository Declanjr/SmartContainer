document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const toggleBtn = item.querySelector('.toggle-btn');
  
    question.addEventListener('click', () => {
      // Toggle the answer visibility
      answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
      // Update the toggle button
      toggleBtn.textContent = toggleBtn.textContent === '+' ? '-' : '+';
    });
  });
  
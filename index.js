const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  const toggleBtn = item.querySelector('.toggle-icon');
  const iconImg = toggleBtn.querySelector('img');
  const answer = item.querySelector('.faq-answer');

  // Start collapsed
  answer.style.maxHeight = '0px';
  answer.style.overflow = 'hidden';
  answer.style.transition = 'max-height 0.4s ease';

  question.addEventListener('click', () => {
    const isOpen = answer.style.maxHeight !== '0px';

    // Close all answers
    faqItems.forEach(otherItem => {
      const otherAnswer = otherItem.querySelector('.faq-answer');
      const otherIcon = otherItem.querySelector('.toggle-icon img');
      otherAnswer.style.maxHeight = '0px';
      otherIcon.src = './assets/images/icon-plus.svg';
    });

    // Toggle current answer
    if (!isOpen) {
      answer.style.maxHeight = answer.scrollHeight + 'px';
      iconImg.src = './assets/images/icon-minus.svg';
    }
  });
});

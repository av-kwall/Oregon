document.addEventListener("DOMContentLoaded", function () {
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', function () {
      const accordionItem = this.parentElement;
      const accordionContent = accordionItem.querySelector('.accordion-content');

      // Toggle 'active' class on the header
      this.classList.toggle('active');

      // Toggle 'show' class on the content
      if (accordionContent.style.maxHeight) {
        // If content is already open, close it
        accordionContent.style.maxHeight = null;
        accordionContent.classList.remove('show');
      } else {
        // If content is closed, open it
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
        accordionContent.classList.add('show');
      }

      // Optional: Close other open accordion items
      accordionHeaders.forEach(otherHeader => {
        if (otherHeader !== this) {
          const otherContent = otherHeader.parentElement.querySelector('.accordion-content');
          otherHeader.classList.remove('active');
          otherContent.style.maxHeight = null;
          otherContent.classList.remove('show');
        }
      });
    });
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.accordion__btn');
  const accordionContents = document.querySelectorAll('.accordion__content');

  accordions.forEach((itemAcc) => {
    itemAcc.addEventListener('click', (event) => {
      event.preventDefault();
      // .nextElementSibling - property returns the element immediately following the specified element
      const context = itemAcc.nextElementSibling;

      if (context.style.maxHeight) {
        context.style.maxHeight = null;
        itemAcc.classList.remove('is-open');
      } else {
        // .scrollHeight -  property returns the entire height of an element
        context.style.maxHeight = context.scrollHeight + 'px';
        itemAcc.classList.add('is-open');
      }

      accordionContents.forEach((itemCont) => {
        if (itemCont !== context) {
          itemCont.style.maxHeight = null;
          itemCont.previousElementSibling.classList.remove('is-open');
        }
      });

      // accordions.forEach((item) => {
      //   if (item !== itemAcc) {
      //     item.classList.remove('is-open');
      //   }
      // });
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.accordion__btn');
  const accordionContents = document.querySelectorAll('.accordion__content');

  // iterate over all the buttons of the accordion
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
      // when opening a new section of the accordion, close the previous one
      accordionContents.forEach((itemCont) => {
        if (itemCont !== context) {
          itemCont.style.maxHeight = null;
          itemCont.previousElementSibling.classList.remove('is-open');
        }
      });
    });
  });
});

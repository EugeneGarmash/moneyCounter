ROUTER + COURSE 

share with friends

скидывать мелодию только при смене, паузе, стопе или мьюте
sessionStorage









  const shareViaWhatsApp = () => {
    window.location.href = `whatsapp://send?text=${shareText}`;
  };

  const shareViaViber = () => {
    window.location.href = `viber://forward?text=${shareText}`;
  };

  const shareViaTelegram = () => {
    window.location.href = `https://t.me/share/url?url=${window.location.protocol}//${window.location.hostname}&text=${shareText}`;
  };

  const shareViaEmail = () => {
    window.location.href = `mailto:?body=${shareText}`;
  };






  

TODO FIRST
  React router
  Context
  Redux toolkit - slices
  Reselect
  Debounce
  Reduck
  Modal with text info
  Add my creds
  shouldComponentUpdate / pure / memo // useMemo vs shouldComponentUpdate
  обрабатывать большие гривны
    - https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
    - https://www.google.com/search?q=format+number+js&oq=format+Number+js&aqs=chrome.0.0l8.5013j0j7&sourceid=chrome&ie=UTF-8
TODO NEXT
  SCSS variables
  Write some tests
  add component to CounterStep
LATER
  SWR
  Remove className duplication
    https://www.google.com/search?q=css+modules+name+duplication&oq=css+modules+name+du&aqs=chrome.1.69i57j33i22i29i30.6513j0j7&sourceid=chrome&ie=UTF-8
    /** @todo to avoid AppMainButton__AppMainButton you should play with webpack config file*/
    using linter with custom settings
  // https://eugene-s-project-72ed7.firebaseio.com/ // получаю набор стандартныз профессий

RECAPTCHA??


You see a money counter written on JS programming
language with demonstration purposes.
The belowmentioned technologies and techniques are used:

JS:
- React
1. React hooks
2. Context API
3. React-router
4. Class components
5. Functional components
6. classNames library
- Redux
1. react-redux
2. redux hooks
3. no switch case reducer usage

Styling
1. Radium
2. CSS Modules
3. Styled components
4. SCSS (variables, mixins and nesting)
5. Inline styling
6. External font usage
7. Custom Favicon use ( - )
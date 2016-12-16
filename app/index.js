import gL from './gL';
import populate_gL from './helpers/populate_gL';

import makeDiv from './helpers/makeDiv';
import scrll from './helpers/scrll';
import scrollToTop from './helpers/scrollToTop';
import scrollTxt from './components/txt';
import illustration from './components/illustration';

require('./styles/main.styl');

gL.mainDiv = document.getElementById('mainFrame');
gL.mainW = gL.mainDiv.offsetWidth;

// place to add all gL parameters used later by other files
populate_gL();

illustration.init();

scrollToTop();
scrollTxt.init();


scrll.init();
scrollTxt.update();
illustration.update();



// on scroll listener... 
window.addEventListener('scroll', function() {
  scrll.update();
  scrollTxt.update();
  illustration.update();
  console.log('mainFrameBottom: ' + gL.mainFrameInfo.botPos);
})


import gL from '../gL';
import makeDiv from '../helpers/makeDiv';

// put all txt elements in this array
// will loop through them in 
let txtElements = [
  {
    id: 'txt000',
    className: 'txt-div',
    desc: 'title text',
    vertPos: 30,
    txt: (`
      <div>
        <h2>This is the Title Text</h2>
        <p>It scrolls up at the beginning of the scrolling content</p>
      </div>
    `)
  },
  {
    id: 'txt001',
    className: 'txt-div',
    desc: 'first explaniner text',
    vertPos: 400,
    txt: (`
      <div>
        <p>additional informations moves in as the reader scrolls the pages</p>
      </div>
    `)

  },
  {
    id: 'txt002',
    className: 'txt-div',
    desc: 'first explaniner text',
    vertPos: 850,
    txt: (`
      <div>
        <p>For example, this rectangle could call attention to itself.</p>
      </div>
    `)

  },
  {
    id: 'txt003',
    className: 'txt-div',
    desc: 'first explaniner text',
    vertPos: 1550,
    txt: (`
      <div>
        <p>Then change in some way that fits the description in the text.</p>
      </div>
    `)

  }


];

let scrollTxt = {

  init: function() {
    // make and position fade div for text
    let fadeDivParent = makeDiv('fade-div-parent', 'fade-div-parent');
    let fadeDivTop = makeDiv('fade-div-top', 'fade-div-top');
    let fadeDivFade = makeDiv('fade-div-fade', 'fade-div-fade');

    fadeDivParent.appendChild(fadeDivTop);
    fadeDivParent.appendChild(fadeDivFade);

    gL.mainDiv.appendChild(fadeDivParent);

    for (let i = 0; i < txtElements.length; i += 1) {
        let txtDiv = makeDiv(txtElements[i].id, txtElements[i].className + ' ' + txtElements[i].vertPos + 'p' );
        let htAdj = gL.mainW < 550 ? 400 : 5;
        let leftAdj = gL.mainW < 550 ? 0 : 450;
        
        txtDiv.innerHTML = txtElements[i].txt;
        txtDiv.style.top = (txtElements[i].vertPos + htAdj) + 'px';
        txtDiv.style.left = leftAdj + 'px';

        gL.mainDiv.appendChild(txtDiv);


      }
    },

    update: function() {
      let fadeDivTop = document.getElementById('fade-div-top');
      // HACK ?? - should this should be in the scrll update instead of here
      let htAdj = gL.mainW < 550 ? 325 : 5;
      if (gL.mainW < 550) htAdj = 325;

      if (gL.mainFrameInfo.topPos > 0) {
        fadeDivTop.style.height = htAdj + 'px';
      } else {
        fadeDivTop.style.height = (htAdj + (-1 * gL.mainFrameInfo.topPos)) + 'px';
      }


      // fade in txt based on scroll position
      let opAdj = 350; // the number of scroll pos before actual pos for fading in text.
      for (let i = 0; i < txtElements.length; i += 1) {
        let el = document.getElementById(txtElements[i].id)
        el.style.opacity = -gL.mainFrameInfo.topPos < txtElements[i].vertPos - opAdj ? 0.4 : 1;

      }

    }

};

export default scrollTxt;
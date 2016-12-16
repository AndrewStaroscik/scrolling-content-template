import gL from '../gL';

let scrollPosUpdate = function() {
  // control scroll response from here
  gL.mainFrameInfo.topPos = gL.mainDiv.getBoundingClientRect().top;
  gL.mainFrameInfo.botPos = gL.mainDiv.getBoundingClientRect().bottom;
  gL.mainFrameInfo.height = gL.mainDiv.getBoundingClientRect().height;
  gL.mainFrameInfo.left = gL.mainDiv.getBoundingClientRect().left;
  gL.mainFrameInfo.right = gL.mainDiv.getBoundingClientRect().right;
  gL.mainFrameInfo.width = gL.mainDiv.getBoundingClientRect().width;
  gL.viewHt = document.documentElement.clientHeight;
  gL.viewWt = document.documentElement.clientWidth;
  gL.botEdge = gL.mainFrameInfo.botPos - gL.viewHt;
};




const scrll = {
  init: function() {
    gL.mainFrameInfo = {};
    scrollPosUpdate();

    gL.topButton = document.getElementById('scrollDiv');
  }, 
  update: function() {
    scrollPosUpdate();
    console.log(gL.illustrationWrapper);
    if (gL.mainFrameInfo.topPos < 0) {
      gL.topButton.style.visibility = 'visible';
      gL.illustrationWrapper.style.top = (50 + (-gL.mainFrameInfo.topPos)) + 'px';
    } else {
      gL.topButton.style.visibility = 'hidden';
      gL.illustrationWrapper.style.top = 50 + 'px';
    }

    if (gL.viewHt < gL.mainFrameInfo.botPos) {
      gL.topButton.style.top = (gL.viewHt - 50) + 'px';  
    } else {
      gL.topButton.style.top = (gL.mainFrameInfo.botPos - 50) + 'px';  
    }
    
    //gL.topButton.style.bottom = (gL.mainFrameInfo.botPos) + 'px';
    gL.topButton.style.left = (gL.mainFrameInfo.left + gL.mainFrameInfo.width - 125) + 'px';

    console.log('viewHt: ' + gL.viewHt);
    console.log('mainFbottom: ' + gL.mainFrameInfo.botPos);
    console.log('mainFtop: ' + gL.mainFrameInfo.topPos);
    console.log(' ')

  }

};

export default scrll;
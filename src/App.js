import React from "react";
import useWebAnimations, {bounceInLeft, bounceInRight} from "@wellyshen/use-web-animations";
// check https://animate.style/  or animate.css for bounceInLeft & bounceInRight
import './App.css';
// import chicken from './images/chicken.gif';
import cycle from './images/cycle.gif';
import bird from './images/bird.gif';
import dog from './images/dog.gif';
import sun from './images/sun.gif';
import w_rook_upright from './images/w_rook_upright.png';
import palm3 from './images/palm3.png';
import bush from './images/bush.png'
import queen_and_alice_sprite from './images/queen_and_alice_sprite.png';
import r_pawn_upright from './images/r_pawn_upright.png';
import w_rook from './images/w_rook.png';
import palm1 from './images/palm1.png';
import r_pawn from './images/r_pawn.png';
import palm2 from './images/palm2.png';
import r_knight from './images/r_knight.png';

export const App = () => {

  const redQueen = useWebAnimations({
    keyframes: [
      { transform: 'translateY(0)' },
      { transform: 'translateY(-100%)' }
    ],
    timing: {
      easing: 'steps(7, end)',
      direction: "reverse",
      duration: 600,
      playbackRate: 1,
      iterations: Infinity
    }
  });

  const foreGround1 = useWebAnimations({
    keyframes: [
      { transform: 'translateX(100%)' },
      { transform: 'translateX(-100%)' }
    ],
    timing: {
      duration: 12000,
      playbackRate: 1,
      iterations: Infinity
    }
  });

  const foreGround2 = useWebAnimations({
    keyframes: [
      { transform: 'translateX(100%)' },
      { transform: 'translateX(-100%)' }
    ],
    timing: {
      duration: 12000,
      playbackRate: 1,
      iterations: Infinity
    }
  });

  const backGround1 = useWebAnimations({
    keyframes: [
      { transform: 'translateX(100%)' },
      { transform: 'translateX(-100%)' }
    ],
    timing: {
      duration: 36000,
      playbackRate: 1,
      iterations: Infinity
    }
  });

  const backGround2 = useWebAnimations({
    keyframes: [
      { transform: 'translateX(100%)' },
      { transform: 'translateX(-100%)' }
    ],
    timing: {
      duration: 36000,
      playbackRate: 1,
      iterations: Infinity
    }
  });

  const dogAnimation = useWebAnimations({
    keyframes: [
      { transform: 'translateX(-100%)' },
      { transform: 'translateX(100%)' }
    ],
    timing: {
      duration: 10000,
      playbackRate: 1,
      iterations: Infinity
    }
  });

  const birdAnimation = useWebAnimations({
    keyframes: [
      { transform: 'translateX(-100%)' },
      { transform: 'translateX(100%)' }
    ],
    timing: {
      duration: 15000,
      playbackRate: 1,
      iterations: Infinity
    }
  });

  // const chickenAnimation = useWebAnimations({
  //   keyframes: [
  //     { transform: 'translateX(100%)' },
  //     { transform: 'translateX(-100%)' }
  //   ],
  //   timing: {
  //     duration: 40000,
  //     iterations: Infinity
  //   }
  // });

  const cycleAnimation = useWebAnimations({
    keyframes: [
      { transform: 'translateX(100%)' },
      { transform: 'translateX(-100%)' }
    ],
    timing: {
      duration: 5000,
      playbackRate: 1,
      iterations: Infinity
    }
  });


  const speedUp = () => {
    const animation = redQueen.getAnimation();
    if (animation.playbackRate < 4) {
      animation.updatePlaybackRate(animation.playbackRate * 1.25);
      adjustBackgroundPlayback();
    }
  };

  // const jumpToHalf = () => {
  //   const animation = redQueen.getAnimation();
  //   animation.currentTime = animation.effect.getTiming().duration / 2;
  // };
  const speedDown = () => {
    const animation = redQueen.getAnimation();
    if (animation.playbackRate > 0.25) {
      animation.updatePlaybackRate(animation.playbackRate * 0.75);
      adjustBackgroundPlayback();
    }
  };

  var sceneries = [foreGround1, foreGround2, backGround1, backGround2, dogAnimation, birdAnimation, cycleAnimation]
  
  var adjustBackgroundPlayback = function() {
    sceneries.forEach((anim) => {
      anim.getAnimation().playbackRate = redQueen.getAnimation().playbackRate;
    })
  
  }

const buttonLeft = useWebAnimations({...bounceInLeft});
const buttonRight = useWebAnimations({...bounceInRight});

// const { keyframes, timing } = bounceInLeft;
// const { ref } = useWebAnimations({
//   keyframes,
//   timing: {
//     ...timing,
//     delay: 1000, // Delay 1s
//     duration: timing.duration * 0.75, // Speed up the animation
//   },
// });



  return (
    <div className="wrapper">
      <div className="sky"></div>
      <div id="buttonContainer">
        <button ref={buttonLeft.ref} onClick={speedUp}>Speed Up</button>
        {/* <button onClick={jumpToHalf}>Jump to Half</button> */}
        <button ref={buttonRight.ref} onClick={speedDown}>Speed Down</button>
      </div>
      <div className="earth">
        <div id="red-queen_and_alice">
          <img ref={redQueen.ref} id="red-queen_and_alice_sprite" src={queen_and_alice_sprite} alt="Alice and the Red Queen running to stay in place." />
        </div>
      </div>

      <div ref={foreGround1.ref} className="scenery" id="foreground1">
        <img id="palm3" src={palm3} alt=" " />
      </div>

      <div ref={foreGround2.ref} className="scenery" id="foreground2">
        <img id="bush" src={bush} alt=" " />
        <img id="w_rook_upright" src={w_rook_upright} alt=" " />
      </div>

      <div ref={dogAnimation.ref} className="scenery" id="dogContainer">
        <img id="dog" src={dog} alt="dog" />
      </div>

      <div ref={backGround1.ref} className="scenery" id="background1">
        <img id="r_pawn_upright" src={r_pawn_upright} alt=" " />
        <img id="w_rook" src={w_rook} alt=" " />
        <img id="palm1" src={palm1} alt=" " />
      </div>



      <div ref={backGround2.ref} className="scenery" id="background2">
        <img id="r_pawn" src={r_pawn} alt=" " />
        <img id="r_knight" src={r_knight} alt=" " />
        <img id="palm2" src={palm2} alt=" " />
      </div>

      <div ref={cycleAnimation.ref} className="scenery" id="foreground1">
        <img id="cycle" src={cycle} alt="cycle" height="250px" />
      </div>

      {/* <div ref = {chickenAnimation.ref} class="scenery" id="background2">
        <img id="r_pawn" src={chicken} alt="chicken"/>
      </div> */}



      <div >
        <img id="sun" src={sun} alt="Sun" />
      </div>

      <div ref={birdAnimation.ref} className="scenery" id="background2">
        <img id="bird" src={bird} alt="bird" />
      </div>

    </div>

  );
};



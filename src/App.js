import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";
import './App.css';
// import chicken from './images/chicken.gif';
import cycle from './images/cycle.gif';
import bird from './images/bird.gif';
import dog from './images/dog.gif';
import clock from './images/sun.gif';
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
      iterations: Infinity
    }
  });

  const chickenAnimation = useWebAnimations({
    keyframes: [
      { transform: 'translateX(100%)' },
      { transform: 'translateX(-100%)' }
    ],
    timing: {
      duration: 40000,
      iterations: Infinity
    }
  });

  const cycleAnimation = useWebAnimations({
    keyframes: [
      { transform: 'translateX(100%)' },
      { transform: 'translateX(-100%)' }
    ],
    timing: {
      duration: 5000,
      iterations: Infinity
    }
  });



  return (
    <div className="wrapper">
      <div className="sky"></div>
      <div className="earth">
        <div id="red-queen_and_alice">
          <img ref={redQueen.ref} id="red-queen_and_alice_sprite" src={queen_and_alice_sprite} alt="Alice and the Red Queen running to stay in place." />
        </div>
      </div>

      <div ref={foreGround1.ref} className="scenery" id="foreground1">
        <img id="palm3" src={palm3} alt=" " />
      </div>

      <div ref={foreGround2.ref} class="scenery" id="foreground2">
        <img id="bush" src={bush} alt=" "/>
        <img id="w_rook_upright" src={w_rook_upright} alt=" "/>
      </div>

      <div ref = {dogAnimation.ref} class="scenery" id="dogContainer">
        <img id="dog" src={dog} alt="dog"/>
      </div>

      <div ref = {backGround1.ref} class="scenery" id="background1">
        <img id="r_pawn_upright" src={r_pawn_upright} alt=" "/>
        <img id="w_rook" src={w_rook} alt=" "/>
        <img id="palm1" src={palm1} alt=" "/>
      </div>



      <div ref={backGround2.ref} class="scenery" id="background2">
        <img id="r_pawn" src={r_pawn} alt=" "/>
        <img id="r_knight" src={r_knight} alt=" "/>
        <img id="palm2" src={palm2} alt=" "/>
      </div>

      <div ref = {cycleAnimation.ref} class="scenery" id="foreground1">
        <img id="cycle" src={cycle} alt="cycle"height="250px"/>
      </div>

      {/* <div ref = {chickenAnimation.ref} class="scenery" id="background2">
        <img id="r_pawn" src={chicken} alt="chicken"/>
      </div> */}



      <div >
        <img id="clock" src={clock} alt="clock"/>
      </div>

      <div  ref = {birdAnimation.ref} class="scenery" id="background2">
        <img  id="bird" src={bird} alt="bird"/>
      </div>

    </div>

  );
};


// const Red_Queen = () => {

//   const { ref, playState, getAnimation } = useWebAnimations({
//     keyframes: [
//       { transform: 'translateY(0)' },
//       { transform: 'translateY(-100%)' }
//     ],
//     timing: {
//       easing: 'steps(7, end)',
//       direction: "reverse",
//       duration: 600,
//       playbackRate: 1,
//       iterations: Infinity
//     },
//   });

//   return (
//     < div className="earth" >
//       <div id="red-queen_and_alice">
//         <img ref={ref} id="red-queen_and_alice_sprite" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen.png 2x" alt="Alice and the Red Queen running to stay in place." />
//       </div>
//     </div >
//   );
// };




// const ForeGround1 = () => {

//   // const { ref } = useWebAnimations({
//   //   keyframes: [
//   //     { transform: 'translateX(100%)' },
//   //     { transform: 'translateX(-100%)' }
//   //   ],
//   //   timing: {
//   //     duration: 12000,
//   //     iterations: Infinity
//   //   },
//   // });

//   return (
//     <div className="scenery" id="foreground1">
//       <img id="palm3" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3.png 2x" alt="foreground1 " />
//     </div>
//   );
// };


// const ForeGround2 = () => {

//   // const { ref } = useWebAnimations({
//   //   keyframes: [
//   //     { transform: 'translateX(100%)' },
//   //     { transform: 'translateX(-100%)' }
//   //   ],
//   //   timing: {
//   //     duration: 12000,
//   //     iterations: Infinity
//   //   },
//   // });

//   return (
//     <div className="scenery" id="foreground2">
//       <img id="bush" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush.png 2x" alt=" " />
//       <img id="w_rook_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright.png 2x" alt=" " />
//     </div>
//   );
// };



// const BackGround1 =() => {

// // const {ref, playState, getAnimation} = useWebAnimations({
// //             keyframes: [
// //     {transform: 'translateY(0)' },
// //     {transform: 'translateY(-100%)' }
// //   ],
// //   timing: {
// //             easing: 'steps(7, end)',
// //     direction: "reverse",
// //     duration: 600,
// //     playbackRate: 1,
// //     iterations: Infinity
// //    },
// // });

// return (
// <div className="scenery" id="background1">
//       <img id="r_pawn_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright.png 2x" alt=" "/>
//       <img id="w_rook" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook.png 2x" alt=" "/>
//       <img id="palm1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1.png 2x" alt=" "/>
// </div>
// );
// };



// const BackGround2 =() => {

// // const {ref, playState, getAnimation} = useWebAnimations({
// //                   keyframes: [
// //     {transform: 'translateY(0)' },
// //     {transform: 'translateY(-100%)' }
// //   ],
// //   timing: {
// //                   easing: 'steps(7, end)',
// //     direction: "reverse",
// //     duration: 600,
// //     playbackRate: 1,
// //     iterations: Infinity
// //    },
// // });

// return (
// <div className="scenery" id="background2">
//       <img id="r_pawn" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn.png 2x" alt=" "/>
//       <img id="r_knight" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight.png 2x" alt=" "/>
//       <img id="palm2" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2.png 2x" alt=" "/>
// </div>
// );
// };

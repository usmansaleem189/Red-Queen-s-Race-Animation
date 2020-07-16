import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";
import './App.css';
import cycle from './images/chicken.gif';

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
  })

  const foreGround2 = useWebAnimations({
    keyframes: [
      { transform: 'translateX(100%)' },
      { transform: 'translateX(-100%)' }
    ],
    timing: {
      duration: 12000,
      iterations: Infinity
    }
  })

  const backGround1 = useWebAnimations({
    keyframes: [
      { transform: 'translateX(100%)' },
      { transform: 'translateX(-100%)' }
    ],
    timing: {
      duration: 36000,
      iterations: Infinity
    }
  })

  const backGround2 = useWebAnimations({
    keyframes: [
      { transform: 'translateX(100%)' },
      { transform: 'translateX(-100%)' }
    ],
    timing: {
      duration: 36000,
      iterations: Infinity
    }
  })



  return (
    <div className="wrapper">
      <div className="sky"></div>
      <div className="earth">
        <div id="red-queen_and_alice">
          <img ref={redQueen.ref} id="red-queen_and_alice_sprite" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png" alt="Alice and the Red Queen running to stay in place." />
        </div>
      </div>

      <div ref={foreGround1.ref} className="scenery" id="foreground1">
        <img id="palm3" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png" alt=" " />
      </div>

      <div ref={foreGround2.ref} class="scenery" id="foreground2">
        <img id="bush" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png" alt=" "/>
        <img id="w_rook_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png" alt=" "/>
      </div>

      <div ref = {backGround1.ref} class="scenery" id="background1">
        <img id="r_pawn_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png" alt=" "/>
        <img id="w_rook" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png" alt=" "/>
        <img id="palm1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png" alt=" "/>
      </div>

      <div ref={backGround2.ref} class="scenery" id="background2">
        <img id="r_pawn" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png" alt=" "/>
        <img id="r_knight" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png" alt=" "/>
        <img id="palm2" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png" alt=" "/>
      </div>

      <div ref = {backGround2.ref} class="scenery" id="background2">
        <img id="r_pawn" src={cycle} alt="cycle"/>
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

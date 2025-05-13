// "pressure chamber v2" @by rorohikorere
// @date 25-05-11
// @version 2.0

setcpm(172/4)

// // Deep sub sine bass with vibrato movement

const bass = note("c2 <eb2 <g2 <cb5 cb2>>>")
  .sound("sawtooth")
  .vib("<2 4 8>")
  .zcrush(0.5)
  .gain(1)
  .attack(0.001).decay(0.1).sustain(0.2).release(0.2)
  .room(0.4)
  .size(0.8)

// // Sharp hats & snares with bitcrush dirt
// s("bd sd [~ bd] sd, hh*8 ").distort("<0 2 1 2:.5>")
//   // .sound("triangle")
//   .gain(0.5)
//   .attack(0.001).decay(0.05).sustain(1).release(0.05)
//   .room(0.3)

// // Thumpy kicks with randomised pitch slide
const thud = sound("bd*4")
  // .sound("sawtooth")
  .slide("<-2 -1 0 1 2>")
  .zcrush(0.1)
  .attack(0.01).decay(0.1).sustain(0).release(0.05)
  .gain(1.2)


// older
// const pad = note("<[g3,b3,e4]!2 [a3,c4,e4] [b3,d4,f#4]>")
//   .sound("{z_sawtooth z_tan z_sine z_square}%4")
//   .zrand(1)
//   // .zmod(30)
//   .attack(0.2).decay(0.5).sustain(0.6).release(0.8)
//   .gain(0.2)
//   .room(0.5)
  // .loop()

const oscy = note("[a,c,e,<a4 ab4 g4 gb4>,b4]/8")
  .s("<sawtooth sine>")
  .vib("<5 2>")
  .lpf(600)
  .lpa(42)
  .lpenv(6)
  .distort("[<0 1> <2 0> <1 3>]*4")

const pad = note("<[g3,b3,e4]!2 [a3,c4,e4] [b3,d4,f#4]>")
  .sound("{z_sawtooth z_tan z_sine z_square}%4")
  // .zrand(1)
  // .zmod(30)
  .attack(0.2).decay(0.5).sustain(0.6).release(2)
  .gain(0.2)
  .room(0.5)

  // .loop()


// s("bd sd").echo(3, 1/7, .8)

// const drums = s("bd sd [~ bd] sd, hh*8 ").distort("<0 1 0 2:.5>")
const drums1 = s("bd sd [~ bd] sd, < hh*8 hh*16 [~ hh*2]*4>")
  .distort("<0 1 0 2:.5>")
  .lpenv(6)

const drums = s("hh*8 ").distort("<2 0 1 2:.5>").gain(0.5).room(2)

stack(bass,drums, drums1, pad).room(0.3)



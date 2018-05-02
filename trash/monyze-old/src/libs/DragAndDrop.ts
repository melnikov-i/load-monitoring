
let timeUpdate = +new Date();
let currentSourceClientOffset = {x: 0, y: 0};

export const trottler = (sourceClientOffset: {x: number, y: number}) => {
  if ( +new Date() - timeUpdate > 40 ) {
    if ( sourceClientOffset !== null ) {
      currentSourceClientOffset = sourceClientOffset;
      timeUpdate = +new Date();      
    }
  }
  return currentSourceClientOffset;
}
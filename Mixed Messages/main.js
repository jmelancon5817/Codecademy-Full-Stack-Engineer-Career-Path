// function logs 1 randomly selected Kenny Rogers quote
const kennyRogersBot = () => {
  // select random number from 0 to 9
  let randNum = Math.floor(Math.random() * 10);
  // switch statement based on random number
  switch (randNum) {
    case 0:
      console.log("Don't be afraid to give up the good for the great.");
      break;
    case 1:
      console.log(
        "There has to be chemistry in a duet, but if you go beyond the point of friendship and attraction, you lose something."
      );
      break;
    case 2:
      console.log(
        "Here's what I've learned about raising boys... if you keep 'em busy, they're fine. You let 'em get bored, they'll dismantle your house board by board."
      );
      break;
    case 3:
      console.log(
        "I have awards right now that I do not remember walking on stage to get."
      );
      break;
    case 4:
      console.log(
        "I've always said that gray hair looks good on everybody but yourself. To me, it makes me look old."
      );
      break;
    case 5:
      console.log(
        "If you want people to know what your message is, just sing it."
      );
      break;
    case 6:
      console.log("I had holes in my jeans well before it was fashionable.");
      break;
    case 7:
      console.log(
        "I've always said music should make you laugh, make you cry or make you think."
      );
      break;
    case 8:
      console.log(
        "There is a trade off - as you grow older you gain wisdom but you lose spontaneity."
      );
      break;
    case 9:
      console.log(
        "You gotta know when to hold 'em, know when to fold 'em, know when to walk away, know when to run."
      );
      break;
  }
};

kennyRogersBot();

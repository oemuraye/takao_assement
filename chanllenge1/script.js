const ratings = (num) => {
  if (num < 0 || num > 5) {
    return console.error("pick numbers between 0.0 - 5.0");
  }

  let result = "";

  for (let i = 0; i < 5; i++) {
    if (num >= 1) {
      result += "full ";

      // update our num
      num -= 1;
    } else if (num > 0) {
      if (num + 0.25 >= 1) {
        result += "full ";
      } else if (num + 0.25 >= 0.5) {
        result += "half ";
      } else {
        result += "empty ";
      }

      num -= num;
    } else {
      // empty star
      result += "empty ";
    }
  }

  return console.log(result);
};

ratings(4.3);

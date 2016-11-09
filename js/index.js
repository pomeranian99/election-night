var wordToPrint = ["oh god", "no", "please", "no", "no", "no", "no", "no", "oh crap", "oh crap", "oh lord", "oh no", "no", "help", "no", "no", "oh crap", "oh god", "please", "oh man", "no", "oh f-", "oh wow", "oh wow", "wtf", "no", "i can't", "i can't", "i can't even", "oh fuck", "i -- oh no", "shit no", "oh man", "oh man", "oh please", "i can't even", "no no no", "no no no", "no no no", "ugh ugh", "ugh", "ugh ugh crap", "it ... can't", "i can't", "it can't no i can't", "make it stop", "i'm ...", "i'm ...", "it's ...", "oh oh oh oh", "oh oh oh oh oh", "nnnonnnnooo", "nnnonnnonnoo", "ugh", "gnnnaah", "gnaaaah", "gaaah", "wtaf", "wt actual f", "what what what", "it ... no", "no ... i ...", "...", "..."];

function printAWord() {
  var rando = Math.floor((Math.random() * wordToPrint.length) + 1)
  $(".center").text(wordToPrint[rando]).fadeIn("slow");
  hideIt();
}

function hideIt() {
  $(".center").fadeOut(600);
}

var startItRunning = setInterval(printAWord, 1500);
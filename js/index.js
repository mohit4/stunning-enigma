$(document).ready(function() {
  var quotes = [{
      quote: "Stay hungry,stay foolish!",
      author: "Steve Jobs"
    }, {
      quote: "Success is a lousy teacher, it seduces smart men into thinking they can never lose.",
      author: "Bill Gates"
    }, {
      quote: "Take risks in your life, if you win you can lead, if you fail you can guide.",
      author: "Swami Vivekananda"
    }, {
      quote: "Whenever dharma declines and the purpose of life is forgotten, I manifest myself on earth. I am born in every age to protect the good, to destroy evil, and to reestablish dharma.",
      author: "Lord Krishna"
    }, {
      quote: "Even if a snake is not poisonous, it should pretend to be venomous.",
      author: "Chanakya"
    }, {
      quote: "To defeat evil, I must become a greater evil.",
      author: "Lelouch Vi Britannia"
    }

  ];
  var arr = ["#00CCFF", "#6633FF", "#FF3399", "#FFCC00", "#33FF66", "#FF6600"];
  var i = Math.floor(Math.random() * arr.length);
  $("body").css("background-color", arr[i]);

  //fetching the JSON quote from url
  $("#refresh-button").on("click", function() {

    $(".quote").fadeOut("slow");
    $(".speaker").fadeOut("slow");
    //for assigning random background color
    var arr = ["#00CCFF", "#6633FF", "#FF3399", "#FFCC00", "#33FF66", "#FF6600"];
    var i = Math.floor(Math.random() * arr.length);
    $("body").css("background-color", arr[i]);

    //fetching the data
    var j = Math.floor(Math.random() * quotes.length);
    var len = quotes[j].quote.length;
    var ts = 50;
    if (len < 30)
      ts = 50;
    else if (len < 60)
      ts = 40;
    else if (len < 90)
      ts = 30;
    else
      ts = 20;
    $(".quote").css("font-size", ts + "px");
    $(".quote").html(quotes[j].quote);
    $(".speaker").html(quotes[j].author);

    $(".quote").fadeIn("slow");
    $(".speaker").fadeIn("slow");
  }); //refresh button clicked

}); //document ready
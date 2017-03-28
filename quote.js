var gradient = ["linear-gradient(360deg, #fbc2eb, #a6c1ee)", "linear-gradient(360deg, #f598a8, #f6edb2)", "linear-gradient(135deg, #69b7eb, #b3dbd3, #f4d6db)", "linear-gradient(360deg, #e8baff, #ffcd69)", "linear-gradient(135deg, #ee5c87, #f1a4b5, #d587b3)"];
var count = 0;

function getGradient(){
  $("body").css("background", gradient[count]);
  count += 1;
  if(count > 4){
    count = 0;
  }
}

function getQuote(){
  $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(quote){
    $(".quote").html("<i class='fa fa-quote-left' aria-hidden='true'></i>" + quote[0].content.replace(/\n|<\/*p>/g,"").trim() + "<i class='fa fa-quote-right' aria-hidden='true'></i>");
    $(".title").html(quote[0].title);
    $(".tweet").html("<a target='_blank' href='https://twitter.com/intent/tweet?&text=" + $(".quote").text() + " -" + $(".title").text() + "'><i class='fa fa-twitter fa-2x' aria-hidden='true'></i></a>")
    $(".new").blur();
    getGradient();
  });
}

$(document).ready(function(){
  $.ajaxSetup({cache:false});
  getQuote();
  $(".new").click(getQuote);
});

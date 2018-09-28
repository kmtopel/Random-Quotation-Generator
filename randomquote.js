$(document).ready(function(){
  getQuote();

  function getQuote (){
    var url="https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
    $.getJSON(url,function (data){;
      $("#quotebox").html('"'+data.quoteText+'"');
      $("#authorbox").html('- '+data.quoteAuthor);
      $("#twitter").on("click", function(){
        window.open("https://twitter.com/intent/tweet?text=" + '"'+ data.quoteText + '" - '+data.quoteAuthor);
      });
    
    });
    };

 $("#quoteButton").on("click", function(){
   getQuote();
 });


});

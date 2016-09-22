$(document).ready(function(){
    
    $('#quoteButton').click(function(evt){
      $.getJSON("https://crossorigin.me/http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?", function (data){
            var author = data.quoteAuthor;
      if (author !== ""){
          $("#quote").text(data.quoteText);
          $("#quoter").text(data.quoteAuthor);
      }
      });
    }); 
    
});
/* By Andhika Srimadeva */
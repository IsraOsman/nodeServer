var Twit = require('twit');
var config = require('./config.js');
var Twitter = new Twit(config);
var tweetSearch = function() {
    var params = {
      q: 'trump',
      result_type: 'recent',
      lang: 'en'    
    } 
    Twitter.get('search/tweets', params, function(err, data) {
        
        if (!err) {
            for(i = 0; i<2; i++){
              console.log(data);
              i++;
           }
              
        };
        if(err){
            console.log('Something went wrong while RETWEETING... Duplication maybe...');
        }
    });

}

tweetSearch();
setInterval(tweetSearch, 3000000);


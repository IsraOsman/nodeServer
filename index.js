var twit = require('twit');
var config = require('./config.js');
var Twitter = new Twit(config);

const express = require('express')();
const app = express; 

function  tweetSearch(){
    var params = {
      q: 'Sudan',
      result_type: 'recent',
      lang: 'en'    
    } 
    Twitter.get('search/tweets', params, function(err, data) {
        
        if(err){
            console.log('Something went wrong while RETWEETING... Duplication maybe...');
        }else{
            for(i = 0; i<2; i++){
             //return  data.statuses[i].user.name;

             console.log(data.statuses[i].text);
            
           }
              
        }
        
        
    });
   //next();

}

//app.use(tweetSearch);
app.get('/api/tweets', (req, res) => {
    res.send(tweetSearch());
});

app.listen(3000);


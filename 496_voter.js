
/*
Made by Alex
496 voter because using the website is time consuming

1. Go to website and login
2. Go to http://prometheus.eecs.oregonstate.edu/cs496/list.jsp?rtype=P
 or http://prometheus.eecs.oregonstate.edu/cs496/list.jsp?rtype=D
 or http://prometheus.eecs.oregonstate.edu/cs496/list.jsp?rtype=T
 or http://prometheus.eecs.oregonstate.edu/cs496/list.jsp?rtype=L
3. Open Chrome Dev Cools
4. Go to console tab
5. Copy and paste code and hit enter
6. repeat 2-5 for D, T, and L rtypes

7. Check Dashboard for votes given count
*/

// grab resource IDs
var rids = [];
$( ".resourceItem" ).each(function( index ) {
  rids.push( $( this ).attr("data-rid") );
});

// console.log(rids);
// make ajax calls to the server
for( let i in rids ) {
    //console.log(rid);
    rid = parseInt(rids[i])
    zeroOrOne = 1;
    var d = new Date();
    var epoch = d.getTime();
    var URL = "http://prometheus.eecs.oregonstate.edu/cs496/vote?rid=";
    $.ajax({
    	url : URL + rid + "&v=" + zeroOrOne,
    	method : "post",
    	dataType : "json",
        xhrFields: {
            withCredentials: true
        },
    	success : function(result) {
            console.log("Success, result: " + result['success'])
        },
        headers: {
            // probably won't work but doesn't hurt to try
            'X-Alt-Referer': URL+rids[i]+'&cb='+epoch
        }
    });
}

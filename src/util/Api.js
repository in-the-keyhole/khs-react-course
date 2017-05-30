
// This probably should be done with JQuery
class Api {

   // append this to end of API calls.
   static API_KEY = "&apikey=c338fb8a";

    get(url, callback) {

    var xhttp;
    var _this;
    xhttp=new XMLHttpRequest();
     xhttp.onreadystatechange = function() {
     if (this.readyState === 4 && this.status === 200) {
       _this = this;
       callback(this.status,_this.responseText);
     }
    };
   xhttp.open("GET", url + Api.API_KEY, true);
   xhttp.send();

    return "fetched";

  }


}

export default Api;
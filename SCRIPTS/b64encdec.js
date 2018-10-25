var wsh = new ActiveXObject("WScript.Shell");
var ggg = eb64("Wolfram");
wsh.Popup(ggg);
wsh.Popup(db64(ggg));

function eb64(str){

var lib64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

var bufbin = "";
var b64enc = "";

for (var i = 0; i < str.length; i++)
{
  bufbin += zeropad((8 - str.charCodeAt(i).toString(2).length)) + str.charCodeAt(i).toString(2);
    
  if (bufbin.length % 6 == 0)
    {
       b64enc += lib64.substr(parseInt(bufbin.substr(0,6),2),1);
       b64enc += lib64.substr(parseInt(bufbin.substr(6,6),2),1);
       bufbin = "";
    }
  else
    {
       b64enc += lib64.substr(parseInt(bufbin.substr(0,6),2),1);
       bufbin = bufbin.substr(6,(bufbin.length - 6));
    }  
  if (i == (str.length-1))
    {
       var rufbin = bufbin;
       bufbin += zeropad(6 - bufbin.length);
       b64enc += lib64.substr(parseInt(bufbin.substr(0,6),2),1);
       
       if (rufbin.length == 4)
          {
              b64enc += "=";
          }
       else if (rufbin.length == 2)
          {
              b64enc += "==";
          }
       else if (rufbin.length == 0)
          {
              b64enc = b64enc.substr(0,(b64enc.length - 1));
          }
    }
}

function zeropad (n) {
  var b ="";
  for (var i = 0; i < n; i++)
    {
       b+="0";
    }
  return b;
}

return b64enc;

}


// Decoding from base64 to ASCII


function db64(str){

var lib64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

var bufbin = "";
var b64dec = "";

for (var i = 0; i < str.length; i++)
{

 bufbin += zeropad((6 - lib64.indexOf(str.substr(i,1)).toString(2).length)) + lib64.indexOf(str.substr(i,1)).toString(2);
 if (bufbin.length % 8 == 0)
    {
       b64dec += String.fromCharCode(parseInt(bufbin.substr(0,8),2));
       bufbin = "";
    }
  else if (bufbin.length > 8)
    {
       b64dec += String.fromCharCode(parseInt(bufbin.substr(0,8),2));
       bufbin = bufbin.substr(8,(bufbin.length - 8));
    }
  else if (bufbin.length < 8)
    {
       continue;
    }

}

function zeropad (n) {
  var b ="";
  for (var i = 0; i < n; i++)
    {
       b+="0";
    }
  return b;
}

return b64dec;

}

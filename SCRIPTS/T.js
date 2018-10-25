var bin = "";
var wsh = new ActiveXObject("WScript.Shell");
var sz = wsh.RegRead ("HKCU\\Software\\REGFILE\\SIZE");
var t = parseInt(sz,16);
for (var i = 0; i < t; i++)
{
var vv = i + 1;
var strx = vv.toString(16).toUpperCase();
var stry = zeropad(4 - strx.length) + strx;
var a = wsh.RegRead( "HKCU\\Software\\REGFILE\\" + stry );
bin += db64(a);
}
wsh.Popup(bin);

function db64(str){
var lib64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
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


return b64dec;

}


function zeropad (n) {
  var b ="";
  for (var i = 0; i < n; i++)
    {
       b+="0";
    }
  return b;
}

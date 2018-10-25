var wsh = new ActiveXObject("WScript.Shell");
var fso = new ActiveXObject("Scripting.FileSystemObject");
var folder = fso.GetFolder("c:\\LOL");
var e = new Enumerator(folder.Files);  
var s = "";
for (; !e.atEnd(); e.moveNext())
{
var ex = e.item().name;
var eexx = ex.length;
var ss = ex.substr(6, (eexx - 5));
s += (db64(ss));
}
wsh.Popup(s);

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
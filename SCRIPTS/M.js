var s = 0, gg = "", tt = "";

var wsh = new ActiveXObject("WScript.Shell");
wsh.RegWrite ("HKCU\\Software\\REGFILE\\", 24678, "REG_BINARY");

var fso = new ActiveXObject("Scripting.FileSystemObject");
var self = fso.Getfile("C:\\LOL\\kilo.cs");
var a = fso.OpenTextFile(self, 1, false);


while (!a.AtEndOfStream)
{
s += 1;
gg = s.toString(16).toUpperCase();
tt = zeropad(4 - gg.length) + gg;
wsh.RegWrite("HKCU\\Software\\REGFILE\\" + tt, eb64(a.Read(768)), "REG_SZ"); 
}
wsh.RegWrite ("HKCU\\Software\\REGFILE\\SIZE", tt, "REG_SZ")
a.Close();

wsh.Popup("Success");

function eb64(str){

var lib64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
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
    }  if (i == (str.length-1))
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

return b64enc;

}

function zeropad (n) {
  var b ="";
  for (var i = 0; i < n; i++)
    {
       b+="0";
    }
  return b;
} 
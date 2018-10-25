var fso, self, a, s = 0, buf = "";
var wsh = new ActiveXObject("WScript.Shell");
fso = new ActiveXObject("Scripting.FileSystemObject");
self = fso.Getfile("C:\\LOL\\SAMPLE.TXT");
a = fso.OpenTextFile(self, 1, false);
while (!a.AtEndOfStream)
{
s += 1;
datasave(dataprep(s,a.Read(180)));
}
a.Close();

wsh.Popup("Success");



function dataprep(pointer, chars)
{
var x = pointer.toString(16).toUpperCase();
return "~" + zeropad(4 - x.length) + x + "_" + eb64(chars);
}

function datasave(datax){

var tf = fso.CreateTextFile("C:\\LOL\\" + datax, true);
tf.Close();
}

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
var wsh = new ActiveXObject("WScript.Shell");
var ggg = mash("POTASSIUM", 6);
wsh.Popup(ggg);
function mash(str, passes)
{

var y = "", t = 0, lol = "", c = 0, i = 0, xxxxx = 0;

for (var ilo = 0; ilo < passes; ilo++)
  {
    var arr = new Array();
    c = Math.floor(Math.random()*(str.length + 1));
    i = Math.floor(Math.random()*(str.length + 1));
    
  if (c == i)
    {
      continue;
    }
  var lol = str.substring(c, i);
  xxxxx = str.indexOf(lol.substr((lol.length - 1),1));
  arr.push(lol);
  arr.push(str.substring(0, str.indexOf(lol.substr(0,1))));
  arr.push(str.substr((xxxxx + 1), (str.length - xxxxx)));

  t = Math.floor(Math.random()*3);

  y = arr[t];
  arr[t] = arr[arr.length - 1];
  arr.pop();
  arr.push(y);
  str = arr[0]+arr[1]+arr[2];
  
 
  arr = null;
  xxxxx = 0;
  y = "";
  lol = "";
}

return str;

}

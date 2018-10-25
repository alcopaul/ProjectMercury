var lib = "0123456789ABCDEFGHIJKLMNlOPRSTUWY";
var wsh = new ActiveXObject("WScript.Shell");
var bsx = 33;
var vbx = new ActiveXObject("MSScriptControl.ScriptControl");
vbx.Language = "VBScript";
var num;
var codey = "InputBox(\"Enter A Number...\", \"RADIX33\")";
vbx.Language = "VBScript";
num = vbx.eval(codey);
var resx = reverse(erx(num, bsx, lib));
wsh.Popup(resx);
wsh.Popup(xres(resx, bsx, lib));
function erx(str, bac, lib)
{
var res = "";
if (str == 0)
{
return "0";
}
for (var i = str; 0 < i; i = Math.floor(i / bac)) 
{
res += lib.substr((i % bac), 1);
}
return res;
}
function xres(rts, bsx, lib)
{
var result = 0;
for (var i = 0; i < rts.length; i++)
{
result += lib.indexOf(rts.substr(i,1)) * Math.pow(bsx, ((rts.length - 1) - i));
}
return result;
}
function reverse(s)
{
return s.split("").reverse().join("");
}
// RADIX DAVID BY VP70[NIHFEX] 10/11/2018
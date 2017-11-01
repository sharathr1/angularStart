Set outlook = createobject("outlook.application")
Set session = outlook.getnamespace("mapi")
session.logon

Set o = CreateObject("System.Collections.ArrayList")
  o.Add "Battini, Ganesh (GE Healthcare, consultant)"  'Contact names from Set of users
  o.Add "Sharath R1" 

Set oLogFSO = CreateObject("Scripting.FileSystemObject")

logdir ="C:\Users\Public\OCR\"
rootdir ="C:\Users\Public\OCR\"
logfileName ="Outlook.log"
lastmailfileName ="previousmail.log"
logfile =logdir & strCurDat & logfileName    'Absolute path for log with SystemDate

Set myLog = oLogFSO.OpenTextFile(logfile, 8, True,-1) ' Log file with Unicode char constant -1 
myLog.WriteLine(Now & vbTab & " Task Started ... ")

lastreadFile =logdir & lastmailfileName  
Set previousMail = CreateObject("Scripting.FileSystemObject")
Set lastread = previousMail.OpenTextFile(lastreadFile, 1, False, -1)
Set writeLog = previousMail.OpenTextFile(lastreadFile, 2, False, -1)
lastMailreadTime = lastread.ReadAll
lastread.Close 
'msgbox " Last mail on " &  lastMailreadTime 

Set inbox = session.getdefaultfolder(6) ' inbox is 6
lastHr = DateAdd("h",-1,Now)  
'MsgBox DateDiff("n",lastHr,Now)

For Each m In inbox.items   
    If m.unread  Then 
        'MsgBox DateDiff("n", lastHr,m.CreationTime )
        If DateDiff("n",lastMailreadTime, m.CreationTime ) > 0  Then 
            MsgBox "Inside "
            For Each s In o
                'MsgBox m.CreationTime
                'MsgBox m.SenderName+" This message is sent by required Customer."+s 
                If  m.SenderName = _
                s Then
                    'This message is sent by required Customer."+s 
                    intCount = m.Attachments.Count
                    If intCount > 0 Then
                        myLog.WriteLine(Now & vbTab & "Below files are downloaded from MailBox")
                        For i = 1 To intCount                            
                            filenamea = m.Attachments.Item(i).FileName 
                            myLog.WriteLine("Mail on " &  m.CreationTime & " ; From :" & m.SenderName & " ; File Name :" & filenamea)  
                            ' sample log as :: Mail on 8/29/2017 11:15:24 AM ; From :Sharath R1 ; File Name :GE書式売買契約書1.pdf  
                            ' File downloaded into root Directory                      
                            m.Attachments.Item(i).SaveAsFile rootdir &  _
                                m.Attachments.Item(i).FileName
                        Next 
                    End If
                    'm.Unread = False
                    'commented for testing
                End If  
            Next 
            writeLog.WriteLine(m.CreationTime)     
        End If
    End If   
Next
myLog.WriteLine(Now & vbTab & " Task Complated ... ")
session.logoff

Set outlook = Nothing
Set CaseTitle = Nothing
Set session = Nothing
WScript.Quit

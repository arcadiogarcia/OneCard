@echo off

echo "----Generating .cw"
call clockwork build 
copy "OneCard.cw" "C:\Users\Arcadio\Documents\GitHub\ClockworkSocketIOBridge\"
cd "C:\Users\Arcadio\Documents\GitHub\ClockworkSocketIOBridge\"

echo "----Running socket.io bridge"
call node "index.js" "OneCard.cw"

echo "----Copying files"
xcopy "out/OneCard" "C:\Users\Arcadio\Documents\onecardgame\" /E /H /C /R /Q /Y
cd "C:\Users\Arcadio\Documents\onecardgame\"

echo "----Pushing files to Azure"
call git add *
call git commit -m "Automated commit"
call git push

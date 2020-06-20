@echo off
cd /d "%~dp0"
curl -o .\Wallpaper.json "https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1" >nul 2>nul || (echo Error! & exit /b)
call :readJson bgTH images.0.url .\Wallpaper.json || (echo Error! & exit /b)
echo "https://www.bing.com%bgTH%"
del /f /s /q .\Wallpaper.json > nul 2>nul || (echo Error! & exit /b)
exit /b 0

:readJson
set __toValue=%1
set __importKeyPath=%2
set __importFile=%3
call jj -n -u -i %__importFile% %__importKeyPath% > %temp%\__readJson__.temp || (echo Error! & exit /b)
set /p %__toValue%=< %temp%\__readJson__.temp
exit /b 0
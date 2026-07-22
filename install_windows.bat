@echo off
chcp 65001 > nul
where node >nul 2>nul || (echo Node.js 22 이상을 먼저 설치하세요.& pause & exit /b 1)
where ffmpeg >nul 2>nul || echo [주의] FFmpeg가 PATH에 없습니다. 프록시/파형/렌더링에 필요합니다.
call npm install
call npm run doctor
pause

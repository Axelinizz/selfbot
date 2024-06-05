@echo off

for /l %%i in (1, 1, 2) do (
    start cmd /k node token%%i.js
)

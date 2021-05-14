#!/bin/bash
WTOOLSDIR=/Users/tarvydas/quicklisp/local-projects/wabt/build
${WTOOLSDIR}/wat2wasm test.wat -o test.wasm
#${WTOOLSDIR}/wasm2wat test.wasm -v  # to display code
node main.js

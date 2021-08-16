#!/bin/sh

TS_FILE="$1.ts"
JS_FILE="$1.js"
tsc $TS_FILE
node $JS_FILE
rm $JS_FILE

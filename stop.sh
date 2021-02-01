#!/usr/bin/env bash

PORTS=(4200)
for i in "${PORTS[@]}"
do
   echo  killing process in port: $i
   lsof -i tcp:$i | awk 'NR!=1 {print $2}' | xargs kill
done

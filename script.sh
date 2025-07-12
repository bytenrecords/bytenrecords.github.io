#!/bin/bash

if [ -z "$1" ]
  then
    echo "No commit message supplied"
    exit 1
fi

git config user.name "Megan Li"
git config user.email "liyuchenlyc2022@163.com"

git add .
git commit -m "$1"
git push

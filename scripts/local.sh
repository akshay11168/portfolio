#!/bin/sh
cd .. &&
npm i &&
npm update &&
npm run build:local
sudo rm -rf /var/www/biradarakshay/pf/*
sudo cp -r ./dist/* /var/www/biradarakshay/pf/ &&
sudo systemctl restart nginx
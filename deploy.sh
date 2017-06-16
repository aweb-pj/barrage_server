#!/usr/bin/zsh
git pull
sudo docker stop running-barrage
sudo docker rmi barrage
sudo docker build -t barrage .
sudo docker run -d --rm -e VIRTUAL_HOST=barrage.jtwang.me -e LETSENCRYPT_HOST=barrage.jtwang.me -e LETSENCRYPT_EMAIL=jtwang.me@gmail.com --name running-barrage barrage
#!/bin/bash
docker run -it --rm  -p 80:80 --name webapi -v $PWD:/home nodeenv:latest  /bin/sh 

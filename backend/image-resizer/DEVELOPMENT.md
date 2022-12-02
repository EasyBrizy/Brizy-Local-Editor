# Development

This document describes the process for running this application on your local computer.

## Getting started

### Check if you have installed
- `docker`
- `docker compose`

Once you've installed Docker && Docker Compose, open Terminal and run the following:

- ```docker run --rm -v $(pwd):/app composer install```
- ```docker-compose -f docker-compose.yaml up -d```

You should now have a running server! Visit ```localhost:80``` in your browser.


After you have successfully gone through the development process you are probably going to start a production deployment.

- ```docker build --target=production --tag=image-resizer:latest .```
- ```docker-compose -f docker-compose.production.yaml up -d```


## READMEs

For more info about working with this service, check out these READMEs:

- [README.md](README.md)
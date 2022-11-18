#### Running on-demand with node:

Using `http-server` you can run the editor:

```shell
npx http-server ./
```

#### Running on-demand with docker:
```shell
docker run --rm -v "$PWD":/usr/local/apache2/htdocs/ -p 8080:80  httpd:2.4
```

*Now you can visit the builder on http://localhost:8080 and http://localhost:8080/preview for compiled page*


#### Development
This repository use lerna, required
- npm >= 7
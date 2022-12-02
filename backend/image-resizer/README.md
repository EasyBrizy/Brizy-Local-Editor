# Image Resizer

Image Resizer is a tool for resizing an uploaded image.

### Resizing an image by a binary file
```
POST http://localhost:80/resize
Content-Type: multipart/form-data; boundary=WebAppBoundary

--WebAppBoundary
Content-Disposition: form-data; name="image"; filename="test.png"

< ./path/to/file/test.png
--WebAppBoundary--

--WebAppBoundary
Content-Disposition: form-data; name="filter";

iW=400&iH=any
--WebAppBoundary--
```

### Using as a ```getMedia``` url in [Editor Configuration](https://github.com/EasyBrizy/Brizy-Local/tree/master/packages/demo)
```
http://localhost:80/media
```
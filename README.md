# New Company

## Getting started

First, we need to make sure we have the required Docker images available. We'll build them!

### Website

```
cd web && \
docker build . -t new-company/web:latest
```

### Web API

```
cd api && \
docker build . -t new-company/api:latest
```

## Going live! ...locally

```
docker compose up -d
```

Go and see:
- http://www.localhost
- http://api.localhost

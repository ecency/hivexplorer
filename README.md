# Hivexplorer

Hive blockchain explorer built with <3 by [Ecency team](https://ecency.com)

## How to start development instance

Clone the project

```bash
cd hivexplorer
yarn
yarn start
```

## Deploy production

```bash
yarn
yarn build
yarn start:prod
```

## Docker deploy

You can use docker files to deploy instance on your own server.

```bash
docker pull ecency/hivexplorer:latest
docker stack deploy -c docker-compose.yml -c docker-compose.production.yml hivexplorer
```

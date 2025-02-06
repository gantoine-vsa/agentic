# Agentic

n8n with PostgreSQL running in docker compose with [OrbStack](https://docs.orbstack.dev/docker/domains)

## Start

To start n8n with PostgreSQL simply start docker-compose by executing the following
command in the current folder.

**IMPORTANT:** But before you do, copy [`.env.example`](.env.example) as `.env` in project root directory,
then change the default postgres username and password in the [`.env`](.env) file!

```shell
docker-compose up
```

To stop it execute:

```shell
docker-compose down
# if you want stop and also want to remove data
docker compose down -v
```

## Configuration

The default name of the database, user and password for PostgreSQL can be changed in the [`.env`](.env) file in the current directory.

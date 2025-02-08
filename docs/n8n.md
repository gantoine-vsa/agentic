# n8n

Running **n8n** workflow automation tool in `docker-compose` with [OrbStack](https://docs.orbstack.dev/docker/domains)

## Start

To start **n8n** with **PostgreSQL** simply start `docker-compose` by executing the following
command in the current folder.

> [!IMPORTANT]  
> But before you do, copy [`.env.example`](.env.example) as `.env` in the project root directory,
> then change the default postgres `username` and `password` in the [`.env`](.env) file, if you prefer.

```shell
docker-compose up
```

Access n8n dashboard at:

```shell
open https://n8n.agentic.orb.local
```

> [!NOTE]  
> First time when you access, you will see: `Set up owner account` page.
> Enter some fake data, then you will be redirected to Dashboard

### To Stop

```shell
docker-compose down
# if you want stop and also want to remove data
docker compose down -v
```

## Configuration

The default name of the database, user and password for PostgreSQL can be changed in the [`.env`](.env) file in the current directory.

## Reference

- [Deploy n8n with Docker Compose for Automating AI Workflows](https://autoize.com/deploy-n8n-with-docker-compose-for-automating-ai-workflows/)
- [Self-hosted AI starter kit](https://github.com/n8n-io/self-hosted-ai-starter-kit/tree/main)

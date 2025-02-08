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

Access qdrant dashboard at:

```shell
open https://qdrant.agentic.orb.local/dashboard#/welcome
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

### For Mac users running OLLAMA locally

If you're running [Ollama locally](./ollama.md) on your Mac (not in Docker), you need to modify the `OLLAMA_HOST` environment variable in the n8n service configuration in [compose.yaml](../compose.yml) .

Additionally, after you see "Editor is now accessible via: <http://localhost:5678/>" in docker compose logs:

Head to <https://n8n.agentic.orb.local/home/credentials>  
Click on "Local Ollama service"  
Change the base URL to <http://host.docker.internal:11434>

> [!NOTE]  
> If you are using [LM Studio](./lm-studio.md), use [OpenAI Model integration](https://n8n.io/integrations/?q=openai) and use lms url: <http://host.docker.internal:1234/v1> URL instead of ollma url: <http://host.docker.internal:11434>

## Usage

Quick start and usage

- Open <http://n8n.agentic.orb.local> in your browser to set up n8n. You’ll only have to do this once.
- Open the included workflow: <http://n8n.agentic.orb.loca/workflow/srOnR8PAY3u4RSwb>
- Select **Test workflow** to start running the workflow.
- If this is the first time you’re running the workflow, you may need to wait until `Ollama` finishes downloading `Llama3.2`.

## Reference

- [Deploy n8n with Docker Compose for Automating AI Workflows](https://autoize.com/deploy-n8n-with-docker-compose-for-automating-ai-workflows/)
- [Self-hosted AI starter kit](https://github.com/n8n-io/self-hosted-ai-starter-kit/tree/main)
- [Local AI with Docker, n8n, Qdrant, and Ollama](https://www.datacamp.com/tutorial/local-ai)
- [Extract personal data with self-hosted LLM Mistral NeMo](https://n8n.io/workflows/2766-extract-personal-data-with-self-hosted-llm-mistral-nemo/)

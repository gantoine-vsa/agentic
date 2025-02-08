# OrbStack

```shell
orb logs docker
orb config show
docker context show
orb restart docker
orb migrate docker
# If you're running low on disk space, you can clear the cache manually:
docker builder prune -a
```

## Side-by-side

```shell
# Switch to OrbStack
docker context use orbstack
# Switch to Docker Desktop
docker context use desktop-linux
```

Add docker registry mirror if needed in Corp env:

```json
  "features": {
    "buildkit": true
  },
  {
    "registry-mirrors": ["https://my-docker-repo-mirror.my.company.com"]
  }
```

## Networking

How to get all ip addresses on a docker network?

```shell
docker network ls
docker inspect agentic_default
```

## Reference

- [Multi-platform builds](https://docs.orbstack.dev/docker/images)
- [Switching from Docker Desktop to OrbStack on macOS](https://betterstack.com/community/guides/scaling-docker/switching-to-orbstack-on-macos/)
- [OrbStack networking](https://docs.orbstack.dev/docker/network)

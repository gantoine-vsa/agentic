# LM Studio

```shell
lms server start # To start the local API server.
lms server stop # To stop the local API server.
lms status #  To check the status of LM Studio
lms ls  # To list all downloaded models
lms ps # To list all loaded models available for inferencing
lms get # Searching and downloading a model from online.
lms log stream # Log operations
lms unload --all # To unload all models
```

## Setup

```shell
# example searching and downloading a model from online
lms get "qwen2.5-7b-instruct-mlx"
```

## Run

load your preferred model (which you already downloaded) and run the LMS server.

```shell
lms load qwen2.5-7b-instruct-mlx
# lms load deepseek-r1-distill-qwen-7b
# lms load pixtral-12b
lms ps
lms server start
lms status
lms log stream # optional
```

Stop LMS Server

```shell
lms unload --all # To unload all models
# lms load qwen2.5-7b-instruct-mlx
# lms load pixtral-12b
# lms load deepseek-r1-distill-qwen-7b
lms server stop
```

Verify the server API is `http://localhost:1234/v1/models` accessable.

## Reference

- [lmstudio CLI](https://github.com/lmstudio-ai/lms)

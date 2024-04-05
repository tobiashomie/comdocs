---
title: "Install Commune"
---
### Setting Up With setup.py

Install setuptools:
If you haven't already installed setuptools, you can do so using pip:

```bash
pip install -r requirements; pip install -e .
```
or 
```bash
./start.sh
```

### Setting Up Commune With Docker

Install Docker: If you don't have Docker installed on your system, download and install it from the official Docker website: [https://www.docker.com/get-started](https://www.docker.com/get-started).

Clone the Commune Repository: Open your terminal or command prompt and clone the Commune repository from GitHub:

```bash
make up 
```

or 
    
```bash
docker-compose build
```

Start Commune: Once the Docker container is built, start Commune by running the following command:

```bash
make start
```
or 
```bash
docker-compose up -d # -d for detached mode
```

To enter the docker container do, and do the following

```bash
make enter
```
or 
```bash
docker exec -it commune bash
```

Then run the following command to sync the network

```bash
c ls
```





To exit the container

```bash
exit
```

Sync Commune with the Network: Inside the Docker container, run the following command to sync Commune with the network:

```bash
c sync
```

Congratulations! Commune is now set up and running inside a Docker container.

## Note:

This repo is on the cutting edge of experimentation, so there may be some hiccups along the way. If you're primarily interested in using the core features of the protocol (such as intuitive cli) or seeking a more lightweight implementation, consider installing the [Communex](https://github.com/agicommies/communex) package.

---
title: "Navigate the Network"
---
## Setting a network

- local: your local namespace 
- subspace : the subspace namespace
```python
# SETTING A NETWORK 
for net in ['local', 'subspace']:
    c.setnet(net)
    c.print('Setting to ', c.network())
```

## Namespace

A namespace is a map of the name of the module with the address (str->str)
```python
namespace = c.namespace(network='local')
c.print(namespace)
```

If you don't set the network, it will default to `c.network()` which is stored in the `module.yaml` config

```python
c.setnet('local')
c.servers()
```

```python
for network in ['local', 'subspace']:
    namespace = c.namespace(network=network)
    c.print(f'Modules found in {network}', len(namespace))
```

## Servers (Keys of the Namespace Dictionary)
```python
servers = {}
for prefix in ['model', 'dataset']:
    servers = c.servers(prefix, network='local')
    c.print(f'Found {len(servers)} servers that start with {prefix}', color='white')
    c.print('Servers: ', servers[:10], '...', color='purple')
```
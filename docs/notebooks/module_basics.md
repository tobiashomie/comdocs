---
title: "Module Basics"
---
# The Module

The module is a collection of functions that are reusable and can be added and removed by the developer.

```python
import commune as c
# for jupyter notebook please use c.jupyter() as this will allow the notebook to display the output
c.jupyter()
```

### The Module

The module is a collection of functions that are reusable and can be added and removed by the developer.

```python
# This is the module
c.Module
c.module('module') # or c.m('module')
```

It has a bunch of lit functions that you can add and remove, to your liking.

```python
storage = c.module('storage')
```

```python
import commune as c
from typing import *
import streamlit as st
import json

class Storage(c.Module)
```

## The module config

The module config is represented as a Munch object, which is a dictionary that can be accessed as an object. There are two ways to define the config.

1. with a YAML file

```yaml
a : 1
b : 2
c : 3
```
where the file is named `{module}.yaml` where `{module}.py` is the name of the module file.

2. Without a YAML file

```python
class Config:
    def __init__(self, a=1, b=2, c=3):
        ...
```

```python
storage.config()
```

```python
storage.serve()
```

```python
client = c.connect('storage')
k,v = 'test', 'hey'
client.put(k, v)
assert client.get(k) == v
```

```python
c.serve('model.openai')
```

```python
c.call('model.openai/generate', 'hey how is it going?')
```

```python
model = {}
model['local'] = c.module('model.openai')()
model['remote'] = c.connect('model.openai')
model = c.munch(model)
response = {}
response['local'] = model.local.generate('what is 2+2?')
response['remote'] = model.local.generate('what is 2+2?')
response
```
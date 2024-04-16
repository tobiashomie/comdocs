---
title: "Run a Model"
---
```python
import commune as c
c.jupyter()
```

```python
# search modules for the openai module
c.modules('model.openai')
```

```python
model = c.module('model.openai')(api_key='YOUR_API_KEY')
```

```python
model.forward('whadup')
```

```python
# oops it was the wrong key, lets add the right one
model.set_api_key('sk-gp5QMj')
```

```python
model.forward('whadup')
```

```python
model.serve(tag='whadup')
```

```python
client = c.connect('model.openai::whadup')
```

```python
client.forward('whadup')
```

```python
# get the schema of the server
schema = client.schema()
c.print(schema)
```

```python
client_info = client.info()
c.print(client_info)
```

```python
c.kill('model.openai::whadup')
```

```python
c.pm2ls()
```
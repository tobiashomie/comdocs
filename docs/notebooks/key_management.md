---
title: "Key Management"
---

```python
import commune as c
c.enable_jupyter()
```

```python
# add a new key
c.add_key('new_key')
```

```python
# remove a key
# we will add and remove a demo key
c.add_key('demo')
assert c.key_exists('demo') == True
c.rm_key('demo')
assert c.key_exists('demo') == False
c.keys('new_')
```

## Save and Load Keys

```python
c.save_keys()
```

```python
c.get_balance('fam')
```

```python
# get the stake
c.get_stake('fam') 
# or 
key = c.get_key('fam')
key.get_stake(key.ss58_address)
```
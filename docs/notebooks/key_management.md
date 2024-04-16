---
title: "Key Management"
---
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
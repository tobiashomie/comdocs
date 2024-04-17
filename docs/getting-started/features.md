---
title: "Key Features"
---


## Module Filesystem

The `module.py` file serves as an anchor, organizing future modules in what we call a module filesystem. For example, you can store a dataset module in `{PWD}/dataset/text`, which will have a path of `dataset.text`. The current limitation is to have a config where the name of the config is that of the Python object.

## Subspace

![Example](https://camo.githubusercontent.com/3b6bacbeeb90e27d62f7133b7cd1e1a7041f56ce1f6fcf004418f62bb9f1401c/68747470733a2f2f64726976652e676f6f676c652e636f6d2f75633f6578706f72743d766965772669643d315a71434b2d72424b463270384b46723544767546634a615058644d6349536c54)

Subspace is a blockchain that Commune uses for several purposes:

- **DNS for Python**: Decentralized Name Service for deployed objects.
- **Evaluating Performance through Voting**: Stake-weighted voting system for users to evaluate each other instead of self-reported networks. This provides users with

## Register On The Chain

To register a module, do the following

```python
c register {module_path} name={module_name (OPTIONAL)}
```

The module path is specified

Here's the revised step-by-step guide on how to create a dope module and register it on the blockchain:

1. **Create Your Module**: Start by creating your own module in Python. It can be anything you want - a model, a service, or some sick functionality. Make sure your module is ready to rock and roll.

2. **Import Commune**: Import the Commune library into your Python code. You'll need it to create and register your module.

```python
import commune as c
```

3. **Define Your Module Class**: Create a class that represents your module. Make sure it inherits from `c.Module`.

```python
class MyDopeModule(c.Module):
    def __init__(self):
        super().__init__()
        # Your module initialization code goes here

    def some_cool_function(self):
        # Your module's cool functionality goes here
        return "I'm bringing the heat!"
```

4. **Register Your Module**: Now it's time to register your module on the blockchain. You have the option to specify a custom name and tag for your module. If you don't provide a custom name, the module will default to the module path. The tag is optional and can be used for versioning or categorization purposes.

To register your module with a custom name and tag, run the following command:

```bash
c register my_module_path name=my_module tag=1
```

Replace `my_module_path` with the actual path to your module file (without the class name), `my_module` with the desired name for your module, and `1` with the desired tag. This will register your module on the blockchain with the specified name and tag.

If you prefer to use the default module path as the name, simply omit the `name` parameter:

```bash
c register my_module_path tag=1
```

# Development FAQ

- Where can i find further documentation? This repository folder, [Doc](https://github.com/commune-ai/commune/tree/main/docs).
- Can I install on Windows? Yes, [Guide](https://github.com/OmnipotentLabs/communeaisetup).
- Can I contribute? Absolutely! We are open to all contributions. Please feel free to submit a pull request.

---
title: "Create a Subnet"
---

# Create a Subnet

:::tip Note to miners and validators
You **do not** have to create a subnet to mine or validate on the Bittensor network. See the [Checklist for Validating and Mining](./checklist-for-validating-mining.md) for information on mining and validating on Bittensor.
:::

Before you create your first subnet, we strongly recommend that you follow the below order:
1. First create a subnet on your local, and develop and test your incentive mechanism on the local subnet. 
2. After you are satisfied with it, next create a subnet on the Bittensor testchain, and test and debug your incentive mechanism on this testchain subnet. 
3. Finally, only after you completed the above steps, create a subnet on the Bittensor mainchain. 

## Immunity period for a subnet

The notion of [immunity_period](./subnet-hyperparameters.md#immunity_period) applies to a subnet also. It works like this:

- Subnets are competitive and only 32 subnet slots exist in the Bittensor network. As a result, subnet performance is continously monitored, poor-performing subnets are deregistered and the registration cost will be returned to the deregistered subnet owner. 

- A subnet's performance is measured using the emissions earned by the subnet: The lower the emission earned by the subnet, the poorer is the subnet's performance. See [Emissions](../emissions.md).

- Furthermore, any subnet has an immunity period of `7 * 7200` blocks, which is 7 days. See the line of code that defines [SubtensorInitialNetworkImmunity](https://github.com/opentensor/subtensor/blob/52882caa011c5244ad75f1d9d4e182a1a17958a2/runtime/src/lib.rs#L660). This initial network immunity period starts when the subnet is created and its `netuid` is issued to the subnet owner. During this immunity period the subnet is not under any risk of being deregistered. 

- However, at the end of this immunity period, if the subnet's emissions are the lowest among all the 32 subnets, then this subnet will be deregistered when a new subnet registration request arrives. If there are several subnets with the lowest emission then the oldest subnet among the lowest will be deregistered first, and then the second oldest, and so on. 

:::tip A newly created subnet starts from zero emission
:::

## Prerequisites

The idea here is to have autonomous trading agents deployed that have their own “personality” yet are able to communicate with each other such that each agent *may* change its behaviour based on what others are doing with the expressed goal of the good of the whole. 

I am not sure if such a style of trading exists, maybe I am the first or one of the few to think this way. Yes people deploy different trading strategies at the same time that may be complimentary to each other but in contrast to this the idea here is to have these strategies communicate with each other and thus by their decisions made as a result it is hard to know what state any agent would be in just by looking at the localized input that that agent consumes. The focus then is on how each agent modifies its behaviour and less on the direct attempt of each agent to maximize its pnl.

### Other names for this style of trading
* Emergent Trading
* Network Trading
* Systems Trading
* Adaptive Complex Trading
* Complex Systems Trading
* Hive trading

### Goal
The goal on the macro level is LR-BM-F-A:
* Low risk
* Big money
* Fast
* Automated

A distinction must be made between macro, the overall system and micro, each agent and its trades. Each agent should be doing its part in order to achieve the macro goals. Obviously they will try to each do so individually but it will often be the case that they may actually go modify their local actions in order to aid the efforts of other agents and in so doing better achieve the global goals.

Agents could be deployed by each goal. However agents could also deployed by strategies:

* Cash and carry
* Directional
* Arbitrage
* Triangular arbitrage
* Random up down
* Market Making
* Options trading
* Move contract trading
* Support and Resistance Trading
* Trend Following
* Range trading
* Volatility trading
* Relative Strength
* Momentum
* Funding
* defi
* Scalp

Or both by goal and strategies where there are manager agents that adjust the behaviour of other agents in order to fulfill different legs of the goals. Or simply agents that track the goals and broadcast messages about them to the network

Agents could also be deployed around assets. It may also be that we deploy a long agent on an asset and/or a short agent and they work independently but taking cues from the other(s)

### Communication
Each autonomous agent may take the actions and outcomes of other agents into consideration but each makes decisions about its trading independently. Thus each agent broadcasts its actions and outcomes but does not issue commands to other agents (unless we employ a hierarchy of agents). 

The messages that can be sent as far as I can tell are as follows:
* Open Long/Short (how much, stop target, profit targets, exit condition, add condition, hedge condition)
* Close (long / short re-enter conditions with their targets, etc.)
* Increase
* Decrease

### Actions
Each agent can take the following actions:
* long / short -> open / close / increase / decrease

### Simulation
Agents simulate their trades regardless of if they actually take them. This gives us a track record for that agent to help decide how to disperse funds, manage risk, etc. This would run from historical data to the present

### Points system
Agents can gain or lose points depending on their results. This point system can be used to distribute funds and manage risk

Now the million dollar question is - How do we make agents adjust their own behaviour based on the actions of other agents, in such a way as to better achieve our goals. Better than if each agent just went about its business without any care for what the others are doing. How to make it so that the emergent properties of the network are LR-BM-F-A beyond the sum of its parts. Sum here does not simply refer to the absolute measure of each goal but rather the fact that the actions of each agent contribute in such a way that each goal is enhanced overall, getting stronger, not just at any point but as a system going forward over a large number of trades

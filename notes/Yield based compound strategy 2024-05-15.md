The idea here is primarily to protect an initial investment and use yield from it to compound returns

* Say you have 10k
* We have 2, possibly 3 pots ->
  1. **GREEN-POT** -> Cash pot that produces a yield
  2. **ORANGE-POT** -> Asset pot that ideally also produces a yield
  3. **BLUE POT** -> Possible margin cash pot to make sure we cannot be liquidated (also producing yield)
1. This is the main rule -> Have a target GREEN:ORANGE ratio. Take the yield and funnel it into each pot accordingly. You never sell either side, simply distribute yield
2. If margin is required then have a BLUE pot and change the ratio to GREEN:ORANGE:BLUE and distribute yield accordingly
   * This ratio may be a little more nuanced in that it may be that we need BLUE = GREEN * 1.33 (33% more than the GREEN pot)
   * The main point though is that we aren't "rebalancing", we are **compounding** i.e. distributing yield into these pots. So the ratio serves a limit to tell us which pot gets the yield at compounding time

### Other
* Notice that we never take away from the yield bearing pot, nor the underlying asset pot. We only can add to them
* If there is a blue margin pot then that can be considered at yield distribution time to place into green and/or orange pot
* Other strategies can be worked in, ideally a directional strategy could be overlayed onto the orange pot or done as its own pot. So let's take our trend following strategy for instance. We could allocate something between say 5 ~ 35% to it and let it rip. It would rebalance when trades are closed and also receive funds from the yield (and/or possible margin pot) when it opens new positions
  * It may be possible to do the directional thing between the orange and blue pots
  * The directional overlay could be for compounding. So we compound all yield into the green (and blue) pots. When we get a buy signal from say the daily (possibly weekly instead or in addition), we sell the overage of the green (and blue) pot into the orange. This way it serves as a long-term DCA
  * It could be used just on the orange pot. So we may have several assets say btc, eth, sol and do directional strategies between them. Worth considering not going to $ with this portion of the strategy
  * We could also make this directional portion never sell at a loss no? Worth thinking about but the basic idea would be to use the directional strategy with its own portion of funds but instead of selling at a loss, it would commit the underlying to pot 2 instead
* Yield in roaring bull markets are higher, possibly much higher as asset prices are higher, $ borrowing increases, volume and volatility increase, etc. So the yield bearing cash pot isn't missing out on the market. Rather, it secures profit and actually makes money, even when the market is chopping and/or volatile
* Since we never take away from the cash or asset pot, this puts us in an interesting trade off. We lose the ability to go in and out and try to make profit/limit loss. However, we forego that complexity, gain simplicity as we only focus on continually make each pot bigger and bigger. It is a form of risk management itself as we may ride a market down but the ever increasing size of the pots lessens the amount we are losing and increases our gainz when the markets are roaring upwards
### Questions
* How to back-test?
* How to figure out the right split percentage-wise?
* Directional component or no?
* Distribute yield?
  * by time (periodically)
  * by space (threshold)
  * directionally
  * combo?
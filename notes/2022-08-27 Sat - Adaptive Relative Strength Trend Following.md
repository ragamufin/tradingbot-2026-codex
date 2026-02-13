* Layered simplicity vs complex
* One strategy across multiple time frames
* One relative small brick size to avoid noise
* bollinger bands and custom ATR (for renko) to make the strategy "adaptive"
* Adaptive trend following (with hints of volatility/momentum) using the relative strength of the simulated gains of the strategy across the liquid assets of the market
* 3's.
  * Low
    * 1 minute
    * 30 minute
    * 1 hour
  * Medium
    * 4 hour
    * 12 hour
    * 1 day
  * High
    * 3 days
    * 1 Week 
    * 15 days
* Every Tuesday pick the 3 assets that perform best across all the above time frames in terms of R:R. Only 3 assets. Rebalance only if any asset not in the current list is beyond a certain threshold in gains. Rebalance in 3's, meaning on any given Tuesday only a 3rd of the funds will move over to a different asset. We may actually end up trading several more than 3 with each week if the list jostles around. Test and smoothen
* At the end of the max time for the "Low" period, check which of the 3 has time frames for that period had the best result. Can use an ema here. Rebalance to that time frame if it is beyond a certain threshold. Rebalance in 3's as in the previous point
* Dive in head first, don't plan/think too much. Test, test, adjust, consume data and see where it takes you
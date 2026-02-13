* Not to be confused with the indicator of the same name
* I’ve been mulling over this strategy for a while and have some scripts already testing it. Because it involves scanning and tracking the whole market, at least all the assets available on at least one exchange, it’s a bit hairy to actually test
* Something Francis Hunt (The Market / Crypto / Reset Sniper) said in a video the other day hit home with me. Index funds usually make gobs of $. The kind of index funds he was alluding to were exactly these kinds of indexes that deploy money into the strongest assets and then rebalance
* So I’ve thought of the quickest route to get this working, since it kind of has to be working if even partially, in order to know if it even works
* The idea here is relatively simple, pun intended -> Deploy funds into the strongest assets of the market, rebalance

### The strategy
1. Split funds into slices, let’s say 5
   * Each slice is allocated to one of the top 5 strongest assets
   * There is a cut-off that determines if an asset is even profitable. So the top 5 must meet that criteria. If there are not 5 then for each spot that is lacking, it is allocated to $
2. Rebalance based on renko brick-based style moves of $btc
   * Whenever $btc makes a new brick, rebalance
   * This should be tested but rebalance can be done progressively, meaning instead of say #5 gets replaced by a new asset and we sell the old and buy the new, we sell a 25% of the old to buy the new. On each subsequent $btc brick, if the new is still there and the old should still be old, do another 25%

### Tasks
- [x] CCXT library or direct api sdk or calls to Kucoin to get and track data
- [x] ema of price to use as strength indicator. The % distance above the ema is the strength
- [x] ema of volume / liquidity to limit to a list of assets that are liquid enough
- [x] Smart renko styled bricks that are done as a % of price or based on ATR or some volatility metric. Rebalance checks are done on new bricks
- [ ] Track pnl, comparison to buy and hold, fees, etc.


### Questions
- [ ] Better to have normal time-based ema’s or brick-based
- [ ] Better to rebalance in one go or partially
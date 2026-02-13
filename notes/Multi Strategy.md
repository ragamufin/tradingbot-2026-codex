This strategy is based on ideas from looking at the detrended MA indicator I just created. If this indicator is indeed profitable on most time frames, renko bricks and assets then we can cobble together the following in order to really ramp up profits

### Overview
* Use multiple time frames
* Multiple settings for the indicator such as 1 trading strategy with KAMA for a certain length, another for another length, one with HULL, etc.
* Each signal applies to its own pool of funds. Simply change the target asset ratio that we should go towards and make trades to achieve it
* The test here is whether or not combining all these options causes a more profitable outcome with smaller drawdowns since there will be some trades getting in trends sooner than others, some losing while others are winning so that you are at least break-even during chop, etc.
* Multiple assets
* Possibly only close trades that were in profit. Simulate the strategies so that the next signals that are given which would be in simulated profit are taken even if the real account would be at a loss
* Leverage. Since we would have contrary signals, a way could be devised to use leverage with little to no liquidation risk such that profits are increased
* Can it be enhanced with options? E.g. long only while having a quarterly / weekly / daily, etc. put on
* Should there be profit / scale out targets?
* Should some profit be used to put on the side to $ and asset over time

### Algorithm
Possibly using AI or just coding the hell out of this we need to:
* Simulate the strategies even if we aren't taking the trades
* Find correlations, etc. in order to enhance the strategy
* Weights for how much $ to pool to each
* Whether or not the 5 minute should be taking shorts if the 1 hour is long or short
* Whether or not avoiding closing positions in loss is indeed more profitable or smoother
* Whether or not leverage works and under what conditions, e.g. We get a signal to long ETH but we are short BTC, then can leverage be added and when the signal to close the ETH position finishes, we close out any extra matching leverage we added to BTC because of it
* Which subset of the multiple strategies should be used, e.g. HULL + KAMA, 5m, 1h, 1d, renko brick size 0.01, 0.05, etc.
* Whether or not feeding some profits into a side pot of $ and asset improves the outcome. If so then how much to put aside and under what conditions
* Whether or not options improve the results
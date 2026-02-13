### Thesis
* The idea here is to start with the basics and add layers to reduce drawdowns and/or improve returns to create a smoother path to profit
* The most basic layer is one that takes advantage of the chop of the market, which is what it does most of the time, with the goal of increasing both the cash and assets held
* With this trends are also of benefit. Bullish trends increase the value of the asset. Bearish ones, we limit our downside by the fact that we have cash
* An adjustability layer that allows parameters to normalize to the behaviour of the underlying asset versus some fixed way to apply a strategy to everything. It should fit itself to the asset

### Strategy
* Let's say we do 50-50 cash to asset
  * This ratio of course could be somehow adjusted depending on market conditions or personal risk appetite but for now let's assume it's always 50-50 in order to work out the strategy
* We make a fixed grid and wherever we are in the grid we sell some on the line above, buy some on the line below in order to get back to 50-50
* However due to impermanent loss, we **only** sell from buys we have made below the specific sell line. This way if we go down and down and only have buys then we don't rebalance to 50-50 when selling the first line back up but rather we can only sell as much as the lines bought below
* So far there is nothing so different from things I've tried before, let's continue
* Rather than have grids all the way to zero or some cutoff, we simply use some percent of of the cash and we can use it in reverse so that the farther we are away from 50-50 to the downside, the bigger the buys we make. The goal here is to pull our average cost as far down as we can
  * We can also test calculating a fixed amount of the cash and use that same amount for every grid line, all the way down to zero/some low cutoff. This amount adjusts every time we win a trade. This is simpler and worth testing because built into our 50-50 model is the idea that cash cushions the falls anyway and that we are using time and volatility to boost our gainz, hopefully enough to beat buy and hold over a long time regardless of whether the asset ends up at a very high price or vice versa
  * Even with a cutoff we can make it so below that cutoff / 0 we still have at the very least 25% in cash. This diminishes how much we have to play with on each trade but it keeps us from going to zero with the asset if it goes to zero. Over time that 25% should increase enough that even at 0 we would walk away with a profit, ideally
##### Yield
* Ideally both the cash and the asset should be earning yield, so we may need to do this in defi if it is substantial enough to offset fees/commission
* After all, this strategy is one focussed on yield -> half in and out of the market while taking many small trades to make more of both the asset and cash. So if we can get a few percent extra from yield on the cash and assets themselves, it seems to fit in with the idea
##### Momentum
* Now we add in some tricks to juice the gainz based on time/volatility/momentum
* In addition, we use this to help us automatically adjust our parameters to match the underlying asset over time, in a way normalizing things across the different assets
* Here's the idea ->
* We target say making at least 1 trade per hour. We use some sort of algorithm and a look-back period to figure out how to adjust the current upper and lower lines in order to have hit an average of 1 buy + sell per hour over the look-back period
* This includes some kind of threshold so that it's only if we are making too many trades an hour beyond let's say 3 that we need to widen that grid
* This still has the idea that we cannot sell any portion of the asset at a price below where that specific portion was bought
* If we end up with say 3 buys and they don't sell, we don't make another buy until 24 hours after the last buy. After 24 hours we can buy a 4th but only if the lower grid line is below the lowest last buy's line
* We can track the loss on the outstanding 3 buys. Or the value of our account at the time of that buy. We buy the 4th after 24 hours. If it is able to continually sell and buy and maybe the asset goes up such that we are above that metric we calculated, then we can do a 5th and possibly a 6th buy. Thinking about this I guess it needs to work for just 1 buy really as the logic seems like it would need to be the same
* If done right, the idea would be that in trending moves down, we would avoid picking up too much inventory. Sure we would miss out somewhat on sharp dips that recover quickly but we'd be back where we started anyway and be ok right? If that dip continues dipping, then we'd be staggered by 24 hours by how much inventory we are picking up
* We can employ a backoff algorithm here for all these sorts of things. That is we buy farther and farther apart in time and distance if each subsequent buy is not being filled. Reverse it as they start to be filled more. Thinking about this, whether a backoff algorithm or not, whatever it is, this is the crux of this 2nd leg of the strategy. The first leg, I have ideas and have tested things here and there. This however, I have not and so it might make sense to start here

### Space-time
It's good that I write things out because if I just do it in thought, I go in circles and inconsistencies slip through so easily. Writing it out, even if convoluted, I can read it back, edit it, it's sort of *coding with prose*
* So it seems that this idea of an algorithm, let's think of it simply now as a back-off algorithm, is what I'm really grasping at. It would function across space and time. Space being price and the ebb and flow of the market through it, hence this whole grid, constant mix thing. Time being more momentum and volatility. How often are trades happening, which is really just what is happening to my pnl over time. This algorithm, just needs to be able to adjust parameters in order to get trades over space to bend towards some happy path and likewise, trades over time, to bend to that happy path
* So we need to be able to define that "happy path", it's a vector, not a scalar value. A linear regression with the most important metric being its slope
* This happy path is defined for space and time separately and then possibly a 3rd one that combines both
* So much of this wreaks of AI, doesn't it? After seeing that thing Cassio showed of the companies using LLM AI's for testing mobile apps, it showed yet another really good use-case for AI in the way I've come to understand is best for the current breed of AI we have. i.e. don't try to predict prices and all that jazz. Use AI to help identify those "fuzzy" things. How do you code an algo to decide this picture is of a dog or cat? It'd be insane. That's kind of what I'm doing here, are we in a trend or ranging? Which best upper and lower line would have allowed me to make 1 trade per hour for the last 24 hours, 3 days, week, month. It's harrowing. No, use AI for exactly these "fuzzy" things, instead of having to tell some algo that the id for the sign in button is x or that the path to it is blah -> blah -> button, just use an AI that you can easily say to "press the sign in button"
* So instead of you trying to figure out the *how* of the specifics which is unending. Figure out the *what* from a high level then provide the AI with the abilities to do the interactions you want. So for the mobile app it could involve a way to inform the AI of what is on the screen, in as general a way as possible then how to interact with them. Then the simple prompt of "fill in the username and password then click the sign in button" becomes much easier. Everything you do for any screen goes into a bag of possibilities you can do for all screens
* This means for trading, you need to just write the broad stokes then figure out creative and simple ways to get the AI to do them, offloading the reasoning part to all the work that has been done to make AI so good already. So write the algo in as high a level as possible. 
* Let's give it a try. Either way, it's useful for you even if you *don't* use AI

##### Script
* Your goal is to start with a ratio of 50% cash to asset
* As prices fall you will rebalance to this 50-50 ratio by buying the asset with the cash
* You will sell a portion of each buy at a higher price in order to get back to 50-50
* Don't make another buy unless either
  * The current buy closes or
  * we are currently trading in such a way that had you made another buy in the `last x time periods` (this also should be figured out by the AI) it would have sold higher
* Space your buys out so that you can make between `min` and `max` number of buys over `last x time periods` for a minimum average `x` profit per trade. 
  * If not possible then don't trade

##### Ruminations
* Yes, that *script* was rough but it gets the idea, we'll get better at it. Start rough then chisel away
* It's clear that coding this general trading AI beats the pants of trying to code myself all the specifics of a trading app that allows me to back-test all manner of ideas willy nilly
* Instead if I get this done well, then I can exponentially test ideas, have the AI itself show me how to improve them, etc. I can test lots and lots of ideas
* I can put strategies into production super fast
* It'd be able to manage a portfolio, rebalancing, etc. way way more efficiently and effectively than anything I could do myself
* It'd inherently be adjusting "parameters" as needed, when needed, way better than anything I could code in a reasonable amount of time 
* I think I'm on to something
* Next step would be then to work out roughly, emphasis on roughly, just want I would need to provide this AI in order for it to go from a built in prompt script + data => set of actions to do at any given time
* Fuck, just realized I'm doing all this syncing of orders and balances but fuck man, if I use AI, I can feed it a script, then feed it the balance data as balances are adjusted, order data, etc. and it can accurately do it. Yes it's work to setup but it's just work around getting the AI to understand what I want, keeping a context going and possibly making the data structures it needs to fill out. Wow. Much wow
* This is all well and good, but are we doing this?
### Thesis
* btc went from 70k to 15k, a drop of close to 75%+, requiring a move up back to highs of 466% i.e almost a 5x gain
* 20k to 3k -> 85% drop, back to the top 666% almost a 7x
* So let's say we track the highest point on the daily since the beginning
* Measure a certain % down from there, let's say 65%
* Our grid will be from that high to that % down
* To distribute 100% of our money along this grid we can put 100/65 = 1.54. So we can say that for every 1% down for btc we can put 1.5% of our $ in
* So let's say btc is at 30k. 1% of that is $300. So $29,700 is next lowest grid line
* We buy with 1.5% of our funds there. If we have 10k that's $150
* If btc rises back to 30k, that's 30000/29700 = 1.01 ~=> 1% which makes sense. We would make 1% on our $150 = $1.5
* It doesn't seem like much but 
  * how many times does btc go back and forth $300? Quite a few right?
  * You're doing this every 1% down, so at 
    * $29,700
    * $29,403
    * $29,108
    * $28,818
    * $28,530
    * etc.
  * You get the idea, each of these make $1.5 as the market swings back and forth, over and over. So if btc goes through these prices what, in a day it could do this 2, 3 times. In a month 3 * 30 = 90 times => $135 * 5 (as it's crossing 5 grid lines) = $675 in a decent choppy month ya? It adds up
  * Now if you're using 50k instead of 10k then we can 5x that as well = $3,375 per month
  * Surely there'll be better months than others. Imagine that time in 2018 when btc stayed at the 6k level for 3 months from September (I checked) and that's not counting the dinosaur pattern it did before that beginning from before I got into crypto in December 2017
* It gets better. This **compounds** homie. 7th wonder of the universe ya?
* So each of those 90 times in that month adds 1% of 1.5% back to the till which then adds to each additional trade. As you know, after a certain period this really starts to **curve** upwards
* The purpose of this strategy is to make $ from what the market does most -> chop
* Further, it compliments my other trend following strategy by picking up pennies throughout chop when things aren't trending or trending slowly
* It works even better still when you consider fund rate farming ya? You have till the bottom of the grid before you are all allocated, more on that later and so you'll be hedged in perps and getting a yield from that as well
* Keep in mind too in defi you can get paid for putting in limit orders. So we don't have to do this at 1% spacing. It could be less, much less and so gather more trades more frequently and make some gainz from making markets
  * It's important to stop and consider here that a basic trade off we are making with this strategy is that we are ok to hold bags of inventory of the coin. The market can walk itself down and eventually all of the grid lines above will have that $150 (or $750 at 50k) of our $ on them. We are betting on the market coming back. After all, this is a mean reversion strategy. We are betting on time, to gather pennies. We are betting that there'll be some super volatile times when we can get 5 to 10 grid lines (i.e. 5 - 10%) crossed 50 times in a day. We've seen this before just watching the computer screen haven't we? With more granular grid lines we can can many more trades and we are ok with that because we want the pennies and we don't mind holding inventory to get it
  * In short, we are going for low margin profits but much greater volume of sales. Microsoft and Android, not Apple. This should really lend itself to complimenting our trend trading strategy, especially as this may serve as margin for that
* Let's continue to the last part. We don't compound all gainz back into the strategy. Instead, we take a teeny tiny portion and leave it in dollars and a teeny tiny portion and leave it in btc. Not much but it adds up
* What's the big deal, well, now you're accumulating free cash and coin. A little goes a long way and if the market moons this will be worth a lot
* Those other buckets can contribute to yield farming as well further compounding gainz
* It is possible that at some point these 2 other buckets will add up to maybe equal in value to the original, especially if btc moons or crashes (dollar part will be worth a lot more than originally since your main part will be more and more in btc)
* This other bucket could be allocated to the trend following strategy but when I think about it I think it's probably best if it just does its thing and farms the shit out of fund rates when it can
* At that point then a threshold can be employed, meaning, we don't add anything to that other bucket while it is dual to or greater than the main strategy bucket
* Lastly, we can shoot for more than just taking profit at the next grid line, we can do 2, 3, etc. Less trades, higher profit each trade. Intuitively this seems like it would be less advantageous than just doing the 1 step up but you know how intuition can be. The numbers will bear themselves out with testing

### Next Steps
* Slap together a quick tv strategy to see how the numbers add up
* I think it will be somewhat disappointing when you see it but that would mean we can finally put this idea to rest
* Still, it creates a base to throw things at. As so many of my ideas seem to come back to this grid thing so at least having the base coded can serve as a launch point for trying other ideas
* Seeing it in action as well can and will generate further ideas
* **DO NOT** get into some rut of perfection. Do this quick and dirty, speed is of the essence. The only variability you need is in the numbers. Yes, use tv's latest and greatest features but don't get bogged down in YAGNI weeds. Git her done to the point where you can see it because we can't see past this hump of whether or not this is a good idea or not until we see it in action
* At a minimum the settings and requirements are:
  * % down from high
  * Time frame from which to calculate that high
  * % spacing for grid lines
  * Setting for take profit for each buy
  * Setting for placing parts of each profit into separate buckets

### 2024-05-29
**Regime filter**
* What about doing this only if we are bullish according to the trend following strategy?
* It would get out when that strategy gives a sell signal but get out in the ratio we setup so leave some in
* Basically once bullish on the detrended MA, we make the grid from the high to the MA, adjusting as we go
* With this, we get chopped and screwed just like the trend following does but we could be picking up a whole slew of wins along the way building up our cash and asset stash, especially in bullish consolidations
* We would be out of the way when things are truly dropping and when they are in a winning bullish trend we would be picking up lots of wins from pullbacks and the like, always dishing out some profit to the cash and asset stash
* The liquidity would be very very concentrated this way and we solve the problem of what happens if we get out the bottom of the grid. In this way we just exit, possibly taking a loss but relying on the profitability of the trend following strategy to get us back in at better or near the same levels to start grid trading again
* On the higher time frames it would probably get a lot of wins during consolidation but definitely worth testing on the lower time frames because if it works there too it would be grand
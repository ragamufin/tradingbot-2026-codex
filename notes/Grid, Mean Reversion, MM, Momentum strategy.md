### 2024-11-20
* This strategy has a little bit of everything
* It's meant to be a compliment to my existing trend following strategy but it may be able to replace it entirely
* It is sort of a grid system and it will buy a lower line and sell at the upper line so it also plays mean reversion
* It may stop buying positions depending on certain conditions and in that way it is also possibly a momentum and trend following based strategy
* it keeps an inventory and makes buys and sells based on that with grid lines that can be placed tightly throughout the price and so it is also a market making system

### The strategy
* Keep a portion of funds in $ and a portion in the asset, say 50-50
* Create buckets that grid lines will be placed at, say 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
  * Say for the 1% bucket, it means every 1% of price has a grid line. The 2% bucket, every 2%. In this way at the -2% grid line, you'd be buying 1 portion for the 1% bucket and 1 for the 2% bucket
  * gridlines are calculated based on rounding to the higher 10th decimal so that they can be calculated for any price and always be the same number. You can know what the 50th gridline away in either direction is regardless of the current price
  * It may be worth it to not have each buck be fixed but somehow follow a curve
* Buy at each grid line when price moves down to it
  * Conditions may be added so that price must first hit the upper gridline and then it is free to buy the lower gridline
* Sell at the next upper gridline
* Buys and sells will be calculated in order to maintain the ratio of $ to asset
* We can add conditions of Time and Space to the strategy to make it more varied and robust
##### Time
* We may put limit orders in for the immediate upper and lower line (again only if the upper line has been hit)
* However we may wait for a certain period before calculating new lines. Let's say it's 1 hour then we will keep buying and selling the current pair of lines for that hour, if it leaves that bracket we don't do anything until the hour mark hits
* Once the period ends, we calculate the new bracket
* In this way we gain a bit of trend following / momentum by not buying/selling when price runs
##### Space
* We may say that each bucket can at most have a fixed number of open buys that have not sold, let's say 3 but it could be different for each bucket
* After the number of buys have been hit, we do not buy new gridlines until some condition is met
  * At present the only condition I can think of is having  high watermark, i.e. how much is the max equity the account has reached and only allowing buys for a line > max number buys if the account equity would not fall below the high watermark with that buy
  * Originally the idea was to only buy new lines greater than the max if they first go back up and touch the upper line. I think I should code for this permutation regardless however I'm thinking that we should add this by default, a line cannot be bought until prices touches its upper sell line first. It can be bought again of course, once it sells
  * Another option is once the max is met, then move the buys for that bucket down, say skip a line. As each new line is bought we move them further. This could be done even without a max, for instance, the -1% is bought then we don't buy -2% for that bucket but instead -3%. Once that is bought we don't buy the -4 or -5 but -6%. Once that is bought then -10% and so on, adding a spacing on 1 line each outstanding buy. We collapse by 1 line every time one of the buys is sold so that once they are all sold we are back to buying the immediate line below. The code should be setup to make this easy to implement and test so we can see if it's worthwhile
  * While the gridlines can be calculated from 0 to infinity, we may narrow them to within something like a Bollinger or ATR bands so as to maximize liquidity. Tests need to be made about momentum and so on to figure out how to do this best. If the system does well at avoiding picking up buys that go unsold for long while resuming when price starts to consolidate then we may be able to make much tighter bands
##### Rebalancing
* If lines are skipped then the new buys still only buy the amount as if the buys in between were filled. In this way it can benefit from the trend by carrying the asset up or cash down

### Model

##### lines
map buckets to prices to lines / undefined
* bucket ->
  * id
  * price_lines (map<price, line>)
    * price,
    * line
      * buy order
        * amount
        * status
      * sell order
        * amount
        * status
      * upper line -> line
      * enabled

##### General
* base_amount
* quote_amount
* max_equity (high water mark)
* equity
* open_profit
* net_profit
* max_drawdown
* average_profit
* win_rate

##### Methods
* getUpperPrice(bucket, price)
* getLowerPrice(bucket, price)
* getUpperLine(line)
* getLowerLine(line)
* getOrCreateLine(price)

* getInventoryRatio() (calculates ratio of base to quote)
* calculateBuy(bucket, price)
* calculateSell(bucket, price)
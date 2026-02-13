### Algo
* check the current price
* find the line above and below
* does the line below have an order?
  * if yes do nothing
* No ->
* check if the line above has been hit
  * if no do nothing
* Yes ->
* place order on the line below with limit sell

line_upper = line_lower * 1.1

```javascript
function calculate(cp) {
    n = Math.ceil(Math.log2(cp) / Math.log2(1.1))
    upper_price = Math.pow(1.1, n)
    console.log({ n, upper_price })
}
```

### Models
##### Line
* order_id
* price

### TODO
###### Larger bucket of assets and choose a subset
If we can filter well so that it only trades when conditions are favorable then 
* on any one asset there may be long stretches where there is no trade, think XMR
* in that case we could have a larger pool of assets to trade from and while one is not trading another may be green
* We would need some kind of ranking too to choose which assets to trade when several are available OR more ideally we trade all the ones that are ok to trade and split the capital across them all. As always, probably a case of do both
* So let's say we trade a max of 10 assets from a larger basket of 50
  * then 1/10th of the capital will be segregated for each asset
  * if only 3 assets are ok to trade then 3 * 1/10th will be traded
  * if more than the max of 10 are ok to trade then we rank them by some metric for how profitable they tend to be and trade the top 10

##### Accumulation bucket
* As I think about it, the trend following serves as the accumulation bucket
* So for this mean reversion strategy we can stick to just $
* As it makes profit then more $ becomes available to the trend following side
* That keeps things simple
* Ideally we are making enough with this to beat what we would be if we kept an accumulation bucket
* Generally I'd like to do both but if this is crazy profitable then it may make sense to only do this as it'd be beating the market anyway and is likely less risky since I'm primarily parked in $
##### Complement to Trend Following 
* When new entries made on trend following then put on the mean reversion for that asset around the HULL MA
* This way it trades the chop
* If we exit the trend following at a loss then worst case we made some $ from the mean reversion
* If the trend following side goes into profit so that the HULL MA is above the entry price then 
  * we can keep the mean reversion going as it could continue to make profits
  * OR close it and allow any remaining entries to clear since it's done it's job to prevent being eaten by chop
* As the trend following goes in and out if we can algorithmically figure out a range and keep the mean reversion going around that range it could help reduce losses. Maybe. Would need some testing
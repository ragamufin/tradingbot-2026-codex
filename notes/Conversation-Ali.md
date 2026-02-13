Me:
Can you help with ideas for an automated trading strategy

- It is primarily for crypto but it can be for any market, especially volatile ones
- The basic thesis is that let's say btc, it goes back and forth over the same price many times in any short time period and even over long time periods. So if you can afford 1 or so btc then basically buy 1 btc, sell it $1 higher. Do that a million times. The $1 is just for you to get the idea, that number would be calculated based on capital available and frequency of trades
- I'm more interested in gaining $ value but holding inventory in btc is also ok
- I will be using limit orders and on exchanges/dexes like Hyperliquid or Drift (with their new swift protocol) which avoid gas fees and have rebates for makers. In addition I'd primarily hold the asset in spot as collateral and then shorting the perps which generally have a funding rate where longs pay shorts so as to collect that as well
- If the strategy ends up break even for its trades but collects funding and rebates then that is also ok as I want it to have many trades a day when possible, again the thesis is collect $1 1 million times

The above is the first part I need help with

The second part is as follows. 
Since this strategy is sort of like picking up pennies in front of a steam roller, the obvious problem is what happens when I'm short the perps (in equal amount to the spot underlying held) but don't manage to get to target to close the shorts. Here are my current thoughts around this:
- I'm thinking something like a 30-40-30 % strategy. So we swap all cash to btc and then short  30% of the amount of btc on the perps. That means we are 30% in synthetic cash position and 70% in btc unhedged spot. Whenever we have a short signal, we short another 30% giving us 60% short and 40% unhedged spot btc. We close half of those shorts at target which again should be relatively close and easy to hit, often to hit. Rinse and repeat. The idea behind doing ratio split is to make sure have some btc is price runs and also always have cash (due to the 30% synthetic hedge) if it dumps and dumps
- I would do multiple shorts stretched out over time and/or space. Space meaning it could be a grid fit into some volatility-based bands around the price. Time meaning, it could target to short say 10% of total equity every 1 hour at minimum. If that 10% gets to target, take the profit and repeat. Like this I would be interested in using some kind of back-off algorithm or PID-like controller to try to adjust the price ranges to short around depending on the number of trades it gets per x period of time. For instance if we get more than 5 trades an hour then widen the spread we are going for. If no trades in an hour then tighten the spread/grid/whatever. If we get 2 shorts (each 10% of the remaining equity) then don't take anymore until at least one of them closes. We could simulate what happens if we were to continue to take short signals and once the simulation shows that orders would actually start to close again then we would start to take trades again. 

What do you think?

Ali:
08/10/2025

In response to Andrew:
Main points to consider:
-Why combine the two strategies? Fundamentally one is trying to make $1 from 1million trades while the other is trying to make best use of perps and shorts simultaneously benefit from funding rates and hedge against losing value (btc & synthetic cash)

This foundational difference doesn't seem apparent, but as we know from prospect theory (Daniel Kahneman and Amos Tversky in 1979) 
We intuitively behave differently towards loses vs gains, although we are supposed not to or we think we are not.
So I would rather approach the two set of strategist separately not to dilute the two risks together. 
Additionally,  the arbitrary price at which this million trades will be conducted at isn't clear, however in the second strategy the target % and frequency of trades and their relations is mentioned. 

Having 1btc and selling it at original price +$1 and repeatedly doing so a million times, assumes that the price keeps going up each time you buy and sell. 
-However let's say btc hits $130,000 then we buy, when are we going to sell, it's at $130,001, right?
-Let's say that this keeps happening until it hits 140,001 we obviously make $10 gross.
-And buy again at $140,002 then lets say the next time btc hits $140,003 is in 3years 1months 1day, when are we going to sell ? Are we going to sell after 3years 1month 2days ?
Or will we sell somewhere in-between, when btc was falling to $35, 000 ?
This is where the fundamental difference surface itself because the probability that we'll have more upwards movement than downwards is cognitively exaggerated,   
I'm sure you know At $35,000 we'll HAVE TO hit a large number of $1 price increments "consecutively " at best to get to where we were. (i.e 130,000)
However in the terms of perps and shorts (second strategy) we do not need to necessarily. so the risks are different. 
 - if we do decide to say for example when P increases by $1 sell and also whenever it decreases by $1 sell, or even better buy at p= p+$1 and sell at p=p-$0.5 
Then the foundationals do not change, we would still need to have an overwhelming more $1 increases than $1 or $0.5 decreases in the price to even break even.

Again prospects theory might say, we need $2 to compensate for the utility lost of $1.
However,  in our example were a btc at 130,000  price point, and made 10 trades consecutively towards $140,000, and made $10 gross profits. Let's say instead of $35,000 btc goes back to where we started aka $130,000 (from 140,000)
And we made 10 more trades minimum downwards: in every p=$-1 the we would have lost $10 at face value but each time we lost $1 we actually lost more than $1 worth of value relative to our total btc hold.
Because the satoshi value of $1 when Btc is at $140,000 is objectively less than the value of $1 when btc is at $139,000 by the time btc hits the original price of $130,000 the we would have not only lost the $10 gain but more in terms of actual btc value.

Infact buying btc at 130,000 and not doing anything would have been a better strategy here.

Even if it starts trending back up words, to $140,000 and we flawlessly traded every $1 upwards consecutively (which has a very low probability of happening)  btc at $140,000 after making $10 we will still be at a lost and our break-even poin would be somewhere above $145,000 and the more we repeat the trade the more this goes up, if we do 1 million trades this break-even price can go to infinity.  I think you get what I mean.

 ->  possible solutions?
Maybe link the upwards trades to a percentage decrease and a percentage increase, a move relative to a moving average,  or relative to a fixed price periodically (maybe based on one of your strategies). however, most strategies shows unless the market is just going up continuously, for an extended period of time this many trades strategies wouldn't pay off. Just because each trade downwards you lose a bigger chunk of the value.

One could also say calculate the equivalent value of $1 downwards and trade at that ratio each time it goes down, at every price point, in that case too, the less trades the better, because 30-50% downwards are common in the market and happens more quickly than150% increases which generally happens over an extended period of time..

Additionally,  this strategy could be brilliant when there is a meme coin that after lunch or some hype have a parabolic rally,  if conducted right following this move upwards money would be made.

->> for the short and perps strategy,  
My generic understanding is that it should be more of a vibes than a strategy,,,, let me cook...

This means in my head, you'll only make money if you can bet on the general direction of the market, with that said, 
If separated from the first strategy, AND with the understanding that regression to the mean is a natural law of the universe, mind you we are being extreme in that case, because regression to the mean is only a statistical phenomenon. 
Let's say in this hypothetical cult we believe that regression to the mean is a natural law, and we take a moving average (e.i 50days moving average) as our hypothetical mean, and strongly believe that the price of btc will always regression back to this moving average.  Then this will be our anchor,  the determinant of the "vibe", we bet on.
we decide it's downtown if the price is above and upwards If the price is below or the opposite. Makes sense, right ?
However,  we will still have to specify how much price increment or reductions is worth a trade. (Tbh, just writing this it becomes clear that less trades the better)

We will have our anchor to decide the vibes and our price ratio to determine a trade, (you had the second one already figured out)
The anchor is important because making money of perps and shorts generally depends on the markets direction. 
again, many trades we need many winners, (bigger winner vs many winners I'm not sure which is easier to get, but I'm more leaning towards bigger winners than many winners)

The idea of using an algorithm to adjust the range depending on the number of trades made, sounds like looking for moving where there is none, but I think its brilliant in the ability to control how many trades to make in a given time frame, when the market is going crazy downwards or upwards, and even when it's barely moving. 

I think both strategies are worth a try, but separately. 
The second one seemed more thought out than the first, but if combined there is a risk of overlapping the effect of one on the other,  however they could be complementary as part of a tool box, but they don't seem to have the same risks.

Me:
Thanks a lot, this is exactly what I'm looking for. You're a true friend
If you can spare some time next time you're at QB I'd like to go over your points. Easier to do face to face as I'd be writing all day to respond and then you as well

Just a few things to make clear. It's just one strategy not two. If I buy btc first then sell $1 higher, it is the same as shorting btc first and closing the short roughly $1 lower. You've probably never shorted stuff so it's a bit tricky the first time to understand but once you do it you get it. The reason to short is that I can collect the funding rate from perpetual futures because crypto is general long biased and so longs usually pay shorts. It's extra $ received just for having the position. That plus the rebates from takers paying makers plus the lending fee received from platforms like Drift where just having usdc and btc in your account they lend it out to other traders and you get paid. Add all that up and it's just another few pennies picked up

So it's just one strategy

You're spot on about the idea of winning many small trades versus winning a few big ones. It's an age-old problem. Do I sell a bunch of cheap android phones of all varieties and sizes and get many customers making a small profit on each or do I sell just one iPhone in a few select colors and only 2 sizes for an expensive price and get fewer customers as a result but make more $ from each customer

I already have a strategy for handling trends (i.e. the market going to the moon or to hell). It makes money from the big moves over time. It loses most of its trades and loses a little bit of money each time. When it wins, it wins big, those few trades

So the purpose of this strategy I wrote up is to trade as many times a day as possible for as little money as possible over and over. It's not trying to compete with buy and hold. It's primary focus is on $, making a little of it many many times. The idea is not to but every $ that btc goes up, it will have some logic, like you talked about, bollinger bands or a moving average with a window around it, keltner channels, etc. And it will take trades within that window. If the market goes up and up, it won't just follow it up, it will try to buy lower by a bit and it will try not to trade when the market is trending. It will trade more when the market is ranging. It's goal isn't to buy 130k btc and sell 130k + $1 btc and so on until 140k btc. It's predicated on the idea, one that we see in every market, that the majority of the time the market is just ranging

So the goal is more to buy 130k btc and sell 130k + $1 btc, over and over... and over and over, if we go up to 133k btc and the strategy deems that we are trending, it does not keep buying, it waits until the market calms down again and then resumes. Again, this strategy is not concerned with keeping pace with btc value. It's concern is to milk the back and forth of the market as much as possible over and over again

Keep in mind 2 more things... sheesh I said I wasn't going to write much and that we should talk in person but here I go. Sorry

1) We split stuff into 3 pots. btc pot, usd pot and then the trading pot. So if I have 1k, I would literally buy let's say $200 of btc and keep $200 of cash and use $600 for the strategy. Each $1 of profit made, I put 20 cents into to the usd pot and don't touch it. 20 cents worth of btc from the profit is kept and placed into the btc pot. So now we have $200.20 in the usd pot and the same in the btc pot (well worth around the same if the price is around the same). The 60 cents of profit remaining from that trade, goes into the trade pot so that it can take slightly larger trades over time. Make sense?

Why?

we are using the profits to create cushions for the downsides of this strategy. In any given day, if you watch the charts, btc or any market is just ranging. We get lots of these $1 yea... If the market takes off... the btc stash we've built up, benefits from it. We stop trading till it cools down and ranges again, or we space out our orders to take advantage of the volatility. When things are calm we start trading again or we place our orders closer together. On the flip side, let's say we drop off a cliff. Well the usd cushions the blow. If I have $300 of btc when it's at 120k, then if we end up at 60k btc, my $300 missed out on a 50% drop and kept my account from going down 50%, by a decent amount too. Couple that with the fact that the orders are spaced out, then you also don't take as big a hit as buy and hold

Over a long span of time and depending on how well the logic for avoiding drawdowns is, strategies like this do beat buy and hold and by a lot, when you measure the average returns of the market. If you measure to when the market is at all time highs then usually not. If you measure to any other random price then usually it does, if given enough time. btc has almost tripled since you've joined crypto. What's that now like 5 years? In that time it went to 15k and now to ATH and has done a lot of back and forth such that if you were doing this million $1 you'd have beaten buy and hold

2) of that trading bucket, the $600. We don't but $600 of btc in one go. We do something like 1%. haha. We spread the orders out, let's say 10 orders of 1% spread out through the top and bottom of a bollinger band around the average price of btc right now. That's 10% of the trading bucket setup to buy at different price levels in the bollinger band. Make sense. Each order that hits, sells at the higher price point. So we might have 4 orders hit from 120k down to 119k and then as the price comes back up, each order sells at $1 (or whatever we calculate) higher

So even when we pop out the bottom of the bollinger band, we are at most 10% allocated to btc. That's fine, the bollinger bands move down and we keep trading.... we have $600 - $60 = $540 left. We have $60 of btc with an average price at the mid point of the bollinger bands when we set up the 10 trades. Make sense? I'm totally ok with this as I don't mind holding some btc as the strategy goes on, even if we go to hell because this thing will benefit from the ranges and continually add to the usd and btc side pots all the time, it's just better than a naive buy and hold and better than discretionarily trading. Especially again when keeping in mind that I have trend following strategy already running

anyway, back to the point. $540 left. Let's say the bollinger bands now don't even overlap with the previous ones (usually they would), well, I have 10 more price points between these bands and another 10% of the remaining $ is allocated. So $54. Buying btc at lower prices than I did when I allocated $60. Make sense. If we end up lower, fine, this can be done ad nauseum as it's always 10% of the remaining capital. Not that I buy everything in 1 go and pray for $1 profit. 
If the market eventually goes back up... those old orders are still there. I've made profit from the ones I did lower, probably several times over the same price points and now we pumped back up to where we were. The old orders now clear. Buy and hold is at exactly the value they were at before all this but this strategy is at the same value as before plus 5,000 or so trades extra. 2, 3, 5 trades per hour or so taken and making pennies yes but the pennies add up

ok, that was point number 2, just wanted to clear those up before we talk
sorry again for all this, no need to respond, we can talk in person next time

and really man, thanks a lot for reading it and taking the time to think about and respond to it

Ali:

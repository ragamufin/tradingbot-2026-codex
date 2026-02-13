* Looking at the HULL MA on the daily above it doesn't seem to interact with price all that much. The price does chop around it at times but it is a pretty good visual indicator of trend
* The problem is that a simple price cross over strategy is arse. Waiting for confirmation with open+close gets you in and out late
* The idea here is to have a strategy where we have the daily MA but on a lower time frame have some kind of bands (maybe a % of the ATR for that time frame) around the MA. We set stop limit orders to get in and out. So say price is below the MA, we set a stop limit at the MA plus this padding in order to get in. We immediately set a stop loss to get out below the MA minus the padding. This is worth testing
* For the targets we always use the projected MA position for the next daily, roughly projected MA = current MA + (current MA - previous day's MA)
* The idea here is that we may lose a fair bit due to chop around the MA but when it might keep us in the trend and get more of the trend such that we make more than buy and hold by being so tight with the trends
* Additionally, leverage could be employed on the longs based on the stop loss. However, the MA might be sloping down and we'd be moving the stop loss down and down with it, so this could incurr risk much greater than whatever our risk target was. We could employ leverage maybe only if the MA is sloping upward
* It's worth testing with other MA's as well
* Worth testing also combining different time frames and/or MA lengths
* Across assets. It might also be good for long/short pairs trading
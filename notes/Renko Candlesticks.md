Renko charts are awesome. They reduce noise by only painting a brick on the chart when price moves by a specified amount up/down. When the price reverses, it must go twice the specified amount before a brick is painted. Time is not a factor, just price movement. Sometimes however, you want the pros of a renko chart, but on a regular candlestick chart. This is indicator attempts to do just that.

A band is placed around price action showing the upper and lower bounds of what would be the current renko brick. The band only goes up_down when the price action itself moves up_down by the amount you specify. There are several ways of specifying the amount:

Fixed Price Amount: As the name says, you enter the brick size amount, i.e. the amount the price has to move before being in a new brick.

% of Price: This method will calculate the amount the price has to move as a percentage of the price itself. This way as price goes up/down, your brick size will adjust accordingly. Recommended values would be around 1% or less.

% of ATR: This option will make the brick size a percentage of the Average True Range. You can specify the ATR time frame to be different from your current time frame as well as the ATR length. For instance you could be on a 10 minute chart but specify the ATR to be daily with a length of 3 and a percentage amount of 15. This would make your brick size 15% of the average true range for the last 3 days. Recommended values are 10 to 20%.

Use this indicator on any time frame, even the 1 minute as the renko bands span the price action the same way on any time frame easily letting you know whether or not the price has moved appreciably, regardless of how much time has passed.

You can also set alerts easily, simply set the alert to crossing and choose “Renko Candlesticks” instead of “Value”. You will then see the options for the renko upper and lower bounds.

Tested on Bitcoin with the following values:

Fixed Price Amount: 30 ($30)
% of Price: 0.45 (if Bitcoin is $7000 then the brick size would be $31.50)
% of ATR: 15.
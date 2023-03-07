# feature-flicks
Backend Course project


Row component.
Initially I wanted to make a component for every seat and add an event listener to eatch Seat component.
But this would result in many click listeners and many Seat components.
I don't think that seat needs to be in a it's own component since the functionality is pretty limited.
Therefore I come up with another approach. I added a click listener to Auditorium component (the most parent of 
all seats) and fintered necessary targets by className "seat". This needed only 1 click listener therefore less memory usage for the app.

Seats are stored in array with index from 0 to N. Where N is the number of seats. Since first index of a seat is
1, I consider 0 as a service placeholder which should be ignored in the system.
[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/tTztJ7yI)
# Wildcard Project

You have a cool idea for an algorithms project? Use this repository. Make sure
to explain what problem you're solving, how you're doing it, and that you test
your code.

**MY ANSWER:**

What if there were a way to make Quicksort faster?...

There is. Only not asymptotically!

This semester, I came across a research article that has proven that the more pivots that are in the Quicksort implementation (at least up to 5 pivots), the faster the actual performance of the algorithm is.

With this said, I wanted to implement hexa-pivot (6-pivot) Quicksort, just to "1-up" this research article. It's nothing overly special - but not a lot of people have done it.

My implementation is in code.js. Note that the average-case asymptotic time complexity remains $\O(nlogn)$, but the actual performance turns out to be faster than Quicksort implementations with fewer pivots.

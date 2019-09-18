# Connect-4725

Play it here: https://jennakohls.github.io/connect4725/

For this project, I wanted to explore what could be done with the AI for an opponent. Playing
against a computer is something that's inherently very different to the standard experience
of connect 4, particularly to its strategy.

Connect 4 is a solved game, but most of the strategic guides for winning it do
not rely on this. They have more to do with reading your opponent, setting
up traps in the hopes that they will interpret your moves a certain way
and play based on that.

On the opposite side of things, a traditional 'vs AI' experience typically is a
matter of memorization. When someone plays chess against an AI, they are not
necessarily getting better at the game of chess or understanding it more deeply.
It's far more likely that they are practicing or testing a specific strategy until
they find an option which works.

Standard AIs for playing games like chess, go, and tic tac toe rely on
minimax algorithms, for determining optimal moves from both players, and alpha-beta
pruning to be more efficient.

I wanted to find some kind of middle ground that would encapsulate both the
aspects of reading your human opponent and of learning strategies through AI play. As such, the AI that I added to this game acts optimally (minimax-wise) but in small chunks of gameplay, rather than for the game as a whole. Additionally, there are random suboptimizations, and decisions between equal moves are based on a fixed
pattern, so they can be learned.

** TEST DRIVEN DEVELOPMENT **

Normally we write production code first, and then we write the test, so this workflow would look like:

[no-tdd-workflow-image]('./assets/workflow-without-tdd.png')

On the other hand, with TDD we start off by writing a test and just then write SOME production code to make
that test pass, the when the test pass you can do refactor then again test should pass. It would look
something like:

[tdd-workflow-image]('./assets/tdd-workflow.png')

The original description of TDD was in an ancient book abour programming. It said
you take the input tape, manually type in the output tape you expect, then program until
the actual output take matches the expected output.

"But one should not first make the program and then prove its correctness, because then the
requirement of providing the proof would only increase the poor programmer's burden. On the contrary:
THE PROGRAMMER SHOULD LET CORRECTNESS PROOF AND PROGRAM GROW HAND IN HAND. If one first asks oneself
what the structure of a convincing proof would be and, having found this, then constructs a program
satisfying this proof's requirements, then these correctness concerns turn out to be a very effective
heuristic guidance" Edsger W. Dijkstra (The Humble Programmer 1972)

"A software system can best be designed if the TESTING IS INTERLACED WITH THE DESIGNING, instead of
being used after the design. Through successive repetitions of this process of intelaced testing and
design the model ultimately becomes the software system itself." (The Nato Software Engineering Conference 1968)

"It is a disciplined thinking tool to help solve slices of a problem instead of attempting to
solve the entire problem at once." (Chillisoft)

Why should we do TDD?

1. FAST FEDDBACK: Shorter feedback cycles that allow frequent deploys and REDUCES RISKS.
2. HIGHER CONFIDENCE: Because the code is backed up by all unit tests and it would be a great tool when
   doing refactors. (THIS RIGHT HERE IS WHAT I'M LOOKING FOR!! STRONG CODE THAT SPEAK INMEDIATELY TO ME WHEN I BREAK SOMETHING)
3. THINKING TOOL: while you think about the problem you use that thinking to build the tests, now
   the tests are a tool not a waste of time or a whole bunch of additional work to do. :) (GREAT!! FANTASTIC!! THAT WAY I PUT INTO WORDS ALL THE THINKING PROCESS I DO BEFORE WRITING THE CODE, JUST PERFECT!!)

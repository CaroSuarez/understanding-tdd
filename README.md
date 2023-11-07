**TEST DRIVEN DEVELOPMENT**

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

_Why should we do TDD?_

1. FAST FEDDBACK: Shorter feedback cycles that allow frequent deploys and REDUCES RISKS.
2. HIGHER CONFIDENCE: Because the code is backed up by all unit tests and it would be a great tool when
   doing refactors. (THIS RIGHT HERE IS WHAT I'M LOOKING FOR!! STRONG CODE THAT SPEAK INMEDIATELY TO ME WHEN I BREAK SOMETHING)
3. THINKING TOOL: while you think about the problem you use that thinking to build the tests, now
   the tests are a tool not a waste of time or a whole bunch of additional work to do. :) (GREAT!! FANTASTIC!! THAT WAY I PUT INTO WORDS ALL THE THINKING PROCESS I DO BEFORE WRITING THE CODE, JUST PERFECT!!)

**NAMING WHEN WRITING TESTS WITH JEST:**

1. Describe --> it's intended to be used to describe a suit of tests, a logial grouping of tests
2. it --> it's the test method, and should have a short description of the case of that specific test
   where should say what is given and what should return.
3. Names of the variables:
   name for the thing that's being tested (sut --> system under test)
   name for the output for the thing that's being tested (actual)
   name for the expected value (expected)

**ANATHOMTY OF A TEST THAT IS WRITTEN WITH JEST:**

1. Arrange: set up state, services or SUT (System Under Test) required for the test
2. Act: it's used to execute the code that we are testing, it's usually one line long
3. Assert: check that the code we set up and executed above did what we expected it to do, using assertions
   and matchers from the library. It should check one logical thing, one logical assertion.

**F.I.R.S.T. PRINCIPLES**
_F: Fast_
Unit tests should be Fast:
--> run more often
--> more feedback

So:

1. Most tests should be small & in process
2. Monitor test speed
3. Break out sslower tests

_I: Independent_
We don't want external factors affecting our tests. The test must not depend on external things.
Test should be independant from one another.

So:

1. Use Arrange, Act, Assert, that way everything the test needs should be set up in the Arrange portion of the test.
2. No shared state, use transient fixture.
3. No sequence dependencies.

ASSUME, WHEN WRITING YOUR TEST, THAT THIS TEST IS THE ONLY THING THAT WILL RUN IN THE ENTIRE PROGRAM. EACH TESTS
IS ITS OWN PROGRAM.

_R: Repeatable_
Deterministic results: Same result given the same input.
No random data dependency, that is, the random data if used, should not affect the outcome of the test.
No time dependency.
Each test set up and arrange its own data.

_S: Self-validating_
Test should either pass or fail.
The test runner reports the result.

_T: Thorough_
Debe ser exhaustivo.
It should cover every use case scenario.
Raw code coverage is not sufficiente.
Our aim should be to test every use case scenario that we're aware of.

So:

1. Few acceptance tests
2. Some integration tests
3. MANY MANY MANY UNIT TESTS that cover the pieces of your application in isolation as units
4. Test Driven Development!!!!!!!!!! (TDD) It is a way of ensuring that we're writing our tests
   before our production code, which means we should not have any scenario that is not covered by our
   tests because we are not writing any code unless we have a test already for it.

**The FIRST principle should be applied at a higher priority than other principles**

FIRST > DRY or SOLID or (OTHER...)

Test code often have code repetition, because of the independent, isolated principle. So DRY does not apply
as much as in the production code.

**THE THREE LAWS OF TDD**

1. You are not allowed to write any production code unless it is to make a failing unit test pass.
2. You are not allowed to write any more of a unit test than is sufficient to fail; and compilation failures
   are failures.
3. You are not allowed to write any more production code than is sufficient to pass the one failing unit test.

**THE RED > GREEN > REFLECT > REFACTOR CYCLE**
The cycle starts off at RED where you write a test and you run the test and you see that it fails. At that
point we can move on to the GREEN step, which is where you try to get the test to pass. When it all passes
we can move to the next step but if it continues to fail we might need to make some adjustments to the
code and then run the tests until it passes. The idea is stay on red for short time, we need to move to green
as soon as possible.

After we've got to GREEN we move to the REFLECT step where the goal is to try and reflect on the code in its
current state and identify any rectoring, that is, improvements to the code that could be made. Then we
move to the step to actually do REFACTOR, if after the refactor the test still pass then our refactoring
was successful and we can move on to the next test.

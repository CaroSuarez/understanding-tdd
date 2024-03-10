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

================================================================================================================

_EQUIVALENCE PARTITIONS_
A group of values for which the behaviour of the code is the same

_BOUNDARIES_
Where two equivalence partitions meet, that is, where code changes from one behavior to another. The
boundaries are important because they are the most valuable cases to be testing. Those cases on each side
of the boundaries. It is important to always test around the boundaries!!!!

================================================================================================================

_GREEN BAR PATTERN: TRIANGULATION_

Green bar pattern: known ways to get to GREEN.

Write three test around a concept to draw out the solution: Fake it, fake it, make it (Fake it until you make it jejeje but just twice).

================================================================================================================
**NAMING**
Naming is important, an difficult!
It is important to use a good naming because code is read far more than writen. So the better we can make it easy to read and understand, the better
for our brains, better for us.

_The stages of naming_

1. Nonsense: we don't know what the variable of function do. Ex. Cake.
2. Accurate: the name is accurate, its not precise, its not detailed. Does not provide much information. Ex. Sum
3. Precise: much more information for the reader. Long and verbose. Ex. sumOfAllTransactionsForAnAccount
4. Meaningful: Still accurate, still precise but succinct, readable name. Ex. balance.

So the main idea here is that the act of naming is a PROCESS. That is, very rarely we get a name right on out first try.

So, in TDD the refactor step is where you stop and listen to the feedback that your code is giving you and do things with it. One of
those things is actively reflect on those names and each time try to move them a little bit more closer to the meaningful stage.

================================================================================================================
**GREEN BAR PATTERNS (known ways to get to green in TDD) AND TDD GEARS**

_One-to-many pattern_
If have a problem to be resolved and that problem has many items, try to resolve those items
one by one and not all of them at once.

_Obvious patter_
Go ahead and write the obvious implementation. If it fails, undo and try another path. Remember to still refactor!

_Backout patter_
Undo to get back to green.
We need to listen to what tests are telling us. Two fails in a row could mean it is necessary to backout and take a fresh start.

_Learning test_
Try wring an implementation directly in a test to see if it will work. Learning test to checko your assumptions.
This way we have quick feedback on our code.
Some scenarios: During refactoring, After a backout, Exploring a new module/API without writing any production code.
Is a fast feedback mechanism.

_TDD GEARS_

CORE:
FIRST Principles
Red Green Refactor
Equivalence Partitions and Boundaries

LOW (Uncertain, not confident!):
3 laws of TDD
The stages of naming
Fake-it!
Triangulation
Onte-to-many
Learning test

MEDIUM (Some familiarity, confidence):
Obvious

HIGH (Familiar domain, confident):
Still need to consider the CORE gear
Build the whole test all in one go

REVERSE (Red/Red/Reverse):
Backout

================================================================================================================
**TEST DOUBLES**
Used to avoid executing external dependencies when testing.
A dependency is simply another code that our system under test depends up on run
We use test doubles so the tests can be Fast, Isolated, Repeatable

Two main styles for test doubles:
_London Style:_ heavy use of test doubles
_Chicago Style:_ minimize use of test doubles

_FAKES_
An object with ah simplified working implementation
Needs it in order to opperate. Just enables it to run.

Rules:

1. Only for indirect input
2. Not used for control
3. Not used for assertion

Only there because the System Under Test (SUT) has to have it to function, but not actually involved.

_STUBS_
Is an object that provides predefined data.
Returns controlled data.

Rules:

1. Can be used for indirect input
2. Cab be used for control
3. Not used for assertion

_MOCKS_
An object that records calls received, and verifies them against expected calls

Rules:

1. Can be used for indirect input
2. Can be used for control
3. Used for assertions

As soon as we are asserting on the test double, it is a mock

================================================================================================================
**SOLID PRINCIPLES**

_S: Single responsability principle_
A class, function, component, etc... should have only one reason to change.

What is one reason to change?
Think about the reason to change in terms of responsability.

What is responsability?
Concerns that the code has: Things that the code needs to accomplish. If the code has
multimple concerns, then has multiple reason to change and therefore multiple responsabilities.

Concepts that code is representing: ideas represented in the class/module/function/component.
e.g. a Person Class with some:

- characteristics of the person (name, contact number, address, etc...)
- information about ther credit history
  those are two different concepts and they are probably going to change at different rates or for different reason. Then
  with multiple concepts represented, has multiple reasons to change.

_O: Open/Close principle_

"Software entities should be open for extension bue close for modification"

-Open for extension: Can be extended in order to change its behavior.
-Closed for modification: Not necessary to change its source code to make the change in behaviour.

The main idea of this principle is to be able to change the behavior of a system only by adding code,
not by editing the existing code.

It's not easy to predict all that can happen, but, do it at some reasonable extension.

_L: Liskov substitution principle_
"Subtypes must be substitutable for their base types"
Code that depends on an abstraction should be able to use any implementation of that abstraction.

Counter-example: implement an interface, but throw error.
More restrictive validation on the subtype.

_I: Interface segregation principle_
"Clients should not be forced to depend on methods they don't use"
Interfaces (classe, types, etc...) should be kept as small as possible.

_D:Dependency invertion principle_
a. High-level modules should not depend on low-level modules. Both should depend on abstractions.
b. Abstractions should not depend on details. Details should depend on abstracions.

High-level: your core domain, core functionality
Low-level: not core domain (e.g. persistence)
Abstraction: Interfaces, function signatures, anything that describes a contract and has implementations.
Details: Concrete implementation of abstractions

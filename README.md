# TDD-by-example
https://tddmanifesto.com/getting-started/
https://codingdojo.org/kata/Bowling/
## Why test first
If we want to trust our code, we need to be able to trust our tests. If we want to trust our tests we need to be able to see them failing. If we never see our tests fail we don’t know if our tests are actually testing the right things. Seeing a test failing is as important as seeing it passing. A test failure validates that the test is meaningful and unique. It’s a software expectation to fulfill. It gives us a target to aim for, showing that the code we are about to implement is useful and necessary.

## The essence of TDD
The rules of Test Driven Development are relatively simple. It is a technique we can already benefit from in the first two weeks and we can still learn from it after twenty years. TDD forces us to carry out a set of practices that will all help us build quality software.

It will force us to:

- work in short cycles
- write tested code
- do continuous refactoring
continuously analyze the requirements (hypotheses)
producing minimalist and not-goldplated code
## When we can’t use TDD
We can not use TDD if:

we don’t have clear expectations for the code we are about to implement
testing does not make sense or does not bring any benefit
the tests run very slow, allowing only long feedback loops
the design requires visual verification such as UI layout or UX concerns
## Steps to get started
1. Familiarize yourself with the three laws of TDD
The fundamentals of TDD consist of three main rules. These rules constrain us to change only one thing at a time. They force us to apply baby steps!

TDD is all about the frequency of feedback. It lets us fail only a little with a small cognitive overhead, where the changes are cheap. It helps us to quickly recover from mistakes, and most importantly to avoid any big mistakes in the code.

First of all, familiarize yourself with the three laws of TDD! In order to practice TDD efficiently, we should strictly follow these three fundamental rules:

You are not allowed to write any production code unless it is to make a failing unit test pass.
You are not allowed to write any more of a unit test than is sufficient to fail, and compilation failures are failures.
You are not allowed to write any more production code than is sufficient to pass the one failing unit test.

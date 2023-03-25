# React 18 v.

### Batching 
We use it for optimization...

In `React 17v` was not available to use method such as `setTimeout` or `Promise.resolve()`
in function to batching function because they didn't work. But in `React 18v` it works as
it should work.

**Batching function** is the function where you add all setStates in one function so 
React collects all change states and do them by one rendering. And if we want to use methods
as `setTimeout` in 18v of React it works properly. 

### Transitions
We can use new hooks `useTransition()` in React 18v. It is a React Hook that lets you update
the state without blocking the UI.
It doesn't take any params and return an array with two items:
- isPending flag - tells you whether there is a pending transition
- startTransition function that lets you mark a state update as a transition.

When we should not to use transition is by user operation such as: input, 
open dropdown, onClick on button and so on...

We should use it when we can make parallel rendering: switching tabs, show prompt or changing 
interface

There we have 2 state, isPending - It's like isLoading state, 
and second is startTransition - callback function that lets mark a state update as a transition

### useDeferredValue
This hooks provide us to defer rendering. 


If we use input and add as a value some state, and while writing we must show result of research,
It will firstly rerender with old state and only after that will rerender with newly received
value in BACKGROUND!!!


We can combine it with `<Suspence>` and `fallback` in it... By UI it will be great. 

### useId
This hooks return unique id.

### 
# react, SPAs, modularity, and the modern stack

## Why not jQuery
- spaghetti code
- slower
  - i.e. element.innerHtml, imagine list with 100 items
    - but react can be slow to if not used correctly
- old and bloated, it was used for cross browser compatibility

## Why What is react?
#### What
- ui Library
- jsx (JavaScript XML)
- speed
  - virtual dom
- life cycle
  - mount, unmount, updating
- hooks
  - “hook into” state and lifecycle functionality in function components.
      state hooks: keeps state
      effect hooks: called on re-render
        can be bound to dependencies
        has cleanup (remove bound events)
#### Why
- components (stateless & stateful)
- reusability
- unidirectional data flow
- spa
  - native feel, smooth experience, no waiting on a blank page
- react native
- easy to learn
- Large community, libraries, frameworks
- good opportunities
- big companies (pinterest :), fb, netflix, dropbox )

## Typescript
- superset of JavaScript
  -> Js + static typing
- js is awesome and provides freedom, but comes with a price
  - with ts, bugs can be detected
- better developer experience (auto completion)
- code quality
- easier refactoring 
- types inference

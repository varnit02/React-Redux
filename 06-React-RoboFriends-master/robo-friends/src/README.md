# robo-friends

# Redux

->Good for managing large state
->useful for sharing data between containers
->predictable state managemenet using the 3 principles

the 3 Principles

1. the single source of truth
2. state is read only
3. changes using pure functions

_Action(user actions-objects) -- Middleware --> reducer(pure function) ----> store(entire state of the app) -- react --> MakeChanges_

#Flux Pattern(organized pattern used by redux)

_Action ----> Dispatcher ----> Store ----> View_

provider component- passes down the store component

connect component-who know about the redux

#Communcationg with props
Connecting to the direct child.
App---Button--->Header---Button text--->Button

#Communicating with Context system
Directly connecting to any nested child.
App----------------data----------------->Button

_App_

Internationalization or Globalization

_Components_

1. App
2. UserCreate
3. Field
4. Button

#Methods for Context System
Default Value(Sources of Data)--->this.context[nested child](things that uses data )
Provider_DifferentFromRedux(Sources of Data)--->Consumer[nested child](things that uses data)

**Each separate use of context creates a different pipe of data**

##issues to radicate using redux instead context
_merge business logic with view logic_
_we need to able able to split business log into different files_

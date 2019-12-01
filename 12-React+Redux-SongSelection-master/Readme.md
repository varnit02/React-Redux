Redux:-

- State management library
- Makes creating complex applications easier
- Not required to create a react app
- Not expicitly designed to work with react app

Redux cycle:-

ActionCreator --Middleware--> Action ---> Dispatch---> Reducers --REACT--> State

Insurance Company:-
PersonDropping Off the form--->the form--->form reciever--->Departments--->Compiled department data

Action(the form)= {
type:some change we want in data
payload:some context of the change we want to make
}

Dispatch(form reciever):take in action and make copies to supply to data to different places

Reducers(Departments):taking action and data,make changes to data according to the action and supply the changed the data

                App
               __|__
              |     |
          SongList SongDetail

#REDUX

Reducers-store---------------Provider--->App--->Connect--->SongList
-SongList reducer  
-Selected song Reducer

Action Creators
-Select Song

Provider->Provides data to App <------------------------------------
|  
Connect-> Communicates with provider using CONTEXT SYSTEM.----------

Context System-> It allows any parent component to communcate with child component even if there is an component between them.

Redux does not automatically

Steps

1 -

import React,{useReducer} from 'react';
import logo from './logo.svg';
import './App.css';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import HookCounterOne from './components/HookCounterOne';
import ClassMouse from './components/ClassMouse';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import DataFetching from './components/DataFetching';
import ComponentC from './components/ComponentC';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import CounterThree from './components/CounterThree';
import ComponentA1 from './components/ComponentA1';
import ComponentB1 from './components/ComponentB1';
import ComponentC1 from './components/ComponentC1';



export const UserContext = React.createContext()
export const ChannelContext = React.createContext();



export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;

    case "decrement":
      return state - 1;
    case "reset":
      return initialState;

    default:
      return state;
  }
};

function App() {

  const [count,dispatch] = useReducer(reducer,initialState)
  return (
    <CountContext.Provider value={  { countState: count, countDispatch: dispatch}  }>
      <div className="App">
        {/* <HookCounter /> */}
        {/* <HookCounterTwo /> */}
        {/* <HookCounterThree /> */}
        {/* <HookCounterFour /> */}
        {/* <HookCounterOne /> */}
        {/* <ClassMouse /> */}
        {/* <HookMouse /> */}
        {/* <MouseContainer /> */}
        {/* <DataFetching /> */}
        {/* <UserContext.Provider value={'shyam'}>
        <ChannelContext.Provider value={'sandeep'}>

            <ComponentC />
        </ChannelContext.Provider>

          
      </UserContext.Provider> */}
        {/* <CounterOne /> */}
        {/* <CounterTwo /> */}
        {/* <CounterThree /> */}
        Count - {count}
        <ComponentA1 />
        <ComponentB1 />
        <ComponentC1 />
      </div>
    </CountContext.Provider>
  );
}

export default App;

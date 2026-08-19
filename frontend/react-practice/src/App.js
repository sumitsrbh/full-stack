import UseStateTodo from './component/hooks/useStateTodo'
import UseStateObject from './component/hooks/useState-object'
import CounterFuncUpdate from './component/hooks/useState-functionalUpadte'
import StudentList from './component/useState-arrayofObjects'
import CounterWithTitle from './component/useEffect-counter'
import UserList from './component/hooks/useEffect-dispalyusers'
import UserListWithRetry from './component/useEffect-retryDisplayUser'
import FocusInput from './component/hooks/useRef-focusInput'
import Stopwatch from './component/useRef-stopwatch'
import ToggleBox from './component/useRef-toggleBoxColor'
import ToggleBoxWithHistory from './component/useRef-toggleBoxColor'
import WindowSizeTrack from './component/useRef-windowSizeTrack'

function App() {
  return (
    <div className="App" style={{ padding: '30px' }}>
      {/* <UseStateTodo /> */}
      <UseStateObject />
      <CounterFuncUpdate />
      <StudentList />
      <CounterWithTitle />
      <UserList />
      <UserListWithRetry />
      <FocusInput />
      <Stopwatch />
      <ToggleBox />
      <ToggleBoxWithHistory />
      <WindowSizeTrack />
    </div>
  )
}

export default App

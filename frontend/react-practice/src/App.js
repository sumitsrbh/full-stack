import UseStateTodo from './component/hooks/useStateTodo'
import UseStateObject from './component/hooks/useState-object'
import CounterFuncUpdate from './component/hooks/useState-functionalUpadte'
import StudentList from './component/hooks/useState-arrayofObjects'
import CounterWithTitle from './component/hooks/useEffect-counter'
import UserList from './component/hooks/useEffect-dispalyusers'
import UserListWithRetry from './component/hooks/useEffect-retryDisplayUser'
import FocusInput from './component/hooks/useRef-focusInput'
import Stopwatch from './component/hooks/useRef-stopwatch'
import ToggleBoxWithHistory from './component/hooks/useRef-toggleBoxColor'
import WindowSizeTrack from './component/hooks/useRef-windowSizeTrack'
import Form from './component/form'
import UserRow from './component/hooks/key-index-example.jsx'
import Counter from './component/hooks/useRef-count.jsx'
import CounterHistory from './component/hooks/useRef-previos-value.jsx'
import Parent from './component/hooks/useCallback-child-render.jsx'

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
      <ToggleBoxWithHistory />
      <WindowSizeTrack />
      <UserRow />
      <Counter />
      <CounterHistory />
      <Parent/>
      <Form />
    </div>
  )
}

export default App

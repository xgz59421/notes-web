import styled from "@emotion/styled"
import { observer } from "mobx-react-lite"
import { useRootStore } from "../store"

const Container = styled.div`
  width: 540px;
  margin: 0 auto;
`

const Button = styled.button`
  background-color: #48c78e;
  border-color: transparent;
  color: #fff;
  border-width: 1px;
  cursor: pointer;
  justify-content: center;
  padding-bottom: calc(0.5em - 1px);
  padding-left: 1em;
  padding-right: 1em;
  padding-top: calc(0.5em - 1px);
  text-align: center;
  white-space: nowrap;
  ${props =>
    props.border === "left" &&
    "border-top-left-radius: 0.375rem;border-bottom-left-radius: 0.375rem"}
  ${props =>
    props.border === "right" &&
    "border-top-right-radius: 0.375rem;border-bottom-right-radius: 0.375rem"}
`

function Counter() {
  const { counterStore } = useRootStore()
  const { count, increment, decrement } = counterStore
  return (
    <Container>
      <Button onClick={() => increment()} border="left">
        INCREMENT
      </Button>
      <Button>{count}</Button>
      <Button onClick={() => decrement()} border="right">
        DECREMENT
      </Button>
    </Container>
  )
}

export default observer(Counter)

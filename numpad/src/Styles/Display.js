import styled from "styled-components";

const Display = styled.div`
  padding: 1rem;
  margin: 1rem;
  background: ${props => props.success ? "mediumseagreen" : props => props.error ? "palevioletred" : "cyan"}
  border-radius: 0.35rem;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);
`
export default Display;
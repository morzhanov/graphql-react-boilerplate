import styled from 'styled-components'

export default styled.div`
  width: 300px;
  * {
    width: 100%;
  }
  label {
    width: 100%;
    font-weight: 600;
    font-size: 16px;
    color: #4877bf;
    font-family: Helvetica, sans-serif;
    text-align: center;
  }
  input {
    border: 2px #5da2ff solid;
    margin-bottom: 10px;
    border-radius: 10px;
    margin-top: 2px;
    background-color: #fff;
    color: #000000;
    height: 40px;
    font-size: 16px;
    padding: 5px 5px 5px 10px;
    transition: 200ms ease all;
    &:hover {
      border: 2px #416dae solid;
    }
  }
  .social {
    margin-top: 0;
    display: flex;
  }
`

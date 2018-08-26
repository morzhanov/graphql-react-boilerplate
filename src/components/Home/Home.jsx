import * as React from 'react'
import { Paper } from '@material-ui/core'
import Header from '../common/Header'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`

const mainStyles = {
  width: '80%',
  height: '80%',
  margin: 'auto',
  marginTop: '5%',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 48
}

const Heading = styled.div`
  width: 100%;
  font-weight: bold;
`

const Home = props => (
  <Wrapper>
    <Header />
    <Paper style={mainStyles}>
      <Heading>Home</Heading>
    </Paper>
  </Wrapper>
)

export default Home

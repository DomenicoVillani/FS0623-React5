import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import MyJumbotron from './components/MyJumbotron'
// import AllTheBooks from './components/AllTheBooks'
import { Container, Col, Row } from 'react-bootstrap'
import BookList from './components/BookList'
import fantasy from './data/fantasy.json'
import CommentArea from './components/CommentArea'
import { Component } from 'react'

class App extends Component {
  state = {
    idBooks: ''
  }
  render() {
    return (
      <Container>
        <MyNav />
        <MyJumbotron />
        {/* <AllTheBooks /> */}
        <Row>
          <Col>
            <BookList books={fantasy} />
          </Col>
          <Col>
            <CommentArea />
          </Col>
        </Row>
        <MyFooter />
      </Container>
    )
  }
}

export default App

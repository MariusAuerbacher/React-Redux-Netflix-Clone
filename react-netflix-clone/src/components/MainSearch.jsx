import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import MainPage from './MainPage';


const MainSearch= () => {
  const [music, setMusic] = useState([])
  const params = useParams()

  const baseEndpoint = 'https://striveschool-api.herokuapp.com/api/deezer/search?q=queen'

  useEffect(() => {
    MainSearch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const MainSearch = async () => {
    try {
      const response = await fetch(baseEndpoint)
      if (response.ok) {
        const { data } = await response.json()
        setMusic(data)
      } else {
        alert('Error fetching results')
  
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <Row>
        <Col>
          {/*{music.map((musicData) => (
            <MainPage key={musicData._id} data={musicData} />
          ))} */}
        </Col>
      </Row>
    </Container>
  )
}

export default MainSearch

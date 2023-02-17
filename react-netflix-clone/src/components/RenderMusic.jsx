import React, { useEffect } from 'react'
import { fetchMusic } from '../actions'
import { useSelector, useDispatch } from 'react-redux'
import { Col, Container, Row } from 'react-bootstrap'

function RenderMusic() {

  const musicData = useSelector((state)=>state.search.musicData)
  const dispatch = useDispatch()

  const searchValue = useSelector((state)=>state.search.searchquery)


  useEffect(()=> {
    dispatch(fetchMusic(searchValue))


  }, [searchValue])


  return (
  
      <Container>
     {musicData.data.slice(0, 10).map((album)=>(<div key={album.id}>
        <Row>
          <Col>
          <h4>{album.artist.name}</h4>
          <img src={album.artist.picture} alt="artist pic"/>
          </Col>
        </Row>
         </div>
      ))}
      </Container>
      





  )
}

export default RenderMusic
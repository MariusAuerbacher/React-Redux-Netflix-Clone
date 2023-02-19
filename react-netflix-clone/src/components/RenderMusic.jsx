import React, { useEffect } from "react";
import { fetchMusic } from "../actions";
import { useSelector, useDispatch } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";

function RenderMusic() {
  const musicData = useSelector((state) => state.search.musicData);
  const dispatch = useDispatch();

  const searchValue = useSelector((state) => state.search.searchquery);

  useEffect(() => {
    dispatch(fetchMusic(searchValue));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  return (
    <Container className="d-flex">
      {musicData.data.slice(0, 30).map((album) => (
  

            <Row key={album.id} className="d-flex">
              <Col className="col-12 mr-3 no-wrap">
               
                <img src={album.artist.picture} alt="artist pic" />
                <h5>{album.artist.name}</h5>
                <p>{album.album.title}</p>
              </Col>

    

           
            </Row>



      ))}
    </Container>
  );
}

export default RenderMusic;

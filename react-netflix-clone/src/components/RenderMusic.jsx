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
  

  <Row  key={album.id} className="container-fluid mt-4 justify-content-between">
  
  <Col className="col-12 mr-3">
   
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

/*

 <div class="d-flex justify-content-between"  >
     <h4 class="mb-3 underline">Search Results</h4>
     <img src={album.artist.picture} alt="artist pic" />
 </div>
 <div class="row row-cols-2 row-cols-md-4 row-cols-lg-5" id="search-result">
 </div>

</div>
            */
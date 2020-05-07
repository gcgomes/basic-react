import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import {doGet} from '../../helpers/ApiHelpers'

function Detail() {
  const {id} = useParams();

  const [person, setPerson] = useState([]);

  useEffect(() => {
    doGet(`/people/${id}`).then(setPerson);
  }, [id]);


  if(!person) { return <h1>Loading...</h1> }

  return <h1>{person.name}</h1>
}

export default Detail;
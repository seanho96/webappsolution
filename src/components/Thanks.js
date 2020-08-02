import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";

const Thanks = () => {

  const history = useHistory();
  const { name } = useParams();
  const goBack = () => {
    history.goBack();
  }

  console.log(history);

  return (
    <React.Fragment>
      <button className="back" onClick={goBack}> &larr; Go Back</button>
      <div className="thanks">
        <p>Thanks <strong>{name} !!</strong></p>
        <p>You joined <strong>{history.location.state}</strong></p>
      </div>
    </React.Fragment >
  )
}

export default Thanks;
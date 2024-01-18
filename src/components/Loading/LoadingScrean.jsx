import React from 'react'

export default function LoadingScrean() {
  return (
    <>
      <div id='LoadingScrean' style={{ display: "flex" , zIndex:'99999'}} className="position-fixed bg-light top-0 bottom-0 start-0 end-0 justify-content-center align-items-center">
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
}

import React from 'react'

function Project() {
  
// } Project = ({project}) => {
// const tasks = project.boards.map((board)=> board.tasks).flat()


  return (
    // <Grid item xs={12} sm={12} md={6} lg={4}>
    <div>
        <div className="row">
  <div className="col-sm-6 mb-3 mb-sm-0 p-4" >
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Client1</h5>
        <a href="/board" className="btn btn-primary">Board</a>
      </div>
    </div>
  </div>
  <div className="col-sm-6 mb-3 mb-sm-0 p-4">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Client 2</h5>
        <a href="/board" className="btn btn-primary">Board</a>
      </div>
    </div>
  </div>
</div>
    </div>
    // </Grid>
  )
}

export default Project

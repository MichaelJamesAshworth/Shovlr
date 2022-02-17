const PastRequest = (props) => {
  const requests = props.requests;
  
  const requestHtml = () => {
    let output = []

    if (requests) {
      console.log(requests)
      for (const request of requests) {
        console.log(request.total_cents);
        output.push({
          date: request.completed_at,
          note: request.note,
          address: request.address_id,
          cost: request.total_cents
        })
      }
    }
    return output;
  }


  return(
    <>
        {
          requests && requestHtml().map((x) => {
            return (
              <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">date: {x.date}</h5>
                    <p className="card-text">note: {x.note}</p>
                    <p className="card-text">adress: {x.address}</p>
                    <p className="card-text">total cost: {x.cost}</p>
                  </div>
              </div>
            )
          })
        }
    </>
  )
}

export default PastRequest;
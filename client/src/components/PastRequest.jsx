import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faCreditCard, faEnvelope, faComment } from "@fortawesome/free-solid-svg-icons";

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
          address: request.address,
          cost: request.total_cents
        })
      }
    }
    return output.reverse();
  }

  const calculatePrice = (size) => {
    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    const priceInCents = size;
    return formatter.format(priceInCents/100);
  }

  const formatDate = (data) => {
    let date = new Date(data)
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let dt = date.getDate();

    if (dt < 10) {
      dt = '0' + dt;
    }
    if (month < 10) {
      month = '0' + month;
    }

    return year + '-' + month + '-' + dt;
  }


  return(
    <>
        {
          requests && requestHtml().map((x) => {
            return (
              <div className="card">
                <div className="card-header">
                {formatDate(x.date)}
                </div>
                <ul className="list-group list-group-flush">
                  
                  {<li className="list-group-item d-flex"><div className="p-2"><FontAwesomeIcon icon={faLocationDot} /></div> <div className="p-2">{x.address}</div></li>}
                  {x.note && <li className="list-group-item d-flex"><div className="p-2"><FontAwesomeIcon icon={faComment} /></div> <div className="p-2">{x.note}</div></li>}
                  {<li className="list-group-item d-flex"><div className="p-2"><FontAwesomeIcon icon={faCreditCard} /></div> <div className="p-2">{calculatePrice(x.cost)}</div></li>}
                </ul>
              </div>
            )
          })
        }
    </>
  )
}

export default PastRequest;
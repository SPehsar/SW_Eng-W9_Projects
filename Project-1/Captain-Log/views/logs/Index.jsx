
const React = require("react")
const DefaultLayout = require("../layout/Default")

class Index extends React.Component {
  render() {
    const  { logs } = this.props
    return (
      <DefaultLayout title="Logs Index Page">
        {/* <h1>Logs Index Page</h1> */}
        <nav>
          <a href="/logs/new">Create Log</a>
        </nav>
        <ul>
          {
            logs.map((log, i) => {
              return (
                <li> 
                  The{' '}
                  <a style={{color: "red"}} href={`/logs/${log._id}`}>{log.title}</a>
                  {" "}
                  is {log.entry} <br />
                  {
                    log.shipIsBroken 
                    ? "Ship is broken." 
                    : "Ship is not broken."
                  }
                  <br />
                  <a href={`/logs/${log._id}/edit`}>Edit This Log</a>
                  <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="DELETE" />
                  </form>
                </li>
              )
            })
          }
        </ul>
      </DefaultLayout>
    )
  } 
}

module.exports = Index
























// <!DOCTYPE html>
// <html>

// <head>
//   <meta charset="utf-8" />
//   <title></title>
// </head>

// <body>
//   <nav>
//     <a href="/logs/new">Add a New Log</a>
//   </nav>
//   <h1>Logs Index Page</h1>
//   <ul>
//     <% logs.forEach(log=> { %>
//       <li>
//         <a href="/logs/<%=log._id %>">
//           <%=log.title %>
//         </a>
//       </li>
//       <% }) %>
//   </ul>
// </body>

// </html>
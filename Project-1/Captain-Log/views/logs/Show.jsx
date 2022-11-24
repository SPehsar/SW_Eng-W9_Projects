const React = require("react");
const DefaultLayout = require("../layout/Default")

class Show extends React.Component {
  render() {
    const {title, entry, shipIsBroken} = this.props.log
    return (
      <DefaultLayout title={`${title} Show Page`}>
        <div>
          <p>The {title} is .... {entry}.</p>
          {shipIsBroken? "Ship is broken ... repairs are in progress." : "Ship is not broken!"}
        </div> 
      </DefaultLayout>
    )
  }
}
// We can write javascript code within the curly brackets

module.exports = Show









// <!DOCTYPE html>
// <html lang="en">

// <head>
//   <meta charset="UTF-8" />
//   <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//   <title>Show Log</title>
// </head>

// <body>
//   <nav>
//     <a href="/logs">Back to Logs Index</a>
//   </nav>
//   <h1>
//     <%=log.title %>
//   </h1>
//   Entry: <%= log.entry%>
//     <br />
//     Ship Is Broken: <%= log.shipIsBroken %>
// </body>

// </html>
const React = require("react")
const DefaultLayout = require("../layout/Default")

class New extends React.Component {
  render() {
    return (
      <DefaultLayout title="New Log Page">
        <nav>
          <a href="/logs">Home Page</a>
        </nav>
            {/* NOTE: action will be the route, method will be the HTTP verb */}
        <form action="/logs" method="POST">
        Title: <input type="text" name="title" /><br />
        Entry: <input type="text" name="entry" /><br />
        Is Ship Broken: <input type="checkbox" name="shipIsBroken"/><br />
          <input type="submit" value="Create Log" />
        </form>
      </DefaultLayout>
    )
  }
}

module.exports = New





// <!DOCTYPE html>
// <html lang="en">

// <head>
//   <meta charset="UTF-8" />
//   <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//   <title>New Captain's Log</title>
// </head>

// <body>
//   <h1>New Log</h1>
//   <form action="/logs" method="POST">
//     Title: <input type="text" name="title" /><br />
//     Entry: <input type="textarea" name="entry" /><br />
//     Ship Is Broken: <input type="checkbox" name="shipIsBroken" /><br />
//     <input type="submit" name="" value="Add Log" />
//   </form>
// </body>

// </html>
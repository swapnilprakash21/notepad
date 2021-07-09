var notepad_template = `<!doctype html>
<html lang="en">
  <head>
    <title>Notepad</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="notepad.css">
    <style>
    @import url("https://fonts.googleapis.com/css?family=Roboto");
.notepad {
  outline: none;
  height: 80%;
  width: 100%;
  border: 0.5px solid #bbb;
  padding: 10px;
  word-wrap: break-word;
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wrap;
  font-size: large;
  font-family: "Roboto";
}

    </style>
  </head>
  <body>
    <div class="notepad" contenteditable="true" autofocus></div>
  </body>
</html>`;
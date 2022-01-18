import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
      return (
        <Html className='min-h-screen cont'>
          <Head />
          <body className='min-h-screen'>
            <Main />
            <NextScript />
          </body>
          <style>
            {`
              body {
                font-family: Geneva, Arial, Helvetica, sans-serif;
                background-color: #fdf8f4;
                box-shadow: 0 0 50px lightgrey;
              }
              .cont {
                padding: 5vw 20vw;
                background-color: #feebdc;
              }
            `}
          </style>
        </Html>
      )
    }
  }
  
  export default MyDocument
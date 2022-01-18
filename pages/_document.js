import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
      return (
        <Html className='min-h-screen'>
          <Head />
          <body className='min-h-screen'>
            <Main />
            <NextScript />
          </body>
          <style jsx global>
            {`
              body {
                font-family: Geneva, Arial, Helvetica, sans-serif;
                background-color: #fff2e3;
              }
            `}
          </style>
        </Html>
      )
    }
  }
  
  export default MyDocument
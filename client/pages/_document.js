import Document, { Head, Main, NextScript } from "next/document"
import { ServerStyleSheet } from "styled-components"
import { web_name } from "../config"

export default class MyDocument extends Document {
  render() {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()
    return (
      <html>
        <Head>
          <title>{web_name}</title>
          <link rel='shortcut icon' type='image/svg' href='/static/logo.ico' />
          <link
            href='https://fonts.googleapis.com/css?family=Nanum+Gothic&display=swap&subset=korean'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css?family=Prompt&display=swap&subset=thai'
            rel='stylesheet'
          />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1, shrink-to-fit=no'
          />
          <style>{`
            body, html { margin: 0; font-size: 16px; padding: 0px !important;
              overflow: unset !important;
            }
            `}</style>
          {styleTags}
        </Head>
        <body>
          <div className='root'>{main}</div>
          <NextScript />
        </body>
      </html>
    )
  }
}

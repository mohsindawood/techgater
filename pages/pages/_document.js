import * as React from "react";
// next
import Document, { Html, Head, Main, NextScript } from "next/document";
// emotion
import createEmotionServer from "@emotion/server/create-instance";
// utils
import createEmotionCache from "src/utils/createEmotionCache";
// theme
import palette from "src/theme/palette";

// ----------------------------------------------------------------------

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/logo.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/logo.png"
          />

          <meta name="theme-color" content={palette.light.primary.main} />
          <link rel="manifest" href="/manifest.json" />

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="mobile-web-app-capable" content="yes" />
          <title>Techgater - Web Design &amp; Development Agency</title>
          <meta
            name="msvalidate.01"
            content="0C312F1E2E203F1B104B546B6682F9ED"
          />
          <meta
            name="title"
            content="Techgater - Web Design &amp; Development Agency"
          />
          <meta name="author" content="Techgater" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <meta name="theme-color" content="#c7ecff" />
          <meta
            name="description"
            content="Techgater is Sargodha, Pakistan Based softwere company providing high-end websites and web app development services."
          />
          <meta
            name="keywords"
            content="Techgater,Techgater website agency,techgater softwere company, techgater lahore based website agency, techgater sargodha based website agency,lahore based softwere company techgater,Techgater React Developer,Teachgater vue developer, Techgater web development, techgater web app development, techgater agency, website design and development, software company"
          />
          <meta property="og:url" content="https://techgater.com/" />
          <meta property="og:site_name" content="Techgater" />
          <meta
            name="og:title"
            content="Techgater - Web Design &amp; Development Agency"
          />

          <meta name="twitter:url" content="https://techgater.com/" />
          <meta name="twitter:site" content="Techgater" />
          <meta
            name="twitter:description"
            content="Techgater is Lahore, Pakistan Based softwere company providing high-end website and web app development services. We build best quality, user-friendly and responsive custom Design Websites & dashboard."
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;

  const cache = createEmotionCache();

  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => <App emotionCache={cache} {...props} />,
    });

  const initialProps = await Document.getInitialProps(ctx);

  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(" ")}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      ...emotionStyleTags,
    ],
  };
};

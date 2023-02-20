// scroll bar
import "simplebar/src/simplebar.css";

// slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// next
import Head from "next/head";
import { CacheProvider } from "@emotion/react";
// contexts
import { SettingsProvider } from "src/contexts/SettingsContext";
import { CollapseDrawerProvider } from "src/contexts/CollapseDrawerContext";
// theme
import ThemeConfig from "src/theme";
import GlobalStyles from "src/theme/globalStyles";
// utils
import createEmotionCache from "src/utils/createEmotionCache";
// components
import "prismjs/themes/prism-tomorrow.css";
import RtlLayout from "src/components/RtlLayout";
import ProgressBar from "src/components/ProgressBar";
import LoadingScreen from "src/components/LoadingScreen";
import ThemePrimaryColor from "src/components/ThemePrimaryColor";
// redux
import { store } from "src/redux/store";
import { Provider as ReduxProvider } from "react-redux";
// layouts
import MainLayout from "src/layouts/main";

// ----------------------------------------------------------------------

const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <ReduxProvider store={store}>
      <SettingsProvider>
        <CollapseDrawerProvider>
          <CacheProvider value={emotionCache}>
            <Head>
              <meta
                name="viewport"
                content="initial-scale=1, width=device-width"
              />
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin
              />
              <link
                href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                rel="stylesheet"
              />
            </Head>

            <ThemeConfig>
              <ThemePrimaryColor>
                <RtlLayout>
                  <MainLayout>
                    <GlobalStyles />
                    <ProgressBar />
                    <LoadingScreen />
                    <Component {...pageProps} />
                  </MainLayout>
                </RtlLayout>
              </ThemePrimaryColor>
            </ThemeConfig>
          </CacheProvider>
        </CollapseDrawerProvider>
      </SettingsProvider>
    </ReduxProvider>
  );
}

import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { StoreProvider } from 'easy-peasy';
import store from '../store';
import Layout from '../components/layout';


function MyApp({ Component, pageProps }: AppProps) {
  return <StoreProvider store={store}>
            <Layout>
            <Component {...pageProps} />
            </Layout>
          </StoreProvider>
}
export default MyApp

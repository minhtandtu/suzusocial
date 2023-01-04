import "../styles/globals.css";
import { EmptyLayout } from "../components/layout/EmptyLayout";
function App({ Component, pageProps }) {
  const Layout = Component.Layout ?? EmptyLayout;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default App;

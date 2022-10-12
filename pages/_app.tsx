import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { RecoilRoot } from "recoil";
// import "../styles/globals.css";
import "antd/dist/antd.css";
import "react-quill/dist/quill.snow.css";
import Layout from "../src/components/commons/layout";
import GlobalStyle from "../styles/globalStyles";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError: (error) => {
        error instanceof Error ? alert(error.message) : alert("접속장애");
      },
      staleTime: 600000,
      cacheTime: 900000,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    },
    mutations: {
      onError: (error) => {
        error instanceof Error ? alert(error.message) : alert("접속장애");
      },
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default MyApp;

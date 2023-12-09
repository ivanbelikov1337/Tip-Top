import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./Components/App/App"
import {BrowserRouter} from "react-router-dom";
import {QueryClient, QueryClientProvider,} from "@tanstack/react-query";
import React from "react";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
            refetchOnMount: false,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false
        }
    }
});

root.render(
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>
            <App/>
        </QueryClientProvider>
    </BrowserRouter>
);

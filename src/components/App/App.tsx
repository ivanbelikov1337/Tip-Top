import React from 'react';
import styles from "./App.css"
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"

const App: React.FC = (props) => {
    const queryClient = new QueryClient()


    return (
        <QueryClientProvider client={queryClient}>
            <div className={styles.wrapper}>

            </div>
        </QueryClientProvider>
    );
}

export default App;
import {FC} from 'react';
import styles from "./app.module.css"
import AppRoutes from "./AppRoutes";
import Header from "../Header/Header";

const App: FC = () => {
    return (
        <div className={styles.wrapper}>
            <Header/>
            <div className={styles.appRotes}>
                <AppRoutes/>
            </div>
        </div>
    );
}
export default App;
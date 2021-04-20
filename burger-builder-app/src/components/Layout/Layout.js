import React from "react";
import Auxilary from "../../hoc/Auxilary";
import styles from './Layout.module.css';

const layout = (props) => {
    return (
        <Auxilary>
        <div>Toolbar, sidebar, backdrop</div>
        <main className={styles.container}>
            {props.children}
        </main>
        </Auxilary>
    )
}

export default layout;
import styles from "../header/styles.module.css"
import {RocketLaunch} from 'phosphor-react'


export function Header () {

    return (
        <header className={styles.header}>
            <RocketLaunch/>
        </header>
      );
}


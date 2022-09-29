import styles from "../sidebar/styles.module.css"
import { PencilLine } from 'phosphor-react'
import { Avatar } from "../avatar/Avatar";


export function SideBar() {
    return (  
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"/>

            <div className={styles.profile}>
                <Avatar src="https://github.com/LuciMacedo.png"/>
                <strong>Luci Macedo</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Edit your profile
                </a>
            </footer>
       </aside>
    );
}



import styles from "../comment/styles.module.css";
import { Avatar } from "../avatar/Avatar"

import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
 


export function Comment({ content, onDeleteComment}) {

    function handleDeleteComment() {
        onDeleteComment(content)
    }
    
    const [likeCounter, setLikeCounter] = useState(0)

    function handleLikeCounter(){
        setLikeCounter((state) => {
            return state + 1
        })
    }

    return (
        <div className={styles.comment}>

            <Avatar hasBorder={false} src="https://github.com/LuciMacedo.png"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Luci Macedo</strong>
                            <time>1 hour ago</time>
                        </div>
                        <button onClick={handleDeleteComment}title="Delete the comment">
                            <Trash size="24" />
                        </button>

                    </header>

                    <p>{content}</p>

                </div>

                <footer>
                    <button onClick={handleLikeCounter}>
                        <ThumbsUp size="20"/>
                        Like
                        <span>{likeCounter}</span>
                    </button>

                </footer>
            </div>
        </div>
    );
}

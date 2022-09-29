import { Avatar } from "../avatar/Avatar";
import styles from "../posts/styles.module.css"
import { format, formatDistanceToNow} from "date-fns";
import { useState } from "react";
import { Comment } from "../comment/Comment";




export function Post({ author, publishedAt, content}) {
   
  const publishedDateFormatted = format(publishedAt, "do 'of' LLLL 'at' h:mm")

  const timeDistanceToNow = formatDistanceToNow(publishedAt,{ addSuffix: true,
  })

  const [comments, setComments] = useState( [
    'top',
    'demais'                      
  ])

  const [newComentText, setNewCommentText] = useState('')


  function handleNewComment() {
    event.preventDefault()

    const newCommentText = event.target.input.value

    setComments([...comments, newCommentText])

    setNewCommentText(" ")
  } 

  function handleNewCommentChange() {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value)
  }

  function onDeleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
        return comment != commentToDelete;
      }
    )

    setComments(commentsWithoutDeletedOne)
  }
  
  function handleIvalidComment () {
     event.target.setCustomValidity('This field is mandatory')
  }

  const isNewCommentEmpty = newComentText.length === 0


  
  return (
    <article className={styles.post}>
      <header className={styles.postHeader}>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {timeDistanceToNow}
        </time>
      </header>
      <main className={styles.content}>

        {
          content.map( line => {
            if (line.type === 'paragraph') {
              return <p key={line.content}>{line.content}</p>
            } else if(line.type === 'link') {
              return ( 
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
              )
            }
          })
        }
        
      </main>

      <form onSubmit={handleNewComment} className={styles.commentForm}>

        <strong>Leave your comment</strong>

        <textarea
          placeholder="Leave your comment"
          name='input'
          onChange={handleNewCommentChange}
          value={newComentText}
          onInvalid={handleIvalidComment}
          required={true}
        />
        <footer  className={styles.button}>
          <button disabled={isNewCommentEmpty}type="submit">Comment</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        { comments.map(comment => {
            return (
            <Comment 
            key={comment} 
            content={comment}
            onDeleteComment={onDeleteComment}
            />
            )
          })}
      </div>
    </article>
  );
}


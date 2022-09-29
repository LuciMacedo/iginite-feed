import { Header } from "./components/header/Header";

import styles from "./styles.module.css"
import "././components/global.css"
import { Post } from "./components/posts/Posts";
import { SideBar } from "./components/sidebar/SideBar";
import { Comment } from "./components/comment/Comment";

export function App() {
  
const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/LuciMacedo.png',
      name: 'Luci Macedo',
      role: 'Web Developer'
    },
    content: [
      {type:"paragraph", content: "Hey Devs 👋"},

      {type:"paragraph", content: "I just uploaded another project in my portfolio. It's a project I did at NLW Return, Rocketseat event. The project name is DoctorCare. 🚀"},

      {type:"link", content: "👉 jane.design/doctorcare"}
    ],

    publishedAt: new Date("2022-08-05"),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/Diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO at Rocketseat'
    },
    content: [
      {type:"paragraph", content: "Hey Devs 👋"},

      {type:"paragraph", content: "I just uploaded another project in my portfolio. It's a project I did at NLW Return, Rocketseat event. The project name is DoctorCare. 🚀"}

    ],

    publishedAt: new Date("2022-08-10"),
  }
]


  return ( 
    <div>
    <Header/>
    
    <div className={styles.wrapper}>
      <SideBar/>
      <main>
        {
          posts.map( post => {
            return (
            <Post
            key={post.id}
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
            />
            ) 
          })
        }
      </main>
      
    </div>
    </div>
  )
}



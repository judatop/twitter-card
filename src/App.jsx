import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'


const users = [
    {
        id: 1,
        userName: "midudev",
        name: "Miguel Angel Duran",
        isFollowing: true
    },
    {
        id: 2,
        userName: "jose",
        name: "Jose",
        isFollowing: false
    },
    {
        id: 3,
        userName: "judatop",
        name: "Juan Garcia",
        isFollowing: true
    },
    {
        id:4,
        userName: "cquito4",
        name: "Cristian Quito",
        isFollowing: false
    }
]


export function App() {

    return (
        <section className="App">
            {
                users.map(user => {
                    const {id, userName, name, isFollowing} = user
                    return (
                        <TwitterFollowCard 
                        userName={userName} 
                        initialIsFollowing={isFollowing}
                        key={id}
                        >
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }

        </section>
    )
}
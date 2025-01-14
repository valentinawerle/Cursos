import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

 export function App() {
    return(
        <section className= "App">
        <TwitterFollowCard isFollowing userName="vapiuwu" name="Vapi"/>
        <TwitterFollowCard isFollowing userName="midudev" name="Midudev"/>
        <TwitterFollowCard isFollowing= {false} userName="sebasmarchadier" name="Sebas"/>
        <TwitterFollowCard isFollowing userName="matiasmarzo" name="Marzo"/>

        </section>

    )
}
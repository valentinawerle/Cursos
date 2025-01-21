import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

 export function App() {

    const formatUsername = (userName) => `@${userName}`

    return(
        <section className= "App">
        <TwitterFollowCard formatUsername={formatUsername}  userName="vapiuwu" name="Vapi"/>
        <TwitterFollowCard formatUsername={formatUsername}  userName="midudev" name="Midudev"/>
        <TwitterFollowCard formatUsername={formatUsername} userName="sebasmarchadier" name="Sebas"/>
        <TwitterFollowCard formatUsername={formatUsername} userName="matiasmarzo" name="Marzo"/>

        </section>

    )
} 
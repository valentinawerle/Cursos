import { useState } from "react"

export function TwitterFollowCard({formatUsername, userName, name, isFollowing}) {

  const [isFollowing, setIsFollowing] = useState(false)


  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  
  const buttonClassName = isFollowing ? 'tw-followCard-button tw-followCard-button--following' : 'tw-followCard-button'

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }


  return (
    <article className='tw-followCard'>
        <header className='tw-followCard-header'>
          <img
            className='tw-followCard-avatar'
            alt='El avatar de Vapi'
            src={`https://unavatar.io/${userName}`}
          />
          <div className='tw-followCard-info'>
            <strong>{name}</strong>
            <span className='tw-followCard-infoUserName'>{formatUsername(userName)}</span>
          </div>
        </header>

        <aside>
            <button className= {buttonClassName} onClick={handleClick}>
                {text}
            </button>
        </aside>
        </article>

  )
  
}
import React from 'react'

const MainInfo = ({user}) => {
  return (
    <>
        <div id='count'>
            <span><b>1,502</b> posts</span>
            <span><b>232M</b> followers</span>
            <span><b>262</b> following</span>
        </div>
        <div id='details'>
            <p><span>{user.name}</span> <br /> <span>Carpediem!</span> <br /> <span>one8.com</span></p>
        </div>
        <p id='info-foot'>Followed by milkuri_pranay, kunapavankalyan, tinopatel_ + 52 more</p>
    </>
  )
}

export default MainInfo
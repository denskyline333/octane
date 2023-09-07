import React from 'react'
import poster from '../img/images/poster.png'
import apexc from '../videos/apexvid.mp4'
function Video(){

return(
<section className="video">
    <video poster={poster} src={apexc}
        autoPlay muted loop width="1980" >
          
        Sorry, your br/owser doesn't support embedded videos.
    </video>
</section>
)

}

export default Video
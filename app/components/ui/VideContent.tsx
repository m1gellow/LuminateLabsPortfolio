'use client'

const VideContent = () => {
  return (
    <div>
         <div>
          <video
            src={require("./DarkTheme1.mp4")}
            autoPlay
            loop
            muted
            className="video"
          />
        </div>
    </div>
  )
}

export default VideContent
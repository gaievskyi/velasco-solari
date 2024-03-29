import ReactPlayer from "react-player"
import { Link } from "react-router-dom"

type WorkItemProps = {
  videoId: number
  index: string
  workName: string
}

export const WorkItem = ({ videoId, index, workName }: WorkItemProps) => (
  <div className="work">
    <div className="work-open">
      <Link to="/sample-project"></Link>
    </div>
    <div className="work-video">
      <div className="work-video-wrapper">
        <ReactPlayer
          url={`https://vimeo.com/${videoId}`}
          controls={false}
          autoPlay={true}
          loop={true}
          playing
          muted
          width="100%"
          height="100%"
        />
      </div>
    </div>
    <div className="work-info">
      <div className="work-index">
        <p>{index}</p>
      </div>
      <div className="work-name">
        <p>{workName}</p>
      </div>
    </div>
  </div>
)

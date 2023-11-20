import data from "../../../data.json"
import { BsFillPlayFill } from 'react-icons/bs'
import "./Home.scss"
import Films from "./Films/Films"
import { ICover, IFilms } from "../Interface"
import {useState, useEffect} from "react"


export default function Home() {
  const films: IFilms[] = data.TendingNow
  
  const [featured, setFeatured] = useState<ICover>(data.Featured)
  const [showVideoPlayer, setShowVideoPlayer] = useState<boolean>(false);
  const [lastClickedMovieId, setLastClickedMovieId] = useState<string | null>(null);
  

  const handleChange = (movie: IFilms) => {
    sessionStorage.setItem('selectedMovieId', movie.Id);
    setFeatured(movie)
    setTimeout(() => {
      setShowVideoPlayer(true)
    }, 2000);
  }

  const videoUrl = featured?.VideoUrl

  useEffect(() => {
    const storedMovieId = sessionStorage.getItem('selectedMovieId');   
    setLastClickedMovieId(storedMovieId);
    return () => {
      setShowVideoPlayer(false);
    };
  }, []);

  const clickedMovies = films.filter(movie => movie.Id === lastClickedMovieId);
  const unclickedMovies = films.filter(movie => movie.Id !== lastClickedMovieId);
  const sortedUnclickedMovies = [...unclickedMovies].sort((a, b) => new Date(b.Date).getTime() - new Date(a.Date).getTime());
  const sortedMovieList = [...clickedMovies, ...sortedUnclickedMovies];

  return (
    <div className="Home">
      <div className="img">
      {
        showVideoPlayer ? 
        (
          <video 
            autoPlay 
            className="video-player" 
            controls={false}
            onEnded={() => setShowVideoPlayer(false)}
            >
            <source src={videoUrl} type="video/mp4" />
          </video>
        )
        : (
            <img src={featured.CoverImage} alt={featured.CoverImage} />
        )
      }
      </div>
      <div className="Home-main">
        <div className="Home-main-info">
        <h4 className="Home-main-info-category">{featured.Category}</h4>
        <img src={featured.TitleImage} alt={featured.Title} />
        <p>
          {featured.ReleaseYear} {featured.MpaRating} {featured.Duration}
        </p>
        <p>{featured.Description}</p>
        <div className="button">
          <button><BsFillPlayFill /> Play</button>
          <button className="button-blue">More Info</button>
        </div>
        </div>
        <Films handleChange ={handleChange} sortedMovieList={sortedMovieList}/>
      </div>
    </div>
  )
}

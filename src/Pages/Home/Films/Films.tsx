import { useEffect, useRef } from "react";
import { IProps } from "../../Interface"
import "./Films.scss"


export default function Films({handleChange, sortedMovieList}:IProps) {
    
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const onWheel = (e: React.WheelEvent | Event) => {
        if ("deltaY" in e && e.deltaY !== 0) {
          e.preventDefault();
          el.scrollTo({
            left: el.scrollLeft + (e as React.WheelEvent).deltaY * 3,
            behavior: "smooth",
          });
        }
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);

  return (
    <div className="Films">
      <p className="Films-title">Trending Now</p>
      <div className="Films-items" ref={elRef}>
        {
          sortedMovieList.map(film => {
            return(
              <img src={film.CoverImage} alt={film.Title} key = {film.Id} onClick={() => handleChange(film)}/>
            )
          })
        }
      </div>
    </div>
  )
}
export default function Movie(props){

    return (<div className="movie-item-style-2">
        <img src={props.image} alt="" />
        <div className="mv-item-infor">
            <h6><a href="moviesingle.html">{props.title}</a></h6>
            <p className="rate"><i className="ion-android-star"></i><span>{props.rate}</span> /10</p>
            <p className="describe">{props.children}</p>
            <p className="run-time"> Run Time: {props.runtime}    .     <span>MMPA: PG-13 </span>    .     <span>Release: 1 May 2015</span></p>
            <p>Director: <a href="#">{props.director}</a></p>
            <p>Stars: <a href="#">{props.stars}</a></p>
        </div>
    </div>);
}
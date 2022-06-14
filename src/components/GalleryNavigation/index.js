import { NavLink } from "react-router-dom";

function GalleryNavigation (props) {
  console.log(props.galleries[0].id)
  return (
    <nav>
    <NavLink to="/">
     <h1>Galleries</h1>
     {props.galleries.map((gallery) => {
       return <NavLink key={gallery.id} to={`/galleries/:${gallery.id}`}>
        {gallery.name}
      </NavLink>
     })}

    </NavLink>
    </nav>
  )
};

export default GalleryNavigation;

import { createBrowserRouter } from "react-router";
import App from "../App";
import { movieAPIService } from "../Services/MovieAPIServices";
import Home_Page from "../Pages/Home-Page/HomePage";
import Add_Movie from "../Pages/Movie-Form/AddMovie";
import Movie_Detail_Page from "../Pages/Movie-Details/MovieDetailPage";
import ViewMovie from "../Pages/View-Movie/ViewMovie";
import Edit_Movie from "../Pages/Edit-Movie/EditMovie";
import Contact from "../Pages/Contact_Page/ContectPage"


export const Routes = {
  home: "/",
  addMovie: "/add-movie",
  movieDetails: "/movie/:id",
  editMovie: "/edit-movie/:id",
  viewMovie: "/view-movie",
  Contact: "/contact"
}

export const routes = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        loader: async () => {
          return await movieAPIService.fetchAllMovies();
        },
        Component: Home_Page,
      },
      {
        path: Routes.addMovie,
        Component: Add_Movie
      },
      {
        path: Routes.movieDetails,
        loader: async ({ params }) => {
          return await movieAPIService.fetchSingleMovie(params.id as string);
        },
        Component: Movie_Detail_Page
      },
      {
        path: Routes.viewMovie,
        Component: ViewMovie,
        loader: async () => {
          return await movieAPIService.fetchAllMovies();
        },
      },
      {
        path: Routes.editMovie,
        Component: Edit_Movie,
        loader: async ({ params }) => {
          return await movieAPIService.fetchSingleMovie(params.id as string);
        },
      },
      {
        path: Routes.Contact,
        Component: Contact
      }
    ]
  }
])

class MovieAPIService {
    movieURL: string = "http://localhost:3000/movies/";

    // Fetch All Movies
    async fetchAllMovies() {
        const res = await fetch(this.movieURL);
        const data = await res.json();
        return data;
    }

    // Add Movies
    async addMovieData(body: any) {
        const res = await fetch(this.movieURL, {
            method: "POST",
            body: JSON.stringify(body)
        });

        return res.ok;
    }

    // Fetch Single Movie
    async fetchSingleMovie(id: string) {
        const res = await fetch(this.movieURL + id);

        const data = await res.json()

        console.log(data);

        return data;
    }

    // Update Movie
    async updateMovie(id: string, body: any) {
        const res = await fetch(this.movieURL + id, { method: "PATCH", body: JSON.stringify(body) });
        return res.ok;
    }

    // Delete movie
    async deletemovie(id: string) {
        const res = await fetch(this.movieURL + id, {
            method: "DELETE"
        });

        return res.ok;
    }
}

export interface MovieType {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
    rating: number;
    trailer: string;
    description: string;
}

export const movieAPIService = new MovieAPIService();
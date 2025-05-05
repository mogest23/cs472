class Exercise3 {
    #movies = new Map();
    //key is the genre: string, value is array of movies
    // example: { thriller: [{ id: '1', title: 'The American'}, { id: '2', title: 'Arcadian'}] }

    add_genre(genre) {
        // add genre if genre does not exist
        // return true if the genre is added successfully, false otherwise
        if (!this.#movies.has(genre)) {
            this.#movies.set(genre, []);
            return true;
        }
        return false;
    }

    add_movie_in_genre(genre, new_movie) {
        // add movie if movie id does not exist
        // return true if the movie is added successfully, false otherwise
        if (!this.#movies.has(genre)) return false;

        const movies = this.#movies.get(genre);
        const exists = movies.some(movie => movie.id === new_movie.id);
        if (!exists) {
            movies.push(new_movie);
            return true;
        }
        return false;
    }

    update_movie_title_by_genre_and_movie_id(genre, movie_id, new_title) {
        // update a movie within a certain genre
        // return true if the movie's title is updated successfully, false otherwise
        if (!this.#movies.has(genre)) return false;

        const movies = this.#movies.get(genre);
        const movie = movies.find(m => m.id === movie_id);
        if (movie) {
            movie.title = new_title;
            return true;
        }
        return false;
    }

    delete_movie_by_genre_and_movie_id(genre, movie_id) {
        // delete movie
        // return true if the movie is delete successfully, false otherwise
        if (!this.#movies.has(genre)) return false;

        const movies = this.#movies.get(genre);
        const index = movies.findIndex(m => m.id === movie_id);
        if (index !== -1) {
            movies.splice(index, 1);
            return true;
        }
        return false;
    }

    get_movie_title_by_id(genre, movie_id) {
        // return the movie title 
        if (!this.#movies.has(genre)) return null;

        const movies = this.#movies.get(genre);
        const movie = movies.find(m => m.id === movie_id);
        return movie ? movie.title : null; // Return null is not found
    }
}



const db = new Exercise3();

console.log(db.add_genre('thriller')); // true
console.log(db.add_genre('comedy'));   // true
console.log(db.add_genre('thriller')); // false (already exists)

console.log(db.add_movie_in_genre('thriller', { id: '1', title: 'The American' })); // true
console.log(db.add_movie_in_genre('thriller', { id: '2', title: 'Arcadian' }));     // true
console.log(db.add_movie_in_genre('thriller', { id: '1', title: 'Duplicate' }));    // false

console.log(db.update_movie_title_by_genre_and_movie_id('thriller', '1', 'The American Updated')); // true
console.log(db.update_movie_title_by_genre_and_movie_id('thriller', '3', 'Unknown'));              // false

console.log(db.get_movie_title_by_id('thriller', '1')); // "The American Updated"
console.log(db.get_movie_title_by_id('thriller', '3')); // null

console.log(db.delete_movie_by_genre_and_movie_id('thriller', '2')); // true
console.log(db.delete_movie_by_genre_and_movie_id('thriller', '3')); // false

console.log(db.get_movie_title_by_id('thriller', '2')); // null
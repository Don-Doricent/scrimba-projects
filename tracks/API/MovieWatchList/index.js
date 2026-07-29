const searchEl = document.getElementById('searchButton')
const inputEl = document.getElementById('movieInput')
const movieArea = document.getElementById('movieContainer')



searchEl.addEventListener('click', function(event){
    fetch(`http://www.omdbapi.com/?apikey=a2e20d7f&s=${inputEl.value}`)
        .then(res => res.json())
        .then(data => {
           // console.log(data.Search[0].imdbID)

           const movieNames = data.Search.map(movie => {
                                return `
                                ${movie.Title}
                                ${movie.Year}
                                
                                `
                            }).join(" ")
            movieArea.innerHTML = movieNames

    fetch(`http://www.omdbapi.com/?apikey=a2e20d7f&i=${data.Search[0].imdbID}`)
        .then(res => res.json())
        .then(movieData => {
            console.log(movieData)
           

             movieArea.innerHTML = `
                <div class="movieCard">
                    <img src="${movieData.Poster}" alt="${movieData.Title} poster">

                    

                    <div> 

                        <h2>${movieData.Title}</h2>
                        <p> ⭐ ${movieData.imdbRating}</p>
                        <p>${movieData.Year}</p>
                        <p>${movieData.Runtime}</p>
                        <p>${movieData.Genre}</p>
                        <p>${movieData.Plot}</p>
                    </div>
                <div>
             `

              
        })

       
    })

    
})



        
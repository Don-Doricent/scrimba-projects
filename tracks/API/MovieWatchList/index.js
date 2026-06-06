const searchEl = document.getElementById('searchButton')
const inputEl = document.getElementById('movieInput')
const movieArea = document.getElementById('movieContainer')



searchEl.addEventListener('click', function(event){
    fetch(`http://www.omdbapi.com/?apikey=a2e20d7f&s=${inputEl.value}`)
        .then(res => res.json())
        .then(data => {
            console.log(data.Search[0].imdbID)

    fetch(`http://www.omdbapi.com/?apikey=a2e20d7f&i=${data.Search[0].imdbID}`)
        .then(res => res.json())
        .then(movieData => {
            console.log(movieData)

             movieArea.textContent = `
                ${movieData.Title}
                ${movieData.Poster}
                ${movieData.Ratings[0]}
                ${movieData.Year}

             `
        })

       
    })

    
})

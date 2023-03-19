const recetasUrl = "https://tasty.p.rapidapi.com/recipes/list?from=0&size=10&tags=under_30_minutes"

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3679555337msh796567c451036bap12161djsnd7e0abc35f6b',
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
	}
};
const contenedorRecetas = document.getElementById("contenedorRecetas");

fetch(recetasUrl, options)
	.then(response => response.json())
	.then(response => {
		response.results.map(item => {
			const recetas = document.createElement("div");
			recetas.classList.add("col-xl-5", "col-md-6", "col-sm-12")
			recetas.innerHTML = `
			                    <div class="containerRecetas">
		                        <p class="itemRecetas"> Receta: ${item.name} </p>
		                        <img class= "imgRecetas" src="${item.thumbnail_url}" alt="">
	                        	</div>`
			contenedorRecetas.appendChild(recetas);
		})
	})
	.catch(error => console.error(error));
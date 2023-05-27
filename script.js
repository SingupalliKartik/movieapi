async function sliderz(){

  const url = 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '078f9b6a02mshd01ae6b4db281adp18b5cfjsn4aa89c10faa5',
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
  };

  try {
	const response = await fetch(url, options);
	const result = await response.json().then((result) => {

          const list = result.results;
          list.map((item) => {
            if (item.primaryImage!=null) {
                const poster = item.primaryImage.url;

            const movie = `
            <div class="swiper-slide"><img src=${poster}></div>`;
            document.querySelector(".swiper-wrapper").innerHTML += movie;
          }
          });
        });
        
} catch (error) {
  console.error(error);
}

}
sliderz();
async function top1(){

  const url = 'https://moviesdatabase.p.rapidapi.com/titles?list=top_rated_250&sort=year.decr&endYear=2023&limit=12';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '078f9b6a02mshd01ae6b4db281adp18b5cfjsn4aa89c10faa5',
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
  };
  
  try {
	const response = await fetch(url, options);
	const result = await response.json().then((result) => {

          const list = result.results;
          list.map((item) => {
            if (item.primaryImage!=null) {
              const name = item.titleText.text;   
              const poster = item.primaryImage.url;

            const movie = `
            <div class="itemw item1">
            <div class="poster">
            <img src="${poster}">
            </div>
            <div class="name">${name}</div>
            </div>`;
            document.querySelector(".listz").innerHTML += movie;
          }
          });
        });
        
} catch (error) {
  console.error(error);
}

}
top1();
async function upcoming(){

  const url = 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '078f9b6a02mshd01ae6b4db281adp18b5cfjsn4aa89c10faa5',
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
  };
  
  try {
	const response = await fetch(url, options);
	const result = await response.json().then((result) => {

          const list = result.results;
          list.map((item) => {
            if (item.primaryImage!=null) {
              const name = item.titleText.text;   
              const poster = item.primaryImage.url;
              let day=item.releaseDate.day;
              let month =item.releaseDate.month;
              let year=item.releaseDate.year;
            const movie = `
            <div class="ucon">
            <div class="poster">
            <img src="${poster}">
            </div>
        
            <div class="name">${name}</div>
                <div class="date">Release Date: ${day} / ${month} / ${year} </div>
            </div>`;
            document.querySelector(".ulist").innerHTML += movie;
          }
          });
        });
        
} catch (error) {
  console.error(error);
}

}
upcoming();

const namea = document.querySelector("#namee");
let input = document.querySelector("#search");
const search = document.querySelector('#searchBtn')
async function movie(naam){
  const key = "1293a56d";
  const web = `http://www.omdbapi.com/?s=${naam}&apikey=${key}&type=movie`;
  let data = await fetch(web).then((ans) => ans.json()).catch((err) =>console.log(err));
  console.log(data);
  if(data.Response == 'True'){
    console.log('ander gaya');
    const d= data.Search;
    d.map((item)=>{
      console.log(item.Title);
      const name = item.Title;
        const poster = item.Poster;
        const year = item.Year;
        const movie = `
        <div class="itemdd item1">
        <div class="poster">
        <img src="${poster}">
        </div>
        
        <div class="name">${name}</div>
        <div class="Year">Year: ${year}</div>
        </div>`       ;
        document.querySelector(".itemsa").innerHTML += movie;
      });
      namea.innerHTML = `Showing Result for ${naam}`; 
    }
    else if(data.Response =="False")namea.innerHTML = `Result not Found for ${naam}`; 
  }
search.addEventListener("click", () => {
  document.querySelector(".itemsa").innerHTML = '';
  movie(input.value);
});
async function bygen(gen){
  document.querySelector(".items").innerHTML = "";
  const url = `https://moviesdatabase.p.rapidapi.com/titles?genre=${gen}&sort=year.decr&endYear=2022&limit=15`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '078f9b6a02mshd01ae6b4db281adp18b5cfjsn4aa89c10faa5',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json().then((result) => {

    const list = result.results;
    list.map((item) => {
      if (item.primaryImage!=null) {
    
        const poster = item.primaryImage.url;
      const movie = `

     <div class="item item1">
       <div class="poster">
            <img src="${poster}">
            </div>
  </div>
     `;
      document.querySelector(".items").innerHTML += movie;
    }
    });
  });
} catch (error) {
	console.error(error);
}
}


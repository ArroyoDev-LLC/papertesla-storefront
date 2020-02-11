axios.get('',
{
   
}).then(function(response)
{
   console.log("NO CODE ERR");
   document.getElementById('rating').innerHTML = response.rating;
   document.getElementById('name').innerHTML = response.name;
   document.getElementById('review').innerHTML = response.review;
}
);
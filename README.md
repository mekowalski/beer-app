<<<<<<< HEAD
# beer-app
Beer app for React Redux Portfolio Project
=======
# README

## Second attempt at the beer app for final project

Beer app for users to search for beers by the name, company or beer style.

I'm inspired by my CLI project to create this in a more 'mature' way

I also am inspired by where I live, in the small town of roughly 18,000 residents(2016),
there are 6 breweries and 1 distillery.


## RELATIONSHIPS
[this what makes sense to me for the model relations]

Beer belongs to a Company / EG: One Wit Wonder(Beer) belongs to Steamworks Brewery(Company)

Beer also belongs to a BeerStyle / EG: One Wit Wonder(Beer) belongs to an Ale(BeerStyle)


Company has many Beers /EG: Steamworks Brewery(company) has(many) Colorado Kolsch, Backside Stout, Conductor, etc(Beers)

Company also has many BeerStyles through Beers / EG: Steamworks Brewery(Company) has(many) Ale, Stout, Lager, etc(BeerStyles) through Prescribed Burn, Backside Stout, Steam Engine Lager(Beers)


BeerStyle has many beers / EG: Ale(BeerStyle) has(many) Third Eye PA, Ale Sabor, Rock Hopped Pale Ale(Beers)
>>>>>>> a1ee1aafa86185f09afceb81132a4c93ef526a85

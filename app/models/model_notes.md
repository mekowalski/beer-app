-on brewerydb the endpoint i will use is GET: /search
-i want to be able to use the search to look for beer, the types allowed are: brewery, beer, guild(group association) and event
-example: /search?q=cider&type=beer should return a successful status and the data relevant to the cider
<!-- -connect to api with: http://api.brewerydb.com/v2/ -->
-need to create/register new app to retrieve API private key
<!-- http://api.brewerydb/com/v2/?key=654321 -->

//with help
*model would be a search, attribute would be a keyword*
  model SEARCH: query string, STRING
       : type, STRING
       validate with options of type: beer, brewery, guild, event

*multiple kinds of searches*
-location not included in the GET: /search endpoint
-the BreweryDB site has many options for endpoints but thinking of just using search for the main
model with 2 attributes
-save all the searches input
-use that save to form api requests
-have views to look for previous searches and display those results
-store query string and type

-brewerydb return types are: json, xml and serialized php. i need to specify with return type by passing format parameter in query string of request.
-if not specified, json is returned, which is okay, i want that

http://www.w3schools.com/jquery/jquery_ref_selectors.asp

var value1 = $('input#username').val(); // textfield input value
var value2 = $('input:checkbox:checked').val(); // get the value from a checked checkbox
var value3 = $('input:radio[name=bar]:checked').val(); // get the value from a set of radio buttons

$("[href]"); 	//Selects all elements with an href attribute


// Refining selections.
$( "div.foo" ).has( "p" );         // div.foo elements that contain <p> tags
$( "h1" ).not( ".bar" );           // h1 elements that don't have a class of bar
$( "ul li" ).filter( ".current" ); // unordered list items with class of current
$( "ul li" ).first();              // just the first unordered list item
$( "ul li" ).eq( 5 );        
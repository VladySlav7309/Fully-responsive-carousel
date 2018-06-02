$( document ).ready( function() {
  var slideShow = function( event ) {
    console.log( 'app.js' );
    var direction = 'next';
    if( event && $( event.target ).is( '.prev' ) ) {
      direction = 'prev';
    }
    if( direction === 'next' ) {
      console.log( 'next' );
      $( '.area' ).first().insertAfter( '.area:last-child' );
    }
    if( direction === 'prev' ) {
      console.log( 'prev' );
      $( '.area' ).last().insertBefore( '.area:first-child' );
    }
  };
  $( '.arrows i' ).click( slideShow );

  setInterval( slideShow, 2000 );
})

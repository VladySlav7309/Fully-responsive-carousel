$( document ).ready( function() {
  var slideShow = function( event ) {
    var direction = 'next';
    if( event && $( event.target ).is( '.prev' ) ) {
      direction = 'prev';
    }
    $( '.carousel' ).children().addClass( 'transition_65' );
        if( direction === 'next' ) {
            let count = Math.round( $( '.carousel' ).width() / $( '.area' ).first().width() ) - 1;

            if( ( $( '.carousel' ).children().length / 2 ) < count ) {
                count = $( '.carousel' ).children().length - count -1;
            }

            let ratio = ( $( '.area' ).first().width() / $( '.carousel' ).width() * 10);
            let margin = '-' + ( count * ( ratio * 10 + 1 ) - 0.5 )  + '%';

            $( '.area' ).first().css( 'margin-right', margin ).delay( 650 ).queue( function() {
                $.each( $( '.area' ), function( index, area ) {
                    if( index < count ) {
                          $( area ).insertAfter( '.area:last-child' ).css( 'margin-right', '' ).dequeue();
                    }
                });
                $( '.carousel' ).children().removeClass( 'transition_65' );
            });
        }
        if( direction === 'prev' ) {
            let count = Math.round( $( '.carousel' ).width() / $( '.area' ).first().width() ) - 1;

            if( ( $( '.carousel' ).children().length / 2 ) < count ) {
                count = $( '.carousel' ).children().length - count -1;
            }

            let ratio = ( $( '.area' ).first().width() / $( '.carousel' ).width() * 10);
            let margin = '-' + ( count * ( ratio * 10 + 1) - 0.5 )  + '%';
            var areas = $( '.area' ).get().reverse();
            var number = $( '.carousel' ).children().length - count;
            var last = $( '.carousel' ).children()[ number];

            $( last ).css( 'margin-right', margin ).queue( function() {
                $.each( areas, function( index, area ) {
                        if( index < count ) {
                              $( area ).insertBefore( '.area:first-child' ).dequeue();
                        }
                });
            }).delay().queue( function() {
                $( last ).css( 'margin-right', '' ).delay( 650 ).queue( function() {
                    $( '.carousel' ).children().removeClass( 'transition_65' ).dequeue();
                }).dequeue();
            });

        }
  };

  $( '.arrows i' ).click( slideShow );
})

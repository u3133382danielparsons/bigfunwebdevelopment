scrollOffset = 200;
$(window).scroll(function() {
  $('.animate_when_top').each(function() {
    if ($(window).scrollTop()+$(window).height() >= $(this).position().top && $(window).scrollTop() < $(this).position().top + $(this).height()) {
      if (!$(this).hasClass('start_animation')) {
      $(this).addClass('start_animation');
      }
    } else if ($(this).hasClass('start_animation')) {
      $(this).removeClass('start_animation');
    }
  });
});

function inViewporthtml5( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let html5ElementInView = document.querySelector( '.html5' );
  if( inViewporthtml5( html5ElementInView ) ){
    html5ElementInView.classList.add('inViewport');
  } else if ( html5ElementInView ) {
    html5ElementInView.classList.remove('inViewport');
  }
});
function inViewportCss3( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let css3ElementInView = document.querySelector( '.css3' );
  if( inViewportCss3( css3ElementInView ) ){
    css3ElementInView.classList.add('inViewport');
  } else if ( css3ElementInView ) {
    css3ElementInView.classList.remove('inViewport');
  }
});
function inViewportJs( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let jsElementInView = document.querySelector( '.js' );
  if( inViewportJs( jsElementInView ) ){
    jsElementInView.classList.add('inViewport');
  } else if ( jsElementInView ) {
    jsElementInView.classList.remove('inViewport');
  }
});
function inViewportTs( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let tsElementInView = document.querySelector( '.ts' );
  if( inViewportTs( tsElementInView ) ){
    tsElementInView.classList.add('inViewport');
  } else if ( tsElementInView ) {
    tsElementInView.classList.remove('inViewport');
  }
});

function inViewportJquery( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let jqueryElementInView = document.querySelector( '.jquery' );
  if( inViewport( jqueryElementInView ) ){
    jqueryElementInView.classList.add('inViewport');
  } else if ( jqueryElementInView ) {
    jqueryElementInView.classList.remove('inViewport');
  }
});

function inViewportPhp( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let phpElementInView = document.querySelector( '.php' );
  if( inViewportPhp( phpElementInView ) ){
    phpElementInView.classList.add('inViewport');
  } else if ( phpElementInView ) {
    phpElementInView.classList.remove('inViewport');
  }
});

// function inViewport( element ) {
//   let bb = element.getBoundingClientRect();
//   return !(bb.top > innerHeight || bb.bottom < 0); 
// }
// document.addEventListener( 'scroll', event => {
//   let ElementInView = document.querySelector( '.' );
//   if( inViewport( ElementInView ) ){
//     ElementInView.classList.add('inViewport');
//   } else if ( ElementInView ) {
//     ElementInView.classList.remove('inViewport');
//   }
// });

// function inViewport( element ) {
//   let bb = element.getBoundingClientRect();
//   return !(bb.top > innerHeight || bb.bottom < 0); 
// }
// document.addEventListener( 'scroll', event => {
//   let ElementInView = document.querySelector( '.' );
//   if( inViewport( ElementInView ) ){
//     ElementInView.classList.add('inViewport');
//   } else if ( ElementInView ) {
//     ElementInView.classList.remove('inViewport');
//   }
// });
function inViewportSass( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let sassElementInView = document.querySelector( '.sass' );
  if( inViewportSass( sassElementInView ) ){
    sassElementInView.classList.add('inViewport');
  } else if ( sassElementInView ) {
    sassElementInView.classList.remove('inViewport');
  }
});

function inViewportWordpress( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let wordpressElementInView = document.querySelector( '.wordpress' );
  if( inViewportWordpress( wordpressElementInView ) ){
    wordpressElementInView.classList.add('inViewport');
  } else if ( wordpressElementInView ) {
    wordpressElementInView.classList.remove('inViewport');
  }
});
function inViewportDrupal( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let drupalElementInView = document.querySelector( '.drupal' );
  if( inViewportDrupal( drupalElementInView ) ){
    drupalElementInView.classList.add('inViewport');
  } else if ( drupalElementInView ) {
    drupalElementInView.classList.remove('inViewport');
  }
});

function inViewport( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let ElementInView = document.querySelector( '.react' );
  if( inViewport( ElementInView ) ){
    ElementInView.classList.add('inViewport');
  } else if ( ElementInView ) {
    ElementInView.classList.remove('inViewport');
  }
});
function inViewportRedux( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let reduxElementInView = document.querySelector( '.redux' );
  if( inViewportRedux( reduxElementInView ) ){
    reduxElementInView.classList.add('inViewport');
  } else if ( reduxElementInView ) {
    reduxElementInView.classList.remove('inViewport');
  }
});

function inViewportAngular( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let angularElementInView = document.querySelector( '.angular' );
  if( inViewportAngular( angularElementInView ) ){
    angularElementInView.classList.add('inViewport');
  } else if ( angularElementInView ) {
    angularElementInView.classList.remove('inViewport');
  }
});

function inViewportApple( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let appleElementInView = document.querySelector( '.apple' );
  if( inViewportApple( appleElementInView ) ){
    appleElementInView.classList.add('inViewport');
  } else if ( appleElementInView ) {
    appleElementInView.classList.remove('inViewport');
  }
});

function inViewportWindows( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let windowsElementInView = document.querySelector( '.windows' );
  if( inViewportWindows( windowsElementInView ) ){
    windowsElementInView.classList.add('inViewport');
  } else if ( windowsElementInView ) {
    windowsElementInView.classList.remove('inViewport');
  }
});

function inViewportlinux( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let linuxElementInView = document.querySelector( '.linux' );
  if( inViewportlinux( linuxElementInView ) ){
    linuxElementInView.classList.add('inViewport');
  } else if ( linuxElementInView ) {
    linuxElementInView.classList.remove('inViewport');
  }
});


function inViewportVs( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let vsElementInView = document.querySelector( '.vs' );
  if( inViewportVs( vsElementInView ) ){
    vsElementInView.classList.add('inViewport');
  } else if ( vsElementInView ) {
    vsElementInView.classList.remove('inViewport');
  }
});

function inViewportSublime( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let sublimeElementInView = document.querySelector( '.sublime' );
  if( inViewportSublime( sublimeElementInView ) ){
    sublimeElementInView.classList.add('inViewport');
  } else if ( sublimeElementInView ) {
    sublimeElementInView.classList.remove('inViewport');
  }
});

function inViewportSql( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let sqlElementInView = document.querySelector( '.sql' );
  if( inViewportSql( sqlElementInView ) ){
    sqlElementInView.classList.add('inViewport');
  } else if ( sqlElementInView ) {
    sqlElementInView.classList.remove('inViewport');
  }
});

function inViewportPostsql( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let postsqlElementInView = document.querySelector( '.postsql' );
  if( inViewportPostsql( postsqlElementInView ) ){
    postsqlElementInView.classList.add('inViewport');
  } else if ( postsqlElementInView ) {
    postsqlElementInView.classList.remove('inViewport');
  }
});

function inViewportMysql( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let sqlElementInView = document.querySelector( '.mysql' );
  if( inViewportMysql( sqlElementInView ) ){
    sqlElementInView.classList.add('inViewport');
  } else if ( sqlElementInView ) {
    sqlElementInView.classList.remove('inViewport');
  }
});

function inViewportMongo( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let mongoElementInView = document.querySelector( '.mongo' );
  if( inViewportMongo( mongoElementInView ) ){
    mongoElementInView.classList.add('inViewport');
  } else if ( mongoElementInView ) {
    mongoElementInView.classList.remove('inViewport');
  }
});

function inViewportGraphql( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let graphqlElementInView = document.querySelector( '.graphql' );
  if( inViewportGraphql( graphqlElementInView ) ){
    graphqlElementInView.classList.add('inViewport');
  } else if ( graphqlElementInView ) {
    graphqlElementInView.classList.remove('inViewport');
  }
});

function inViewport( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let ElementInView = document.querySelector( '.' );
  if( inViewport( ElementInView ) ){
    ElementInView.classList.add('inViewport');
  } else if ( ElementInView ) {
    ElementInView.classList.remove('inViewport');
  }
});

function inViewportGatsby( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let gatsbyElementInView = document.querySelector( '.gatsby' );
  if( inViewportGatsby( gatsbyElementInView ) ){
    gatsbyElementInView.classList.add('inViewport');
  } else if ( gatsbyElementInView ) {
    gatsbyElementInView.classList.remove('inViewport');
  }
});

function inViewportNext( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let nextElementInView = document.querySelector( '.next' );
  if( inViewportNext( nextElementInView ) ){
    nextElementInView.classList.add('inViewport');
  } else if ( nextElementInView ) {
    nextElementInView.classList.remove('inViewport');
  }
});

function inViewportJava( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let javaElementInView = document.querySelector( '.java' );
  if( inViewportJava( javaElementInView ) ){
    javaElementInView.classList.add('inViewport');
  } else if ( javaElementInView ) {
    javaElementInView.classList.remove('inViewport');
  }
});

function inViewportCplus( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let cplusElementInView = document.querySelector( '.cplus' );
  if( inViewportCplus( cplusElementInView ) ){
    cplusElementInView.classList.add('inViewport');
  } else if ( cplusElementInView ) {
    cplusElementInView.classList.remove('inViewport');
  }
});

function inViewportCsharp( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let csharpElementInView = document.querySelector( '.csharp' );
  if( inViewportCsharp( csharpElementInView ) ){
    csharpElementInView.classList.add('inViewport');
  } else if ( csharpElementInView ) {
    csharpElementInView.classList.remove('inViewport');
  }
});

function inViewportVue( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let vueElementInView = document.querySelector( '.vue' );
  if( inViewportVue( vueElementInView ) ){
    vueElementInView.classList.add('inViewport');
  } else if ( vueElementInView ) {
    vueElementInView.classList.remove('inViewport');
  }
});

function inViewportNode( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let nodeElementInView = document.querySelector( '.node' );
  if( inViewportNode( nodeElementInView ) ){
    nodeElementInView.classList.add('inViewport');
  } else if ( nodeElementInView ) {
    nodeElementInView.classList.remove('inViewport');
  }
});

function inViewportPython( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let pythonElementInView = document.querySelector( '.python' );
  if( inViewportPython( pythonElementInView ) ){
    pythonElementInView.classList.add('inViewport');
  } else if ( pythonElementInView ) {
    pythonElementInView.classList.remove('inViewport');
  }
});

function inViewportSvg( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let svgElementInView = document.querySelector( '.svg' );
  if( inViewportSvg( svgElementInView ) ){
    svgElementInView.classList.add('inViewport');
  } else if ( svgElementInView ) {
    svgElementInView.classList.remove('inViewport');
  }
});

function inViewportChrome( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let chromeElementInView = document.querySelector( '.chrome' );
  if( inViewportChrome( chromeElementInView ) ){
    chromeElementInView.classList.add('inViewport');
  } else if ( chromeElementInView ) {
    chromeElementInView.classList.remove('inViewport');
  }
});

function inViewportSafari( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let safariElementInView = document.querySelector( '.safari' );
  if( inViewportSafari( safariElementInView ) ) {
    safariElementInView.classList.add('inViewport');
  } else if ( safariElementInView ) {
    safariElementInView.classList.remove('inViewport');
  }
});

function inViewportFirefox( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let firefoxElementInView = document.querySelector( '.firefox' );
  if( inViewportFirefox( firefoxElementInView ) ){
    firefoxElementInView.classList.add('inViewport');
  } else if ( firefoxElementInView ) {
    firefoxElementInView.classList.remove('inViewport');
  }
});

function inViewportNightly( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let nightlyElementInView = document.querySelector( '.nightly' );
  if( inViewportNightly( nightlyElementInView ) ){
    nightlyElementInView.classList.add('inViewport');
  } else if ( nightlyElementInView ) {
    nightlyElementInView.classList.remove('inViewport');
  }
});

function inViewportEdge( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let edgeElementInView = document.querySelector( '.edge' );
  if( inViewport( edgeElementInView ) ){
    edgeElementInView.classList.add('inViewport');
  } else if ( edgeElementInView ) {
    edgeElementInView.classList.remove('inViewport');
  }
});

function inViewportAdobe( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let adobeElementInView = document.querySelector( '.adobe' );
  if( inViewportAdobe( adobeElementInView ) ){
    adobeElementInView.classList.add('inViewport');
  } else if ( adobeElementInView ) {
    adobeElementInView.classList.remove('inViewport');
  }
});

function inViewportXd( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let xdElementInView = document.querySelector( '.xd' );
  if( inViewportXd( xdElementInView ) ){
    xdElementInView.classList.add('inViewport');
  } else if ( xdElementInView ) {
    xdElementInView.classList.remove('inViewport');
  }
});

function inViewportPs( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let psElementInView = document.querySelector( '.ps' );
  if( inViewportPs( psElementInView ) ){
    psElementInView.classList.add('inViewport');
  } else if ( psElementInView ) {
    psElementInView.classList.remove('inViewport');
  }
});

function inViewportAi( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let aiElementInView = document.querySelector( '.ai' );
  if( inViewportAi( aiElementInView ) ){
    aiElementInView.classList.add('inViewport');
  } else if ( aiElementInView ) {
    aiElementInView.classList.remove('inViewport');
  }
});

function inViewportRuby( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let rubyElementInView = document.querySelector( '.ruby' );
  if( inViewportRuby( rubyElementInView ) ){
    rubyElementInView.classList.add('inViewport');
  } else if ( rubyElementInView ) {
    rubyElementInView.classList.remove('inViewport');
  }
});

function inViewportCc( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let ccElementInView = document.querySelector( '.cc' );
  if( inViewportCc( ccElementInView ) ){
    ccElementInView.classList.add('inViewport');
  } else if ( ccElementInView ) {
    ccElementInView.classList.remove('inViewport');
  }
});

function inViewportGit( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let gitElementInView = document.querySelector( '.git' );
  if( inViewportGit( gitElementInView ) ){
    gitElementInView.classList.add('inViewport');
  } else if ( gitElementInView ) {
    gitElementInView.classList.remove('inViewport');
  }
});

function inViewportFirebase( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let firebaseElementInView = document.querySelector( '.firebase' );
  if( inViewportFirebase( firebaseElementInView ) ){
    firebaseElementInView.classList.add('inViewport');
  } else if ( firebaseElementInView ) {
    firebaseElementInView.classList.remove('inViewport');
  }
});

function inViewportRails( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let railsElementInView = document.querySelector( '.rails' );
  if( inViewportRails( railsElementInView ) ){
    railsElementInView.classList.add('inViewport');
  } else if ( railsElementInView ) {
    railsElementInView.classList.remove('inViewport');
  }
});

function inViewportCpanel( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let cpanelElementInView = document.querySelector( '.cpanel' );
  if( inViewport( cpanelElementInView ) ){
    cpanelElementInView.classList.add('inViewport');
  } else if ( cpanelElementInView ) {
    cpanelElementInView.classList.remove('inViewport');
  }
});

function inViewportFz( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let fzElementInView = document.querySelector( '.fz' );
  if( inViewport( fzElementInView ) ){
    fzElementInView.classList.add('inViewport');
  } else if ( fzElementInView ) {
    fzElementInView.classList.remove('inViewport');
  }
});

function inViewportNetlify( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let netlifyElementInView = document.querySelector( '.netlify' );
  if( inViewport( netlifyElementInView ) ){
    netlifyElementInView.classList.add('inViewport');
  } else if ( netlifyElementInView ) {
    netlifyElementInView.classList.remove('inViewport');
  }
});

function inViewportBootstrap( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let bootstrapElementInView = document.querySelector( '.bootstrap' );
  if( inViewportBootstrap( bootstrapElementInView ) ){
    bootstrapElementInView.classList.add('inViewport');
  } else if ( bootstrapElementInView ) {
    bootstrapElementInView.classList.remove('inViewport');
  }
});

function inViewportMaterial( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let materialElementInView = document.querySelector( '.material' );
  if( inViewportMaterial( materialElementInView ) ){
    materialElementInView.classList.add('inViewport');
  } else if ( materialElementInView ) {
    materialElementInView.classList.remove('inViewport');
  }
});

function inViewportAzure( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let azureElementInView = document.querySelector( '.azure' );
  if( inViewportAzure( azureElementInView ) ){
    azureElementInView.classList.add('inViewport');
  } else if ( azureElementInView ) {
    ElementInView.classList.remove('inViewport');
  }
});

function inViewportYii( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let yiiElementInView = document.querySelector( '.yii' );
  if( inViewportYii( yiiElementInView ) ){
    yiiElementInView.classList.add('inViewport');
  } else if ( yiiElementInView ) {
    yiiElementInView.classList.remove('inViewport');
  }
});

function inViewportMeteor( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let meteorElementInView = document.querySelector( '.meteor' );
  if( inViewportMeteor( meteorElementInView ) ){
    meteorElementInView.classList.add('inViewport');
  } else if ( meteorElementInView ) {
    meteorElementInView.classList.remove('inViewport');
  }
});

function inViewportLaravel( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
function inViewportCoffee( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let coffeeElementInView = document.querySelector( '.coffee' );
  if( inViewportCoffee( coffeeElementInView ) ){
    coffeeElementInView.classList.add('inViewport');
  } else if ( coffeeElementInView ) {
    coffeeElementInView.classList.remove('inViewport');
  }
});

// function inViewport( element ) {
//   let bb = element.getBoundingClientRect();
//   return !(bb.top > innerHeight || bb.bottom < 0); 
// }
// document.addEventListener( 'scroll', event => {
//   let ElementInView = document.querySelector( '.' );
//   if( inViewport( ElementInView ) ){
//     ElementInView.classList.add('inViewport');
//   } else if ( ElementInView ) {
//     ElementInView.classList.remove('inViewport');
//   }
// });

// function inViewport( element ) {
//   let bb = element.getBoundingClientRect();
//   return !(bb.top > innerHeight || bb.bottom < 0); 
// }
// document.addEventListener( 'scroll', event => {
//   let ElementInView = document.querySelector( '.' );
//   if( inViewport( ElementInView ) ){
//     ElementInView.classList.add('inViewport');
//   } else if ( ElementInView ) {
//     ElementInView.classList.remove('inViewport');
//   }
// });

// function inViewport( element ) {
//   let bb = element.getBoundingClientRect();
//   return !(bb.top > innerHeight || bb.bottom < 0); 
// }
// document.addEventListener( 'scroll', event => {
//   let ElementInView = document.querySelector( '.' );
//   if( inViewport( ElementInView ) ){
//     ElementInView.classList.add('inViewport');
//   } else if ( ElementInView ) {
//     ElementInView.classList.remove('inViewport');
//   }
// });

// function inViewport( element ) {
//   let bb = element.getBoundingClientRect();
//   return !(bb.top > innerHeight || bb.bottom < 0); 
// }
// document.addEventListener( 'scroll', event => {
//   let ElementInView = document.querySelector( '.' );
//   if( inViewport( ElementInView ) ){
//     ElementInView.classList.add('inViewport');
//   } else if ( ElementInView ) {
//     ElementInView.classList.remove('inViewport');
//   }
// });
document.addEventListener( 'scroll', event => {
  let laravelElementInView = document.querySelector( '.laravel' );
  if( inViewportLaravel( laravelElementInView ) ){
    laravelElementInView.classList.add('inViewport');
  } else if ( laravelElementInView ) {
    laravelElementInView.classList.remove('inViewport');
  }
});
function inViewportJson( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let jsonElementInView = document.querySelector( '.json' );
  if( inViewportJson( jsonElementInView ) ){
    jsonElementInView.classList.add('inViewport');
  } else if ( jsonElementInView ) {
    jsonElementInView.classList.remove('inViewport');
  }
});
// function inViewport( element ) {
//   let bb = element.getBoundingClientRect();
//   return !(bb.top > innerHeight || bb.bottom < 0); 
// }
// document.addEventListener( 'scroll', event => {
//   let ElementInView = document.querySelector( '.' );
//   if( inViewport( ElementInView ) ){
//     ElementInView.classList.add('inViewport');
//   } else if ( ElementInView ) {
//     ElementInView.classList.remove('inViewport');
//   }
// });
// function inViewport( element ) {
//   let bb = element.getBoundingClientRect();
//   return !(bb.top > innerHeight || bb.bottom < 0); 
// }
// document.addEventListener( 'scroll', event => {
//   let ElementInView = document.querySelector( '.' );
//   if( inViewport( ElementInView ) ){
//     ElementInView.classList.add('inViewport');
//   } else if ( ElementInView ) {
//     ElementInView.classList.remove('inViewport');
//   }
// });

function inViewportBulma( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let bulmaElementInView = document.querySelector( '.bulma' );
  if( inViewportBulma( bulmaElementInView ) ){
    bulmaElementInView.classList.add('inViewport');
  } else if ( bulmaElementInView ) {
    bulmaElementInView.classList.remove('inViewport');
  }
});

function inViewportD3( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let d3ElementInView = document.querySelector( '.d3' );
  if( inViewportD3( d3ElementInView ) ){
    d3ElementInView.classList.add('inViewport');
  } else if ( d3ElementInView ) {
    d3ElementInView.classList.remove('inViewport');
  }
});

function inViewportW3c( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let w3cElementInView = document.querySelector( '.w3c' );
  if( inViewportW3c( w3cElementInView ) ){
    w3cElementInView.classList.add('inViewport');
  } else if ( w3cElementInView ) {
    w3cElementInView.classList.remove('inViewport');
  }
});
function inViewportPhonegap( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let phonegapElementInView = document.querySelector( '.phonegap' );
  if( inViewportPhonegap( phonegapElementInView ) ){
    phonegapElementInView.classList.add('inViewport');
  } else if ( phonegapElementInView ) {
    phonegapElementInView.classList.remove('inViewport');
  }
});

function inViewportAurelia( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let aureliaElementInView = document.querySelector( '.aurelia' );
  if( inViewportAurelia( aureliaElementInView ) ){
    aureliaElementInView.classList.add('inViewport');
  } else if ( aureliaElementInView ) {
    aureliaElementInView.classList.remove('inViewport');
  }
});

function inViewportOracle( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let oracleElementInView = document.querySelector( '.oracle' );
  if( inViewportOracle( oracleElementInView ) ){
    oracleElementInView.classList.add('inViewport');
  } else if ( oracleElementInView ) {
    oracleElementInView.classList.remove('inViewport');
  }
});

function inViewportBackbone( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let backboneElementInView = document.querySelector( '.backbone' );
  if( inViewportBackbone( backboneElementInView ) ){
    backboneElementInView.classList.add('inViewport');
  } else if ( backboneElementInView ) {
    backboneElementInView.classList.remove('inViewport');
  }
});

function inViewportMaterialize( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let materializeElementInView = document.querySelector( '.materialize' );
  if( inViewportMaterialize( materializeElementInView ) ){
    materializeElementInView.classList.add('inViewport');
  } else if ( materializeElementInView ) {
    materializeElementInView.classList.remove('inViewport');
  }
});

// function inViewport( element ) {
//   let bb = element.getBoundingClientRect();
//   return !(bb.top > innerHeight || bb.bottom < 0); 
// }
// document.addEventListener( 'scroll', event => {
//   let ElementInView = document.querySelector( '.' );
//   if( inViewport( ElementInView ) ){
//     ElementInView.classList.add('inViewport');
//   } else if ( ElementInView ) {
//     ElementInView.classList.remove('inViewport');
//   }
// });

function inViewportGoogle( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let googleElementInView = document.querySelector( '.google' );
  if( inViewportGoogle( googleElementInView ) ){
    googleElementInView.classList.add('inViewport');
  } else if ( googleElementInView ) {
    googleElementInView.classList.remove('inViewport');
  }
});

// function inViewport( element ) {
//   let bb = element.getBoundingClientRect();
//   return !(bb.top > innerHeight || bb.bottom < 0); 
// }
// document.addEventListener( 'scroll', event => {
//   let ElementInView = document.querySelector( '.' );
//   if( inViewport( ElementInView ) ){
//     ElementInView.classList.add('inViewport');
//   } else if ( ElementInView ) {
//     ElementInView.classList.remove('inViewport');
//   }
// });

// function inViewport( element ) {
//   let bb = element.getBoundingClientRect();
//   return !(bb.top > innerHeight || bb.bottom < 0); 
// }
// document.addEventListener( 'scroll', event => {
//   let ElementInView = document.querySelector( '.' );
//   if( inViewport( ElementInView ) ){
//     ElementInView.classList.add('inViewport');
//   } else if ( ElementInView ) {
//     ElementInView.classList.remove('inViewport');
//   }
// });

// function inViewport( element ) {
//   let bb = element.getBoundingClientRect();
//   return !(bb.top > innerHeight || bb.bottom < 0); 
// }
// document.addEventListener( 'scroll', event => {
//   let ElementInView = document.querySelector( '.' );
//   if( inViewport( ElementInView ) ){
//     ElementInView.classList.add('inViewport');
//   } else if ( ElementInView ) {
//     ElementInView.classList.remove('inViewport');
//   }
// });

// function inViewport( element ) {
//   let bb = element.getBoundingClientRect();
//   return !(bb.top > innerHeight || bb.bottom < 0); 
// }
// document.addEventListener( 'scroll', event => {
//   let ElementInView = document.querySelector( '.' );
//   if( inViewport( ElementInView ) ){
//     ElementInView.classList.add('inViewport');
//   } else if ( ElementInView ) {
//     ElementInView.classList.remove('inViewport');
//   }
// });

// function inViewport( element ) {
//   let bb = element.getBoundingClientRect();
//   return !(bb.top > innerHeight || bb.bottom < 0); 
// }
// document.addEventListener( 'scroll', event => {
//   let ElementInView = document.querySelector( '.' );
//   if( inViewport( ElementInView ) ){
//     ElementInView.classList.add('inViewport');
//   } else if ( ElementInView ) {
//     ElementInView.classList.remove('inViewport');
//   }
// });



// function inViewport( element ) {
//   let bb = element.getBoundingClientRect();
//   return !(bb.top > innerHeight || bb.bottom < 0); 
// }
// document.addEventListener( 'scroll', event => {
//   let ElementInView = document.querySelector( '.' );
//   if( inViewport( ElementInView ) ){
//     ElementInView.classList.add('inViewport');
//   } else if ( ElementInView ) {
//     ElementInView.classList.remove('inViewport');
//   }
// });

function inViewportFlutter( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let flutterElementInView = document.querySelector( '.flutter' );
  if( inViewportFlutter( flutterElementInView ) ){
    flutterElementInView.classList.add('inViewport');
  } else if ( flutterElementInView ) {
    flutterElementInView.classList.remove('inViewport');
  }
});

// function inViewport( element ) {
//   let bb = element.getBoundingClientRect();
//   return !(bb.top > innerHeight || bb.bottom < 0); 
// }
// document.addEventListener( 'scroll', event => {
//   let ElementInView = document.querySelector( '.' );
//   if( inViewport( ElementInView ) ){
//     ElementInView.classList.add('inViewport');
//   } else if ( ElementInView ) {
//     ElementInView.classList.remove('inViewport');
//   }
// });

// function inViewport( element ) {
//   let bb = element.getBoundingClientRect();
//   return !(bb.top > innerHeight || bb.bottom < 0); 
// }
// document.addEventListener( 'scroll', event => {
//   let ElementInView = document.querySelector( '.' );
//   if( inViewport( ElementInView ) ){
//     ElementInView.classList.add('inViewport');
//   } else if ( ElementInView ) {
//     ElementInView.classList.remove('inViewport');
//   }
// });

// function inViewport( element ) {
//   let bb = element.getBoundingClientRect();
//   return !(bb.top > innerHeight || bb.bottom < 0); 
// }
// document.addEventListener( 'scroll', event => {
//   let ElementInView = document.querySelector( '.' );
//   if( inViewport( ElementInView ) ){
//     ElementInView.classList.add('inViewport');
//   } else if ( ElementInView ) {
//     ElementInView.classList.remove('inViewport');
//   }
// });

// function inViewport( element ) {
//   let bb = element.getBoundingClientRect();
//   return !(bb.top > innerHeight || bb.bottom < 0); 
// }
// document.addEventListener( 'scroll', event => {
//   let ElementInView = document.querySelector( '.' );
//   if( inViewport( ElementInView ) ){
//     ElementInView.classList.add('inViewport');
//   } else if ( ElementInView ) {
//     ElementInView.classList.remove('inViewport');
//   }
// });

function inViewportfigma( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let figmaElementInView = document.querySelector( '.figma' );
  if( inViewportfigma( figmaElementInView ) ){
    figmaElementInView.classList.add('inViewport');
  } else if ( figmaElementInView ) {
    figmaElementInView.classList.remove('inViewport');
  }
});

// function inViewport( element ) {
//   let bb = element.getBoundingClientRect();
//   return !(bb.top > innerHeight || bb.bottom < 0); 
// }
// document.addEventListener( 'scroll', event => {
//   let ElementInView = document.querySelector( '.' );
//   if( inViewport( ElementInView ) ){
//     ElementInView.classList.add('inViewport');
//   } else if ( ElementInView ) {
//     ElementInView.classList.remove('inViewport');
//   }
// });

// function inViewport( element ) {
//   let bb = element.getBoundingClientRect();
//   return !(bb.top > innerHeight || bb.bottom < 0); 
// }
// document.addEventListener( 'scroll', event => {
//   let ElementInView = document.querySelector( '.' );
//   if( inViewport( ElementInView ) ){
//     ElementInView.classList.add('inViewport');
//   } else if ( ElementInView ) {
//     ElementInView.classList.remove('inViewport');
//   }
// });

// function inViewport( element ) {
//   let bb = element.getBoundingClientRect();
//   return !(bb.top > innerHeight || bb.bottom < 0); 
// }
// document.addEventListener( 'scroll', event => {
//   let ElementInView = document.querySelector( '.' );
//   if( inViewport( ElementInView ) ){
//     ElementInView.classList.add('inViewport');
//   } else if ( ElementInView ) {
//     ElementInView.classList.remove('inViewport');
//   }
// });

// function inViewport( element ) {
//   let bb = element.getBoundingClientRect();
//   return !(bb.top > innerHeight || bb.bottom < 0); 
// }
// document.addEventListener( 'scroll', event => {
//   let ElementInView = document.querySelector( '.' );
//   if( inViewport( ElementInView ) ){
//     ElementInView.classList.add('inViewport');
//   } else if ( ElementInView ) {
//     ElementInView.classList.remove('inViewport');
//   }
// });

// function inViewport( element ) {
//   let bb = element.getBoundingClientRect();
//   return !(bb.top > innerHeight || bb.bottom < 0); 
// }
// document.addEventListener( 'scroll', event => {
//   let ElementInView = document.querySelector( '.' );
//   if( inViewport( ElementInView ) ){
//     ElementInView.classList.add('inViewport');
//   } else if ( ElementInView ) {
//     ElementInView.classList.remove('inViewport');
//   }
// });

// function inViewport( element ) {
//   let bb = element.getBoundingClientRect();
//   return !(bb.top > innerHeight || bb.bottom < 0); 
// }
// document.addEventListener( 'scroll', event => {
//   let ElementInView = document.querySelector( '.' );
//   if( inViewport( ElementInView ) ){
//     ElementInView.classList.add('inViewport');
//   } else if ( ElementInView ) {
//     ElementInView.classList.remove('inViewport');
//   }
// });

// function inViewport( element ) {
//   let bb = element.getBoundingClientRect();
//   return !(bb.top > innerHeight || bb.bottom < 0); 
// }
// document.addEventListener( 'scroll', event => {
//   let ElementInView = document.querySelector( '.' );
//   if( inViewport( ElementInView ) ){
//     ElementInView.classList.add('inViewport');
//   } else if ( ElementInView ) {
//     ElementInView.classList.remove('inViewport');
//   }
// });
// function inViewport( element ) {
//   let bb = element.getBoundingClientRect();
//   return !(bb.top > innerHeight || bb.bottom < 0); 
// }
// document.addEventListener( 'scroll', event => {
//   let ElementInView = document.querySelector( '.' );
//   if( inViewport( ElementInView ) ){
//     ElementInView.classList.add('inViewport');
//   } else if ( ElementInView ) {
//     ElementInView.classList.remove('inViewport');
//   }
// });
function inViewportAspnet( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let aspnetElementInView = document.querySelector( '.aspnet' );
  if( inViewportAspnet( aspnetElementInView ) ){
    aspnetElementInView.classList.add('inViewport');
  } else if ( aspnetElementInView ) {
    aspnetElementInView.classList.remove('inViewport');
  }
});
// function inViewport( element ) {
//   let bb = element.getBoundingClientRect();
//   return !(bb.top > innerHeight || bb.bottom < 0); 
// }
// document.addEventListener( 'scroll', event => {
//   let ElementInView = document.querySelector( '.' );
//   if( inViewport( ElementInView ) ){
//     ElementInView.classList.add('inViewport');
//   } else if ( ElementInView ) {
//     ElementInView.classList.remove('inViewport');
//   }
// });

function inViewportBabylon( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let babylonElementInView = document.querySelector( '.babylon' );
  if( inViewportBabylon( babylonElementInView ) ){
    babylonElementInView.classList.add('inViewport');
  } else if ( babylonElementInView ) {
    babylonElementInView.classList.remove('inViewport');
  }
});
// function inViewport( element ) {
//   let bb = element.getBoundingClientRect();
//   return !(bb.top > innerHeight || bb.bottom < 0); 
// }
// document.addEventListener( 'scroll', event => {
//   let ElementInView = document.querySelector( '.' );
//   if( inViewport( ElementInView ) ){
//     ElementInView.classList.add('inViewport');
//   } else if ( ElementInView ) {
//     ElementInView.classList.remove('inViewport');
//   }
// });
// function inViewport( element ) {
//   let bb = element.getBoundingClientRect();
//   return !(bb.top > innerHeight || bb.bottom < 0); 
// }
// document.addEventListener( 'scroll', event => {
//   let ElementInView = document.querySelector( '.' );
//   if( inViewport( ElementInView ) ){
//     ElementInView.classList.add('inViewport');
//   } else if ( ElementInView ) {
//     ElementInView.classList.remove('inViewport');
//   }
// });
// function inViewport( element ) {
//   let bb = element.getBoundingClientRect();
//   return !(bb.top > innerHeight || bb.bottom < 0); 
// }
// document.addEventListener( 'scroll', event => {
//   let ElementInView = document.querySelector( '.' );
//   if( inViewport( ElementInView ) ){
//     ElementInView.classList.add('inViewport');
//   } else if ( ElementInView ) {
//     ElementInView.classList.remove('inViewport');
//   }
// });

// function inViewport( element ) {
//   let bb = element.getBoundingClientRect();
//   return !(bb.top > innerHeight || bb.bottom < 0); 
// }
// document.addEventListener( 'scroll', event => {
//   let ElementInView = document.querySelector( '.' );
//   if( inViewport( ElementInView ) ){
//     ElementInView.classList.add('inViewport');
//   } else if ( ElementInView ) {
//     ElementInView.classList.remove('inViewport');
//   }
// });
function inViewportScala( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let scalaElementInView = document.querySelector( '.scala' );
  if( inViewportScala( scalaElementInView ) ){
    scalaElementInView.classList.add('inViewport');
  } else if ( scalaElementInView ) {
    scalaElementInView.classList.remove('inViewport');
  }
});
// function inViewport( element ) {
//   let bb = element.getBoundingClientRect();
//   return !(bb.top > innerHeight || bb.bottom < 0); 
// }
// document.addEventListener( 'scroll', event => {
//   let ElementInView = document.querySelector( '.' );
//   if( inViewport( ElementInView ) ){
//     ElementInView.classList.add('inViewport');
//   } else if ( ElementInView ) {
//     ElementInView.classList.remove('inViewport');
//   }
// });
function inViewportFlask( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let flaskElementInView = document.querySelector( '.flask' );
  if( inViewportFlask( flaskElementInView ) ){
    flaskElementInView.classList.add('inViewport');
  } else if ( flaskElementInView ) {
    flaskElementInView.classList.remove('inViewport');
  }
});

// function inViewport( element ) {
//   let bb = element.getBoundingClientRect();
//   return !(bb.top > innerHeight || bb.bottom < 0); 
// }
// document.addEventListener( 'scroll', event => {
//   let ElementInView = document.querySelector( '.' );
//   if( inViewport( ElementInView ) ){
//     ElementInView.classList.add('inViewport');
//   } else if ( ElementInView ) {
//     ElementInView.classList.remove('inViewport');
//   }
// });
// function inViewport( element ) {
//   let bb = element.getBoundingClientRect();
//   return !(bb.top > innerHeight || bb.bottom < 0); 
// }
// document.addEventListener( 'scroll', event => {
//   let ElementInView = document.querySelector( '.' );
//   if( inViewport( ElementInView ) ){
//     ElementInView.classList.add('inViewport');
//   } else if ( ElementInView ) {
//     ElementInView.classList.remove('inViewport');
//   }
// });
// function inViewport( element ) {
//   let bb = element.getBoundingClientRect();
//   return !(bb.top > innerHeight || bb.bottom < 0); 
// }
// document.addEventListener( 'scroll', event => {
//   let ElementInView = document.querySelector( '.' );
//   if( inViewport( ElementInView ) ){
//     ElementInView.classList.add('inViewport');
//   } else if ( ElementInView ) {
//     ElementInView.classList.remove('inViewport');
//   }
// });
function inViewportDocker( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let dockerElementInView = document.querySelector( '.docker' );
  if( inViewportDocker( dockerElementInView ) ){
    dockerElementInView.classList.add('inViewport');
  } else if ( dockerElementInView ) {
    dockerElementInView.classList.remove('inViewport');
  }
});

function inViewportContenta( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let contentaElementInView = document.querySelector( '.contenta' );
  if( inViewportContenta( contentaElementInView ) ){
    contentaElementInView.classList.add('inViewport');
  } else if ( contentaElementInView ) {
    contentaElementInView.classList.remove('inViewport');
  }
});
// function inViewport( element ) {
//   let bb = element.getBoundingClientRect();
//   return !(bb.top > innerHeight || bb.bottom < 0); 
// }
// document.addEventListener( 'scroll', event => {
//   let ElementInView = document.querySelector( '.' );
//   if( inViewport( ElementInView ) ){
//     ElementInView.classList.add('inViewport');
//   } else if ( ElementInView ) {
//     ElementInView.classList.remove('inViewport');
//   }
// });
// function inViewport( element ) {
//   let bb = element.getBoundingClientRect();
//   return !(bb.top > innerHeight || bb.bottom < 0); 
// }
// document.addEventListener( 'scroll', event => {
//   let ElementInView = document.querySelector( '.' );
//   if( inViewport( ElementInView ) ){
//     ElementInView.classList.add('inViewport');
//   } else if ( ElementInView ) {
//     ElementInView.classList.remove('inViewport');
//   }
// });
// function inViewport( element ) {
//   let bb = element.getBoundingClientRect();
//   return !(bb.top > innerHeight || bb.bottom < 0); 
// }
// document.addEventListener( 'scroll', event => {
//   let ElementInView = document.querySelector( '.' );
//   if( inViewport( ElementInView ) ){
//     ElementInView.classList.add('inViewport');
//   } else if ( ElementInView ) {
//     ElementInView.classList.remove('inViewport');
//   }
// });

// function inViewport( element ) {
//   let bb = element.getBoundingClientRect();
//   return !(bb.top > innerHeight || bb.bottom < 0); 
// }
// document.addEventListener( 'scroll', event => {
//   let ElementInView = document.querySelector( '.' );
//   if( inViewport( ElementInView ) ){
//     ElementInView.classList.add('inViewport');
//   } else if ( ElementInView ) {
//     ElementInView.classList.remove('inViewport');
//   }
// });
function inViewportJade( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let jadeElementInView = document.querySelector( '.jade' );
  if( inViewportJade( jadeElementInView ) ){
    jadeElementInView.classList.add('inViewport');
  } else if ( jadeElementInView ) {
    jadeElementInView.classList.remove('inViewport');
  }
});
// function inViewport( element ) {
//   let bb = element.getBoundingClientRect();
//   return !(bb.top > innerHeight || bb.bottom < 0); 
// }
// document.addEventListener( 'scroll', event => {
//   let ElementInView = document.querySelector( '.' );
//   if( inViewport( ElementInView ) ){
//     ElementInView.classList.add('inViewport');
//   } else if ( ElementInView ) {
//     ElementInView.classList.remove('inViewport');
//   }
// });
// function inViewport( element ) {
//   let bb = element.getBoundingClientRect();
//   return !(bb.top > innerHeight || bb.bottom < 0); 
// }
// document.addEventListener( 'scroll', event => {
//   let ElementInView = document.querySelector( '.' );
//   if( inViewport( ElementInView ) ){
//     ElementInView.classList.add('inViewport');
//   } else if ( ElementInView ) {
//     ElementInView.classList.remove('inViewport');
//   }
// });

function inViewportObjc( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let objcElementInView = document.querySelector( '.objc' );
  if( inViewportObjc( objcElementInView ) ){
    objcElementInView.classList.add('inViewport');
  } else if ( objcElementInView ) {
    objcElementInView.classList.remove('inViewport');
  }
});
function inViewportBrew( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let brewElementInView = document.querySelector( '.brew' );
  if( inViewportBrew( brewElementInView ) ){
    brewElementInView.classList.add('inViewport');
  } else if ( brewElementInView ) {
    brewElementInView.classList.remove('inViewport');
  }
});
// function inViewport( element ) {
//   let bb = element.getBoundingClientRect();
//   return !(bb.top > innerHeight || bb.bottom < 0); 
// }
// document.addEventListener( 'scroll', event => {
//   let ElementInView = document.querySelector( '.' );
//   if( inViewport( ElementInView ) ){
//     ElementInView.classList.add('inViewport');
//   } else if ( ElementInView ) {
//     ElementInView.classList.remove('inViewport');
//   }
// });
function inViewportSlack( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let slackElementInView = document.querySelector( '.slack' );
  if( inViewportSlack( slackElementInView ) ){
    slackElementInView.classList.add('inViewport');
  } else if ( slackElementInView ) {
    slackElementInView.classList.remove('inViewport');
  }
});

// function inViewport( element ) {
//   let bb = element.getBoundingClientRect();
//   return !(bb.top > innerHeight || bb.bottom < 0); 
// }
// document.addEventListener( 'scroll', event => {
//   let ElementInView = document.querySelector( '.' );
//   if( inViewport( ElementInView ) ){
//     ElementInView.classList.add('inViewport');
//   } else if ( ElementInView ) {
//     ElementInView.classList.remove('inViewport');
//   }
// });
// function inViewport( element ) {
//   let bb = element.getBoundingClientRect();
//   return !(bb.top > innerHeight || bb.bottom < 0); 
// }
// document.addEventListener( 'scroll', event => {
//   let ElementInView = document.querySelector( '.' );
//   if( inViewport( ElementInView ) ){
//     ElementInView.classList.add('inViewport');
//   } else if ( ElementInView ) {
//     ElementInView.classList.remove('inViewport');
//   }
// });
function inViewportMdn( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let mdnElementInView = document.querySelector( '.mdn' );
  if( inViewportMdn( mdnElementInView ) ){
    mdnElementInView.classList.add('inViewport');
  } else if ( mdnElementInView ) {
    mdnElementInView.classList.remove('inViewport');
  }
});
function inViewportZepto( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let zeptoElementInView = document.querySelector( '.zepto' );
  if( inViewportZepto( zeptoElementInView ) ){
    zeptoElementInView.classList.add('inViewport');
  } else if ( zeptoElementInView ) {
    zeptoElementInView.classList.remove('inViewport');
  }
});

function inViewportLess( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let lessElementInView = document.querySelector( '.less' );
  if( inViewportLess( lessElementInView ) ){
    lessElementInView.classList.add('inViewport');
  } else if ( lessElementInView ) {
    lessElementInView.classList.remove('inViewport');
  }
});
// function inViewport( element ) {
//   let bb = element.getBoundingClientRect();
//   return !(bb.top > innerHeight || bb.bottom < 0); 
// }
// document.addEventListener( 'scroll', event => {
//   let ElementInView = document.querySelector( '.' );
//   if( inViewport( ElementInView ) ){
//     ElementInView.classList.add('inViewport');
//   } else if ( ElementInView ) {
//     ElementInView.classList.remove('inViewport');
//   }
// });

function inViewportElint( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let elintElementInView = document.querySelector( '.elint' );
  if( inViewportElint( elintElementInView ) ){
    elintElementInView.classList.add('inViewport');
  } else if ( elintElementInView ) {
    elintElementInView.classList.remove('inViewport');
  }
});
// function inViewport( element ) {
//   let bb = element.getBoundingClientRect();
//   return !(bb.top > innerHeight || bb.bottom < 0); 
// }
// document.addEventListener( 'scroll', event => {
//   let ElementInView = document.querySelector( '.' );
//   if( inViewport( ElementInView ) ){
//     ElementInView.classList.add('inViewport');
//   } else if ( ElementInView ) {
//     ElementInView.classList.remove('inViewport');
//   }
// });

// function inViewport( element ) {
//   let bb = element.getBoundingClientRect();
//   return !(bb.top > innerHeight || bb.bottom < 0); 
// }
// document.addEventListener( 'scroll', event => {
//   let ElementInView = document.querySelector( '.' );
//   if( inViewport( ElementInView ) ){
//     ElementInView.classList.add('inViewport');
//   } else if ( ElementInView ) {
//     ElementInView.classList.remove('inViewport');
//   }
// });
function inViewportSusy( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let susyElementInView = document.querySelector( '.susy' );
  if( inViewportSusy( susyElementInView ) ){
    susyElementInView.classList.add('inViewport');
  } else if ( susyElementInView ) {
    susyElementInView.classList.remove('inViewport');
  }
});

// function inViewport( element ) {
//   let bb = element.getBoundingClientRect();
//   return !(bb.top > innerHeight || bb.bottom < 0); 
// }
// document.addEventListener( 'scroll', event => {
//   let ElementInView = document.querySelector( '.' );
//   if( inViewport( ElementInView ) ){
//     ElementInView.classList.add('inViewport');
//   } else if ( ElementInView ) {
//     ElementInView.classList.remove('inViewport');
//   }
// });
// function inViewport( element ) {
//   let bb = element.getBoundingClientRect();
//   return !(bb.top > innerHeight || bb.bottom < 0); 
// }
// document.addEventListener( 'scroll', event => {
//   let ElementInView = document.querySelector( '.' );
//   if( inViewport( ElementInView ) ){
//     ElementInView.classList.add('inViewport');
//   } else if ( ElementInView ) {
//     ElementInView.classList.remove('inViewport');
//   }
// });

// function inViewport( element ) {
//   let bb = element.getBoundingClientRect();
//   return !(bb.top > innerHeight || bb.bottom < 0); 
// }
// document.addEventListener( 'scroll', event => {
//   let ElementInView = document.querySelector( '.' );
//   if( inViewport( ElementInView ) ){
//     ElementInView.classList.add('inViewport');
//   } else if ( ElementInView ) {
//     ElementInView.classList.remove('inViewport');
//   }
// });
// function inViewport( element ) {
//   let bb = element.getBoundingClientRect();
//   return !(bb.top > innerHeight || bb.bottom < 0); 
// }
// document.addEventListener( 'scroll', event => {
//   let ElementInView = document.querySelector( '.' );
//   if( inViewport( ElementInView ) ){
//     ElementInView.classList.add('inViewport');
//   } else if ( ElementInView ) {
//     ElementInView.classList.remove('inViewport');
//   }
// });

function inViewportTaffy( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let taffyElementInView = document.querySelector( '.taffy' );
  if( inViewportTaffy( taffyElementInView ) ){
    taffyElementInView.classList.add('inViewport');
  } else if ( taffyElementInView ) {
    taffyElementInView.classList.remove('inViewport');
  }
});
function inViewportSkeleton( element ) {
  let bb = element.getBoundingClientRect();
  return !(bb.top > innerHeight || bb.bottom < 0); 
}
document.addEventListener( 'scroll', event => {
  let skeletonElementInView = document.querySelector( '.skeleton' );
  if( inViewportSkeleton( skeletonElementInView ) ){
    skeletonElementInView.classList.add('inViewport');
  } else if ( skeletonElementInView ) {
    skeletonElementInView.classList.remove('inViewport');
  }
});
var React = require('react');

class Html extends React.Component {
  render() {
    return (
      <html>
      <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
          <meta httpEquiv="Content-Language" content="EN"/>
          <meta name="description" content="The Noble Qur'an in many languages in an easy-to-use interface."/>
          <meta name="keywords" content="quran, koran, qur'an, al quran al kareem, holy, arabic, iman, islam, Allah, book, muslim, english, dutch, french, german, indonesian, italian, japanese, portuguese, russian, spanish, swahili"/>
          <meta name="Charset" content="UTF-8"/>
          <meta name="Distribution" content="Global"/>
          <meta name="Rating" content="General"/>

          <meta property="og:title" content="The Noble Qur'an - القرآن الكريم" />
          <meta property="og:description" content="Quran.com provides the best reading, listening and learning experience for Muslims all around the world." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="http://quran.com/" />
          <meta property="og:image" content="http://quran.com/images/thumbnail.png" />

          <meta name="twitter:card" content="summary_large_image">
          <meta name="twitter:site" content="@nytimes">
          <meta name="twitter:title" content="The Noble Qur'an - القرآن الكري">
          <meta name="twitter:description" content="Quran.com provides the best reading, listening and learning experience for Muslims all around the world.">
          <meta name="twitter:image" content="http://quran.com/images/thumbnail.png">

          <title>{this.props.context.getStore('ApplicationStore').getPageTitle()}</title>
          <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1" />
          <link rel="stylesheet" href={this.props.hotModuleUrl + 'build/main.css'} />
          {this.props.fontFaces.map(function(font) {
            return (
              <style type="text/css" dangerouslySetInnerHTML={{__html: font}} />
            )
          })}
      </head>
      <body>
          <div id="app" dangerouslySetInnerHTML={{__html: this.props.markup}}></div>
      </body>
      <script dangerouslySetInnerHTML={{__html: this.props.state}}></script>
      <script src={this.props.hotModuleUrl + 'build/main.js'}></script>
      </html>
    );
  }
}

module.exports = Html;

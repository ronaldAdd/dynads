import React from 'react'
import { WebView } from 'react-native-webview';
function Scrape() {
  return (
    <>
      <h3>Iframes in React</h3>
      <WebView
   source={{html: '<iframe width="100%" height="50%" src="https://www.youtube.com/embed/cqyziA30whE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'}}
   style={{marginTop: 20}}
/>    </>
  )
}

export default Scrape


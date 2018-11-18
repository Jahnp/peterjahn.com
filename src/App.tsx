import * as React from 'react';
import './App.css';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <h1 className="App-title">
        <span className="secretEmoji">👋</span>
        <span className="text">Hi!</span>
      </h1>

        <h2>
          I'm Peter. 
        </h2>

        <p>
          I'm a UX Engineering Manager at <a href="https://microsoft.com
">Microsoft</a>. 
        </p>
        <p>
          My team brings together design &amp; code to make engaging and polished experiences for <a href="https://onedrive.live.com/about
">OneDrive</a>, <a href="https://sharepoint.com
">SharePoint</a>, and <a href="https://uifabric.io
">Microsoft UI Fabric</a>.
        </p>

        <p>
          I live in beautiful Seattle. And yes, I love the rain.
        </p>

        <p>
          Some other things I love:
        </p>

        <ul className="interests">
          <li className="interest">
            <span className="secretEmoji">🙂</span><span className="text">People, in general</span>
          </li>
          <li className="interest">
            <span className="secretEmoji">✍</span><span className="text">Calligraphy</span>
          </li>
          <li className="interest">
            <span className="secretEmoji">🎸</span><span className="text">Fingerstyle guitar</span>
          </li>
          <li className="interest">
            <span className="secretEmoji">🍷</span><span className="text">Red wine</span>
          </li>
          <li className="interest">
            <span className="secretEmoji">🗻</span><span className="text">Hiking</span>
          </li>
          <li className="interest">
            <span className="secretEmoji">🍠</span><span className="text">Root vegetables</span>
          </li>
          <li className="interest">
            <span className="secretEmoji">👟️</span><span className="text">Running</span>
          </li>
          <li className="interest">
            <span className="secretEmoji">🤯</span><span className="text">Emojis</span>
          </li>
          <li className="interest">
            <span className="secretEmoji">📖</span><span className="text">Book typography</span>
          </li>
          <li className="interest">
            <span className="secretEmoji">🐶</span><span className="text">Doggies</span>
          </li>
        </ul>

        <p>
          You can find me on these fine social media networks:
          {' '}
          <a href="https://www.linkedin.com/in/peter-jahn/">LinkedIn</a>. <a href="https://twitter.com/PeterJahn">Twitter</a>. <a href="https://github.com/jahnp">GitHub</a>.
        </p>
      </div>
    );
  }
}

export default App;

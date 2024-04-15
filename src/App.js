import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';
import PopupList from './component/popup/PopupList';

function App() {
  return (
  <Router>
  <div className="App">
            <nav>
              <Link to="/PopupList">Popup</Link> {/* 새로운 링크 페이지로 이동하는 링크 */}
            </nav>
            <Routes>
              <Route path="/PopupList" element={<PopupList />} /> {/* 새로운 링크 페이지의 라우트 */}
            </Routes>
        </div>
  </Router>
  );
}

export default App;

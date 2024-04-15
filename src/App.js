import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PopupDetail from './component/popup/PopupDetail';

function App() {
  return (
    
  <Router>
  <div className="App">
            <nav>
                <ul>
                    <li>
                        <Link to="/PopupDetail">PopupDetail</Link> {/* 새로운 링크 페이지로 이동하는 링크 */}
                    </li>
                </ul>
            </nav>
            <Route path="/PopupDetail" component={PopupDetail} /> {/* 새로운 링크 페이지의 라우트 */}
        </div>
  </Router>
  
  );
}

export default App;

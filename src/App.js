/* eslint-disable jsx-a11y/anchor-is-valid */
import "./assets/style/all.scss";
import footerBanner from "./assets/images/notice 1.png";

function App() {
  return (
    <div className="app pt-22">
      <div className="container">
        <header className="mb-10">
          <h1 className="px-5 py-4">白金瑪麗</h1>
        </header>
        <main className="mb-12">
          <h2 className="mb-10">已蒐集到的店家清單​</h2>
          <p className="mb-4">10/12 Bar Mood</p>
          <p className="mb-50">11/29 To Infinity and Beyond</p>
          <ul className="row btn-group">
            <li className="col-12 mb-2">
              <a href="#" className="py-3">
                點這集點
              </a>
            </li>
            <li className="col-4">
              <a href="#" className="py-2">
                LINE POINTS 兌換
              </a>
            </li>
            <li className="col-4">
              <a href="#" className="py-4">
                活動店家
              </a>
            </li>
            <li className="col-4">
              <a href="#" className="py-4">
                已集點店家
              </a>
            </li>
          </ul>
        </main>
      </div>
      <footer>
        <img src={footerBanner} alt="footerBanner" />
      </footer>
    </div>
  );
}

export default App;

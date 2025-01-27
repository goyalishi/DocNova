/* /* import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import DocumentDashboard from "./components/DocumentDashboard";
import Sidebar from "./components/Sidebar";
import "./App.css"; // Make sure your styles are well linked

const App = () => {
    return (
        <Router>
            <div className="App">
                <header className="app-header">
                    <h1>Welcome to Google Docs Clone</h1>
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<LoginPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/signup" element={<SignupPage />} />
                        <Route path="/documents" element={<DocumentDashboard />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default App;
 
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";
import SignupPage from "./components/SignupPage/SignupPage";
import DocumentDashboard from "./components/DocumentDashboard/DocumentDashboard";
import Sidebar from "./components/Sidebar/Sidebar";
import GoogleDocsCloneHeader from "./components/GoogleDocsCloneHeader/GoogleDocsCloneHeader";
import "./styles/App.css";

const App = () => {
    return (
        <Router>
            <div className="app">
                <GoogleDocsCloneHeader />
                <main>
                    <Routes>
                        <Route path="/" element={<LoginPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/signup" element={<SignupPage />} />
                        <Route path="/documents" element={<DocumentDashboard />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default App;
 */
/*
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GoogleDocsCloneHeader from "./components/GoogleDocsCloneHeader";
import DocumentDashboard from "./components/DocumentDashboard";
import DocumentForm from "./components/DocumentForm";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import "./styles/App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <GoogleDocsCloneHeader />
        <main>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<DocumentDashboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
*/
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import GoogleDocsCloneHeader from "./components/GoogleDocsCloneHeader";
// import DocumentDashboard from "./components/DocumentDashboard";
// import DocumentForm from "./components/DocumentForm";
// import LoginPage from "./components/LoginPage";
// import SignupPage from "./components/SignupPage";
// import "./App.css";
// import "./components/SignupPage.css"
// import "./components/LoginPage.css"
// import "./components/DocumentDashboard.css"
// import "./components/DocumentForm.css"
// import "./components/GoogleDocsCloneHeader.css"


// const App = () => {
//   return (
//     <Router>
//       <div className="app">
//         <GoogleDocsCloneHeader />
//         <main>
//           <Routes>
//             <Route path="/" element={<LoginPage />} />
//             <Route path="/signup" element={<SignupPage />} />
//             <Route path="/login" element={<LoginPage />} />
//             <Route path="/dashboard" element={<DocumentDashboard />} />
//           </Routes>
//         </main>
//       </div>
//     </Router>
//   );
// };

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importing components
import GoogleDocsCloneHeader from "./components/GoogleDocsCloneHeader";
import DocumentDashboard from "./components/DocumentDashboard";
import DocumentForm from "./components/DocumentForm";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";

// Importing styles
import "./App.css";
import "./components/SignupPage.css";
import "./components/LoginPage.css";
import "./components/DocumentDashboard.css";
import "./components/DocumentForm.css";
import "./components/GoogleDocsCloneHeader.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        {/* Header */}
        {/* <GoogleDocsCloneHeader /> */}
        
        {/* Main content */}
        <main>
          <Routes>
            {/* Define routes */}
            <Route path="/" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<DocumentDashboard />} />
            {/* <Route path="/dashb" element={<DocumentForm/>} />
            <Route path="/dashba" element={<DocumentList/>} /> */}

          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;

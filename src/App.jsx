import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Searchbar from "./components/Searchbar";
import Home from "./pages/home";
import Signup from "./pages/signup";
import Dashboard from "./pages/dashboard";
import ReportIssue from "./pages/reportissue";
import IssueList from "./pages/issuelist";
import IssueDetails from "./pages/issuedetails";
import Contact from "./pages/contact";
import AdminPanel from "./pages/adminpanel";
import Search from "./pages/search";
import About from "./pages/about";
import ViewIssues from "./pages/ViewIssues";
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar />
        <main className="flex-grow p-6 mt-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/report-issue" element={<ReportIssue />} />
            <Route path="/issues" element={<IssueList />} />
            <Route path="/issues/:id" element={<IssueDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/report" element={<ReportIssue />} />
            <Route path="/view" element={<ViewIssues />} />
            <Route path="/search" element={<Search />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

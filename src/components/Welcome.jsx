/*import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";


const Welcome = () => {
  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 animate-fade-in">
      <NavBar />
      <div className="text-center max-w-3xl px-4 mt-8">
        {/* Hero Section */
       /* <h1 className="text-5xl font-bold mb-6">
          <span className="text-indigo-600">Welcome to</span> <span className="text-indigo-600">StudentHub</span>
        </h1>
        <p className="text-xl text-black font-semibold mb-8">
          Connect with fellow students, share knowledge, and build meaningful relationships
          in your academic journey.
        </p>

        {/* CTA Buttons */
       /* < className="space-x-4 mb-12">
          <Link
            to="/login"
            className="btn btn-primary btn-lg shadow-lg hover:shadow-xl transform transition hover:-translate-y-1"
          >
            Login
          </Link>
          <Link
            to="/login"
            className="btn btn-outline btn-lg hover:bg-indigo-50"
          >
            Sign Up
          </Link>
=======

const Logo = () => (
  <div className="flex items-center gap-2">
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="20" fill="#4C0070" />
      <text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="bold" dy=".3em">SH</text>
    </svg>
    <span className="text-2xl font-bold text-indigo-600">Student Hub</span>
  </div>
);

const Welcome = () => {
  return (
    <div className="min-h-[85vh] flex flex-col bg-gradient-to-br from-blue-50 to-indigo-100 animate-fade-in">
      {/* Custom NavBar for Welcome page */
      /*<nav className="navbar bg-base-300 px-8 py-2 flex items-center justify-between w-full">
        <Logo />
        <div className="flex items-center gap-4">
          <Link to="/login" className="btn btn-primary">Login</Link>
          <Link to="/login" className="btn btn-outline">Sign Up</Link>

        </div>
      </nav>
      <div className="flex flex-col items-center justify-center flex-1 w-full mt-8">
        <div className="text-center max-w-3xl px-4">
          {/* Hero Section */
         /* <h1 className="text-5xl font-bold mb-6">
            <span className="text-indigo-600">Welcome to</span> <span className="text-indigo-600">StudentHub</span>
          </h1>
          <p className="text-xl text-black font-semibold mb-8">
            Connect with fellow students, share knowledge, and build meaningful relationships
            in your academic journey.
          </p>

          {/* CTA Buttons (hidden, since they're in the header now) */
          {/* Features Section */}
          /*<div id="features" className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card">
              <div className="text-indigo-600 mb-4">
                <svg
                  className="w-12 h-12 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Connect with Peers</h3>
              <p className="text-gray-600">
                Find and connect with students who share your academic interests and goals.
              </p>
            </div>

            <div className="feature-card">
              <div className="text-indigo-600 mb-4">
                <svg
                  className="w-12 h-12 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Share Knowledge</h3>
              <p className="text-gray-600">
                Exchange ideas, resources, and experiences with your fellow students.
              </p>
            </div>

            <div className="feature-card">
              <div className="text-indigo-600 mb-4">
                <svg
                  className="w-12 h-12 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Grow Together</h3>
              <p className="text-gray-600">
                Build lasting relationships and support each other's academic success.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Welcome; */
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Logo = () => (
  <div className="flex items-center gap-2">
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="20" fill="#4C0070" />
      <text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="bold" dy=".3em">SH</text>
    </svg>
    <span className="text-2xl font-bold text-indigo-600">Student Hub</span>
  </div>
);

const Welcome = () => {
  return (
    <div className="min-h-[85vh] flex flex-col bg-gradient-to-br from-blue-50 to-indigo-100 animate-fade-in">
      {/* Custom NavBar for Welcome page */}
      <nav className="navbar bg-base-300 px-8 py-2 flex items-center justify-between w-full">
        <Logo />
        <div className="flex items-center gap-4">
          <Link to="/login" className="btn btn-primary">Login</Link>
          <Link to="/login" className="btn btn-outline">Sign Up</Link>
        </div>
      </nav>

      <div className="flex flex-col items-center justify-center flex-1 w-full mt-8">
        <div className="text-center max-w-3xl px-4">
          {/* Hero Section */}
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-indigo-600">Welcome to</span> <span className="text-indigo-600">StudentHub</span>
          </h1>
          <p className="text-xl text-black font-semibold mb-8">
            Connect with fellow students, share knowledge, and build meaningful relationships
            in your academic journey.
          </p>

          {/* Features Section */}
          <div id="features" className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card">
              <div className="text-indigo-600 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Connect with Peers</h3>
              <p className="text-gray-600">
                Find and connect with students who share your academic interests and goals.
              </p>
            </div>

            <div className="feature-card">
              <div className="text-indigo-600 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Share Knowledge</h3>
              <p className="text-gray-600">
                Exchange ideas, resources, and experiences with your fellow students.
              </p>
            </div>

            <div className="feature-card">
              <div className="text-indigo-600 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Grow Together</h3>
              <p className="text-gray-600">
                Build lasting relationships and support each other's academic success.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Welcome;

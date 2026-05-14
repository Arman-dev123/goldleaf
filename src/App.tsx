/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Packages from './pages/Packages';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import GlobalPublishing from './pages/GlobalPublishing';
import AuthorMarketing from './pages/AuthorMarketing';
import AuthorPlatforms from './pages/AuthorPlatforms';
import BookCoverDesign from './pages/BookCoverDesign';
import ExitIntentPopup from './components/ui/ExitIntentPopup';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <ExitIntentPopup />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/global-publishing" element={<GlobalPublishing />} />
            <Route path="/author-marketing" element={<AuthorMarketing />} />
            <Route path="/author-platforms" element={<AuthorPlatforms />} />
            <Route path="/book-cover-design" element={<BookCoverDesign />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="top-center" expand={false} richColors />
      </div>
    </Router>
  );
}


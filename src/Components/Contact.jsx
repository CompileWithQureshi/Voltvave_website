import React from 'react';

function Contact() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-10 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <nav>
          <h6 className="footer-title font-bold mb-4">Services</h6>
          <ul>
            <li><a href="#" className="link link-hover">Branding</a></li>
            <li><a href="#" className="link link-hover">Design</a></li>
            <li><a href="#" className="link link-hover">Marketing</a></li>
            <li><a href="#" className="link link-hover">Advertisement</a></li>
          </ul>
        </nav>
        <nav>
          <h6 className="footer-title font-bold mb-4">Company</h6>
          <ul>
            <li><a href="#" className="link link-hover">About us</a></li>
            <li><a href="#" className="link link-hover">Contact</a></li>
            <li><a href="#" className="link link-hover">Jobs</a></li>
            <li><a href="#" className="link link-hover">Press kit</a></li>
          </ul>
        </nav>
        <nav>
          <h6 className="footer-title font-bold mb-4">Legal</h6>
          <ul>
            <li><a href="#" className="link link-hover">Terms of use</a></li>
            <li><a href="#" className="link link-hover">Privacy policy</a></li>
            <li><a href="#" className="link link-hover">Cookie policy</a></li>
          </ul>
        </nav>
        <form>
          <h6 className="footer-title font-bold mb-4">Newsletter</h6>
          <input type="email" placeholder="Enter your email" className="input w-full mb-4 text-black" />
          <button className="btn bg-primary text-white w-full">Subscribe</button>
        </form>
      </div>
    </footer>
  );
}

export default Contact;

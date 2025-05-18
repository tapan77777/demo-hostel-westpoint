// import { Instagram, MailsIcon, MessageCircle, Phone } from 'lucide-react';
// import React from 'react';

// function Footer() {
//   return (
//     <footer className="bg-white border-t mt-12">
//       <div className="px-6 md:px-16 py-10 grid md:grid-cols-3 gap-6 text-sm text-gray-600">
        

//          {/* Map */}
//          <div>
//           <h3 className="text-lg font-semibold mb-2 text-[#FF5E5B]">Location</h3>
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11408.735401398506!2d88.252037!3d27.0252252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e42f81812656f1%3A0xc308405e923b6ed4!2sWest%20Point%20Backpackers%20Hostel%2C%20Darjeeling!5e0!3m2!1sen!2sin!4v1715606670000!5m2!1sen!2sin"
//             width="300s"
//             height="150"
//             style={{ border: 0 }}
//             allowFullScreen=""
//             loading="lazy"
//             title="Google Map"
//           ></iframe>
//         </div>





//         {/* Contact Info */}
//         <div className="space-y-2">
//           <h3 className="text-lg font-semibold mb-2 text-[#FF5E5B]">Contact Us</h3>
//           <p className="flex items-center gap-4"><Phone size={16} /> <a href="tel:+918327823438">+91 83278 23438</a></p>
//           <p className="flex items-center gap-4"><MessageCircle size={16} /> <a href="https://wa.me/918327823438" target="_blank" rel="noreferrer">WhatsApp Chat</a></p>
//           <p className="flex items-center gap-4"><Instagram size={16} /> <a href="https://www.instagram.com/west_point_backpackers_darj" target="_blank" rel="noreferrer">westpointbackpackers</a></p>
//           <p className="flex items-center gap-4"><MailsIcon size={16} /> <a href="https://email.com" target="_blank" rel="noreferrer">westpointdarjeeling@gmail.com</a></p>
//         </div>

       
//         {/* Quick Links */}
//         <div>
//           <h3 className="text-lg font-semibold mb-2 text-[#FF5E5B]">Quick Links</h3>
//           <ul className="space-y-2">
//             <li><a href="/" className="hover:text-[#FF5E5B]">Home</a></li>
//             <li><a href="/about" className="hover:text-[#FF5E5B]">About Us</a></li>
//             <li><a href = "/rules" className='hover:text-[#FF5E5B]'>House Rules</a></li>
//             <li><a href="/terms" className="hover:text-[#FF5E5B]">Terms & Conditions</a></li>
//             <li><a href="/privacy" className="hover:text-[#FF5E5B]">Privacy Policy</a></li>
            
//           </ul>
//         </div>
//       </div>

//       <div className="text-center py-4 text-xs text-gray-400 border-t">
//         &copy; {new Date().getFullYear()} WestPoint Backpackers Hostel. All rights reserved.
//          {/* Booking Partners */}
//   <div className="flex flex-wrap justify-center items-center gap-4 mt-4">
//     <p>Bokking Partners</p>
//     <a href="https://www.booking.com/hotel/in/west-point-backpackers-hostel.en-gb.html" target="_blank" rel="noreferrer">
//       <img src="images/partners/booking-ar21.svg" alt="Booking.com" className="h-6" />
//     </a>
//     <a href="https://www.agoda.com/cs-cz/west-point-backpackers-hostel/hotel/darjeeling-in.html?cid=1844104&ds=iNUrv%2FXR5l6ZiDQi" target="_blank" rel="noreferrer">
//       <img src="images/partners/512px-Agoda_logo.svg.png" alt="Agoda" className="h-6" />
//     </a>
//     <a href="https://www.makemytrip.com/hotels/west_point_backpackers_hostel-details-darjeeling.html" target="_blank" rel="noreferrer">
//       <img src="images/partners/makemytrip-seeklogo.svg" alt="MakeMyTrip" className="h-6" />
//     </a>
//   </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;



import { Instagram, MailsIcon, MessageCircle, Phone } from 'lucide-react';
import React from 'react';

function Footer() {
  return (
    <footer className="bg-white border-t mt-12 text-sm text-gray-600">
      <div className="px-4 md:px-16 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Map */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-[#FF5E5B]">Location</h3>
          <div className="w-full h-[200px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11408.735401398506!2d88.252037!3d27.0252252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e42f81812656f1%3A0xc308405e923b6ed4!2sWest%20Point%20Backpackers%20Hostel%2C%20Darjeeling!5e0!3m2!1sen!2sin!4v1715606670000!5m2!1sen!2sin"
              className="w-full h-full rounded-md"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold mb-2 text-[#FF5E5B]">Contact Us</h3>
          <p className="flex items-center gap-2"><Phone size={16} /> <a href="tel:+918327823438">+91 83278 23438</a></p>
          <p className="flex items-center gap-2"><MessageCircle size={16} /> <a href="https://wa.me/918327823438" target="_blank" rel="noreferrer">WhatsApp Chat</a></p>
          <p className="flex items-center gap-2"><Instagram size={16} /> <a href="https://www.instagram.com/west_point_backpackers_darj" target="_blank" rel="noreferrer">westpointbackpackers</a></p>
          <p className="flex items-center gap-2"><MailsIcon size={16} /> <a href="mailto:westpointdarjeeling@gmail.com">westpointdarjeeling@gmail.com</a></p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-[#FF5E5B]">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-[#FF5E5B]">Home</a></li>
            <li><a href="/about" className="hover:text-[#FF5E5B]">About Us</a></li>
            <li><a href="/rules" className="hover:text-[#FF5E5B]">House Rules</a></li>
            <li><a href="/terms" className="hover:text-[#FF5E5B]">Terms & Conditions</a></li>
            <li><a href="/privacy" className="hover:text-[#FF5E5B]">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center py-6 text-xs text-gray-400 border-t mt-6">
        &copy; {new Date().getFullYear()} WestPoint Backpackers Hostel. All rights reserved.

        {/* Booking Partners */}
        <div className="flex flex-wrap justify-center items-center gap-4 mt-4">
          <p className="text-gray-500 text-sm">Booking Partners</p>
          <a href="https://www.booking.com/hotel/in/west-point-backpackers-hostel.en-gb.html" target="_blank" rel="noreferrer">
            <img src="images/partners/booking-ar21.svg" alt="Booking.com" className="h-6" />
          </a>
          <a href="https://www.agoda.com/cs-cz/west-point-backpackers-hostel/hotel/darjeeling-in.html?cid=1844104&ds=iNUrv%2FXR5l6ZiDQi" target="_blank" rel="noreferrer">
            <img src="images/partners/512px-Agoda_logo.svg.png" alt="Agoda" className="h-6" />
          </a>
          <a href="https://www.makemytrip.com/hotels/west_point_backpackers_hostel-details-darjeeling.html" target="_blank" rel="noreferrer">
            <img src="images/partners/makemytrip-seeklogo.svg" alt="MakeMyTrip" className="h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

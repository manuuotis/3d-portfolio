import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaDownload, FaClock, FaGlobeAfrica } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import TitleHeader from "../components/TitleHeader";
import SimpleCard from "../components/SimpleCard";

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: FaPhone,
      label: "Phone",
      value: "+254 793 545 101",
      href: "tel:+254793545101",
      description: "Available 24/7"
    },
    {
      icon: FaEnvelope,
      label: "Email", 
      value: "otienoemmanuel026@gmail.com",
      href: "mailto:otienoemmanuel026@gmail.com",
      description: "Preferred contact method"
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "Nairobi, Kenya",
      href: "https://maps.google.com/?q=Nairobi,Kenya",
      description: "East Africa timezone (EAT)"
    }
  ];

  const availabilityOptions = [
    "Full-time",
    "Part-time", 
    "Remote work",
    "Contract",
    "Freelance/Gig work"
  ];

  const handleDownloadCV = () => {
    console.log('Download CV button clicked!');
    try {
      const link = document.createElement('a');
      link.href = '/downloads/Emmanuel-Otieno-CV.pdf';
      link.download = 'Emmanuel-Otieno-CV.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      console.log('Download initiated successfully');
    } catch (error) {
      console.error('Error downloading CV:', error);
      // Fallback: open in new tab
      window.open('/downloads/Emmanuel-Otieno-CV.pdf', '_blank');
    }
  };

  return (
    <section 
      id="contact-info" 
      className="flex-center md:mt-40 mt-20 section-padding"
    >
      <div className="w-full h-full">
        <TitleHeader
          title="Let's Connect"
          sub="📞 Get In Touch"
        />
        
        <div className="mt-16 grid-2-cols gap-8">
          {/* Contact Information Card */}
          <SimpleCard>
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <FaGlobeAfrica className="text-turquoise-50" />
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactDetails.map((detail, index) => {
                  const IconComponent = detail.icon;
                  return (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className="flex-shrink-0 w-12 h-12 bg-black-200 rounded-lg flex items-center justify-center group-hover:bg-turquoise-50 transition-colors duration-300">
                        <IconComponent className="text-turquoise-50 group-hover:text-white text-xl" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white-50 font-medium">{detail.label}</h4>
                        <a 
                          href={detail.href}
                          target={detail.label === "Location" ? "_blank" : undefined}
                          rel={detail.label === "Location" ? "noopener noreferrer" : undefined}
                          className="text-lg text-white hover:text-turquoise-50 transition-colors duration-300 flex items-center gap-2"
                        >
                          {detail.value}
                          {detail.label === "Location" && <FiExternalLink className="text-sm" />}
                        </a>
                        <p className="text-sm text-white-50 opacity-70 mt-1">{detail.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </SimpleCard>

          {/* Availability & CV Download Card */}
          <SimpleCard>
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <FaClock className="text-turquoise-50" />
                Availability & Resources
              </h3>
              
              {/* Availability */}
              <div className="mb-8">
                <h4 className="text-white-50 font-medium mb-4">Work Arrangements</h4>
                <div className="flex flex-wrap gap-2">
                  {availabilityOptions.map((option, index) => (
                    <span 
                      key={index}
                      className="px-3 py-2 bg-black-200 text-white-50 rounded-full text-sm border border-black-50 hover:border-turquoise-50 hover:text-turquoise-50 transition-all duration-300"
                    >
                      {option}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-white-50 opacity-70 mt-3">
                  Open to various engagement models and time zones
                </p>
              </div>

              {/* CV Download */}
                      <div>
                      <h4 className="text-white-50 font-medium mb-4">Resume Download</h4>
                      <button
                        onClick={handleDownloadCV}
                        type="button"
                        className="group flex items-center gap-3 w-full bg-turquoise-50 hover:bg-turquoise-100 text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 cursor-pointer active:scale-95 focus:outline-none focus:ring-2 focus:ring-turquoise-50 focus:ring-offset-2 focus:ring-offset-black-100"
                      >
                        <FaDownload className="text-lg group-hover:animate-bounce" />
                        <span>Download CV (PDF)</span>
                        <div className="ml-auto">
                        <FiExternalLink className="text-lg" />
                        </div>
                      </button>
                      <p className="text-sm text-white-50 opacity-70 mt-2">
                        Updated {new Date().toLocaleString('default', { month: 'long', year: 'numeric' })}
                      </p>
                      </div>
                    </div>
                    </SimpleCard>
                  </div>

                  {/* Additional Info Bar */}
        <div className="mt-12 p-6 bg-black-100 border border-black-50 rounded-xl">
          <div className="flex flex-wrap items-center justify-between gap-4 text-center md:text-left">
            <div>
              <h4 className="text-white font-medium">Ready to start your project?</h4>
              <p className="text-white-50 text-sm">Let's discuss how I can help bring your ideas to life</p>
            </div>
            <div className="flex gap-4">
              <a 
                href="mailto:0tienoemmanuel026@gmail.com?subject=Project Inquiry"
                className="bg-turquoise-50 hover:bg-turquoise-100 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
              >
                Start a Project
              </a>
              <a 
                href="tel:+254793545101"
                className="border border-turquoise-50 text-turquoise-50 hover:bg-turquoise-50 hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, AlertTriangle, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const accentColor = 'text-amber-600';
  const accentBg = 'bg-amber-600 hover:bg-amber-700';
  const primaryTextColor = 'text-gray-800';

  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Simple state for form submission status
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success' or 'error'

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setSubmissionStatus(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmissionStatus(null);

    // Simple client-side validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmissionStatus('error');
      console.error("Form validation failed. All required fields must be filled.");
      return;
    }

    // --- Mock Submission Logic ---
    console.log('Contact Form Submitted:', formData);

    // In a real application, you would send this data to a backend API here.
    // For demonstration, we simulate success and reset the form.
    setTimeout(() => {
      setSubmissionStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-['Inter']">

      {/* --- Header Section (Simplified) --- */}
      <header className="py-20 md:py-28 bg-white text-center border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4">
          <h1 className={`text-4xl md:text-5xl font-light ${primaryTextColor} mb-4`}>
            Inquire About Your Project
          </h1>
          <p className="max-w-xl mx-auto text-lg text-gray-600">
            Send us a brief message and we'll schedule a time to discuss your interior design needs.
          </p>
        </div>
      </header>

      {/* --- Contact Content: Form and Details (Minimalist) --- */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

            {/* --- Left Column: Simplified Contact Details --- */}
            <div className="lg:col-span-2 space-y-8 p-6 bg-white rounded-xl shadow-lg border border-gray-100 h-fit">

              <h2 className="text-2xl font-semibold border-b pb-3 text-gray-900 border-gray-100">Contact Details</h2>

              {/* Address */}
              <div className="flex items-start space-x-4">
                <MapPin className={`w-6 h-6 flex-shrink-0 ${accentColor}`} />
                <div>
                  <h3 className="text-base font-medium text-gray-800">Studio</h3>
                  <p className="text-gray-500 text-sm">45 Design Avenue, Suite 200, CA 90210</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <Phone className={`w-6 h-6 flex-shrink-0 ${accentColor}`} />
                <div>
                  <h3 className="text-base font-medium text-gray-800">Phone</h3>
                  <p className="text-gray-500 text-sm">(555) 123-4567</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <Mail className={`w-6 h-6 flex-shrink-0 ${accentColor}`} />
                <div>
                  <h3 className="text-base font-medium text-gray-800">Email</h3>
                  <p className="text-gray-500 text-sm">info@designstudio.com</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-4 pt-4 border-t border-gray-100">
                <Clock className={`w-6 h-6 flex-shrink-0 ${accentColor}`} />
                <div>
                  <h3 className="text-base font-medium text-gray-800">Hours</h3>
                  <p className="text-gray-500 text-sm">Mon - Fri: 9:00 AM – 5:00 PM</p>
                </div>
              </div>
            </div>

            {/* --- Right Column: Simplified Contact Form --- */}
            <div className="lg:col-span-3 p-8 bg-white rounded-xl shadow-lg border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-amber-600 focus:border-amber-600 transition"
                    required
                    placeholder="Your Name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-amber-600 focus:border-amber-600 transition"
                    required
                    placeholder="name@company.com"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">How can we help?</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-amber-600 focus:border-amber-600 transition"
                    required
                    placeholder="Briefly describe your project or inquiry..."
                  ></textarea>
                </div>

                {/* Submission Status Message */}
                {submissionStatus === 'success' && (
                  <div className="p-4 rounded-lg bg-green-50 text-green-700 font-medium flex items-center border border-green-200">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Message sent! We will respond within 24 business hours.
                  </div>
                )}
                {submissionStatus === 'error' && (
                  <div className="p-4 rounded-lg bg-red-50 text-red-700 font-medium flex items-center border border-red-200">
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    Please ensure all fields are completed.
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  className={`w-full px-8 py-3 text-white font-semibold rounded-lg shadow-md transition duration-300 flex items-center justify-center ${accentBg}`}
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* --- Map Placeholder Section (Optional, cleaner look) --- */}
      <section className="bg-white py-16 border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className={`text-2xl font-light ${primaryTextColor} text-center mb-6`}>Find Our Studio</h2>
          <div className="w-full rounded-xl overflow-hidden shadow-lg border-2 border-gray-100">
            {/* Replace this div content with an actual map embed (e.g., Google Maps iframe) */}
            <div className="flex items-center justify-center h-full bg-gray-100 text-gray-500 text-base italic">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119025.83971793014!2d72.88845815759817!3d21.209730711156485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f1c59ce1e39%3A0xd9df6f5b4e801813!2sRed%20%26%20White%20Skill%20Education%20-%20Yogi%20Chowk%2C%20Surat!5e0!3m2!1sen!2sin!4v1759234631367!5m2!1sen!2sin" width="600" height="450" style={{ border: "0" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

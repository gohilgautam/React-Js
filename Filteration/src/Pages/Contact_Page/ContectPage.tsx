export default function Contact_Page() {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center relative flex items-center justify-center mt-15"
      style={{ backgroundImage: "url('https://i.pinimg.com/1200x/00/e6/a9/00e6a976619c4180fa31c391838262b1.jpg')" }} // full-width cinematic background
    >  
    <div className="absolute inset-0 bg-black/70"></div>

      {/* Full-width Contact Section */}
      <div className="relative w-full max-w-7xl px-10 py-16 flex flex-col md:flex-row gap-12 text-white">
  {/* Left side - Info */}
  <div className="flex-1 flex flex-col justify-center">
    <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
    <p className="text-white/70 mb-6 text-lg">
      Have questions or suggestions? Reach out and we’ll get back to you promptly.
    </p>
    <div className="space-y-3 text-white/70">
      <p><strong>Email:</strong> support@movieapp.com</p>
      <p><strong>Phone:</strong> +1 234 567 890</p>
      <p><strong>Address:</strong> 123 Movie St, Hollywood, CA</p>
    </div>
  </div>

  {/* Right side - Form */}
  <div className="flex-1 bg-white/5 backdrop-blur-2xl rounded-3xl p-12 shadow-2xl border border-white/20">
    <form className="flex flex-col gap-6">
      {/* Floating Label Input */}
      <div className="relative">
        <input
          type="text"
          id="name"
          placeholder=" "
          className="peer block w-full rounded-xl bg-white/10 p-5 text-white border border-white/30 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-all duration-300"
        />
        <label
          htmlFor="name"
          className="absolute left-5 top-5 text-white/70 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-white/70 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-gray-400"
        >
          Your Name
        </label>
      </div>

      <div className="relative">
        <input
          type="email"
          id="email"
          placeholder=" "
          className="peer block w-full rounded-xl bg-white/10 p-5 text-white border border-white/30 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-all duration-300"
        />
        <label
          htmlFor="email"
          className="absolute left-5 top-5 text-white/70 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-white/70 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-gray-400"
        >
          Your Email
        </label>
      </div>

      <div className="relative">
        <textarea
          id="message"
          placeholder=" "
          rows={5}
          className="peer block w-full rounded-xl bg-white/10 p-5 text-white border border-white/30 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-all duration-300"
        ></textarea>
        <label
          htmlFor="message"
          className="absolute left-5 top-5 text-white/70 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-white/70 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-gray -400"
        >
          Your Message
        </label>
      </div>

      <button
        type="submit"
        className="bg-gradient-to-r from-gray-600 to-gray-900 hover:from-gray-700 hover:to-gray-900 text-white font-bold p-5 rounded-xl transition-all duration-300 shadow-lg"
      >
        Send Message
      </button>
    </form>

    <p className="mt-6 text-center text-white/50 text-sm">
      We usually reply within 24 hours.
    </p>
  </div>
</div>

    </div>
  );
}

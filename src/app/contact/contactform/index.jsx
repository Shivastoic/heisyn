'use client';

export default function ContactForm() {
  return (
    <section className="w-full flex items-center justify-center">
      <div className="max-w-xl w-full bg-white/7 shadow-xl rounded-2xl p-8 border border-gray-800">
        {/* Heading */}
        <h2 className="text-3xl font-semibold text-white mb-2">Get in Touch</h2>
        <p className="text-gray-400 mb-8">
          Have a question or want to work together? Fill out the form below.
        </p>

        {/* Form */}
        <form className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition resize-none"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-xl transition shadow-lg shadow-indigo-600/30"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

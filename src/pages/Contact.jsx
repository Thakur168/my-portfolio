import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

// Template id: template_h9tpqaj
//service id: service_sy2a5mu
//Public key: 3KibNwcXo7P6KbEDV
const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    emailjs
      .send("service_sy2a5mu", "template_h9tpqaj", data, "3KibNwcXo7P6KbEDV")
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          reset();
        },
        (error) => {
          console.error("Email sending error:", error.text);
        }
      );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-100 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 bg-white shadow-xl rounded-3xl p-8">
        {/* Left: Contact Info */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-purple-700">Let’s Connect</h2>
          <p className="text-gray-600">
            I'm always open to discussing new opportunities, creative ideas, or
            collaborations.
          </p>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold text-gray-700">Email</p>
              <p className="text-purple-600">priyathakur.pt168@gmail.com</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-700">Phone</p>
              <p className="text-purple-600">+1 (382) 885-2971</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-700">Location</p>
              <p className="text-purple-600">Kitchener, ON, Canada</p>
            </div>

            {/* Add LinkedIn */}
            <div>
              <p className="text-sm font-semibold text-gray-700">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/priya-thakur-40405018a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:underline"
              >
                linkedin.com/in/priya-thakur-40405018a/
              </a>
            </div>

            {/* Add GitHub */}
            <div>
              <p className="text-sm font-semibold text-gray-700">GitHub</p>
              <a
                href="https://github.com/Thakur168"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:underline"
              >
                https://github.com/Thakur168
              </a>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="bg-gray-50 p-6 rounded-2xl shadow-sm">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className={`w-full px-4 py-2 border ${
                  errors.name ? "border-red-400" : "border-gray-300"
                } rounded-md focus:ring-2 focus:ring-purple-400`}
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Invalid email address",
                  },
                })}
                className={`w-full px-4 py-2 border ${
                  errors.email ? "border-red-400" : "border-gray-300"
                } rounded-md focus:ring-2 focus:ring-purple-400`}
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows="5"
                {...register("message", { required: "Message is required" })}
                className={`w-full px-4 py-2 border ${
                  errors.message ? "border-red-400" : "border-gray-300"
                } rounded-md focus:ring-2 focus:ring-purple-400`}
                placeholder="Type your message here..."
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition-all"
            >
              Send Message
            </button>

            {isSubmitSuccessful && (
              <p className="text-green-600 text-sm mt-2 text-center">
                Message sent successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

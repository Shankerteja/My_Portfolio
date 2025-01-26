import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { FiMail, FiUser, FiMessageSquare } from 'react-icons/fi';


const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await emailjs.send(
        'service_n9embqt',
        'template_owy0biw',
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        '8kMEwAiFnyoLRTd94'
      );
      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
    }
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-4">
            <span className="cyan-gradient">Get in Touch</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
            Have a question or want to work together? Feel free to reach out!
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2">
                <span className="flex items-center gap-2">
                  <FiUser className="w-5 h-5" />
                  Name
                </span>
              </label>
              <input
                {...register('name', { required: 'Name is required' })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                type="text"
              />
              {errors.name && (
                <span className="text-red-500 text-sm">{errors.name.message}</span>
              )}
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2">
                <span className="flex items-center gap-2">
                  <FiMail className="w-5 h-5" />
                  Email
                </span>
              </label>
              <input
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                type="email"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email.message}</span>
              )}
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2">
                <span className="flex items-center gap-2">
                  <FiMessageSquare className="w-5 h-5" />
                  Message
                </span>
              </label>
              <textarea
                {...register('message', { required: 'Message is required' })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-cyan-500 focus:border-transparent h-32 resize-none"
              /> {errors.message && (
                <span className="text-red-500 text-sm">{errors.message.message}</span>
              )}
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-3 px-6 rounded-lg bg-cyan-600 text-white font-medium 
                ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-cyan-700'} 
                transition-colors flex items-center justify-center gap-2`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
     {submitStatus === 'success' && (
              <>
               <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-500 text-center text-lg"
              >
                Message sent successfully!
              </motion.div>
             
              </>
             
            )}
        {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-500 text-center text-lg"
              >
                Failed to send message. Please try again.
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
  
    </section>
  );
};

export default Contact;
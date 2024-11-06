import React, { useState, useEffect, useRef } from 'react';
import { X, Send, Loader } from 'lucide-react';
import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init("I0Pricg2S6olEbihe");

export default function ContactModal({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');
  
  const modalRef = useRef(null);
  const firstInputRef = useRef(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      firstInputRef.current?.focus();
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Form validation
    if (!formData.user_name.trim()) {
      setError('Sila masukkan nama anda');
      setIsSubmitting(false);
      return;
    }

    if (!validateEmail(formData.user_email)) {
      setError('Sila masukkan email anda yang sah');
      setIsSubmitting(false);
      return;
    }

    if (!formData.message.trim()) {
      setError('Sila masukkan pesanan anda');
      setIsSubmitting(false);
      return;
    }

    try {
      const templateParams = {
        user_name: formData.user_name,
        user_email: formData.user_email,
        message: formData.message,
        to_email: 'ilmuwananalitika@gmail.com'
      };

      const result = await emailjs.send(
        'service_dpn4uci',
        'template_hfwncuo',
        templateParams
      );

      if (result.text === 'OK') {
        setFormData({ user_name: '', user_email: '', message: '' });
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
          setIsOpen(false);
        }, 2000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setError('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const handleClose = () => {
    setIsOpen(false);
    setFormData({ user_name: '', user_email: '', message: '' });
    setError('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setIsOpen(true);
    }
  };

  return (
    <>
      <div 
        onClick={() => setIsOpen(true)} 
        className="inline-block cursor-pointer"
        role="button"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        aria-label="Open contact form"
      >
        {children}
      </div>

      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) handleClose();
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div 
            ref={modalRef}
            className="w-full max-w-md p-6 bg-white rounded-lg shadow-xl"
          >
            <div className="relative mb-6 text-left">
              <button 
                onClick={handleClose}
                className="absolute top-0 right-0 p-2 transition-colors rounded-full text-nusuk-dark/40 hover:bg-nusuk-light hover:text-nusuk-primary"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <h2 id="modal-title" className="text-2xl font-semibold text-left text-nusuk-primary">
              Hubungi Kami
              </h2>
              <p className="mt-2 text-left text-nusuk-dark/70">
              Hantarkan pesanan anda dan kami akan membalas secepat mungkin.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label htmlFor="user_name" className="block mb-1 text-sm font-medium text-left text-nusuk-dark/80">
                  Nama
                </label>
                <input
                  ref={firstInputRef}
                  type="text"
                  id="user_name"
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 transition-all border rounded-md border-nusuk-primary/20 focus:ring-2 focus:ring-nusuk-primary focus:border-transparent"
                  placeholder="Nama anda"
                />
              </div>

              <div>
                <label htmlFor="user_email" className="block mb-1 text-sm font-medium text-left text-nusuk-dark/80">
                  Email
                </label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  value={formData.user_email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 transition-all border rounded-md border-nusuk-primary/20 focus:ring-2 focus:ring-nusuk-primary focus:border-transparent"
                  placeholder="Email anda"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-1 text-sm font-medium text-left text-nusuk-dark/80">
                  Pesanan
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 transition-all border rounded-md resize-none border-nusuk-primary/20 focus:ring-2 focus:ring-nusuk-primary focus:border-transparent"
                  placeholder="Pesanan anda disini..."
                />
              </div>

              {error && (
                <div className="p-3 text-sm text-left text-red-700 rounded-md bg-red-50" role="alert">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center w-full px-6 py-3 text-white transition-all rounded-md bg-nusuk-dark hover:bg-nusuk-primary hover:text-nusuk-dark disabled:opacity-70"
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <Loader className="w-5 h-5 animate-spin" />
                    <span>Hantar...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <span>Hantar Pesanan</span>
                    <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </div>
                )}
              </button>

              {showSuccess && (
                <div className="p-3 text-sm text-left text-green-700 rounded-md bg-green-50" role="alert">
                  Terima kasih atas pesanan anda! Kami akan menghubungi anda tidak lama lagi.
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
}
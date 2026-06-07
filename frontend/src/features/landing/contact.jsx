import { useState } from "react";
import {
  LuMail,
  LuMessageSquare,
  LuArrowRight,
  LuCheck,
  LuGlobe,
  LuClock,
} from "react-icons/lu";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "general",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 space-y-16 bg-slate-50/30 min-h-screen">
      <div className="text-center max-w-2xl mx-auto space-y-4 pt-12">
        <div className="inline-flex items-center gap-2 py-1.5 px-3 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-[#1d4ed8] tracking-wide">
          <span>Connect Hub</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black text-[#0d1323] tracking-tight">
          Let's Build the Next{" "}
          <span className="text-[#1d4ed8]">Pipeline Node</span>
        </h1>
        <p className="text-sm text-slate-500 leading-relaxed font-normal">
          Have an inquiry regarding talent sourcing, system verification,
          partnership channels, or full-stack pipeline configurations? Drop a
          message into our secure boundary.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-xs flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 text-[#0d1323] flex items-center justify-center shrink-0">
              <LuMail size={18} />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-[#0d1323]">
                Electronic Correspondence
              </h4>
              <p className="text-xs text-slate-500 font-normal">
                Our system router processes primary incoming inquiries directly
                via secure mailboxes.
              </p>
              <p className="text-xs font-semibold text-[#1d4ed8] pt-1">
                support@adbtalent.com
              </p>
            </div>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-xs flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 text-[#0d1323] flex items-center justify-center shrink-0">
              <LuClock size={18} />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-[#0d1323]">
                Pipeline SLA Timeline
              </h4>
              <p className="text-xs text-slate-500 font-normal">
                Technical engineers and system administrative auditors respond
                within predictable boundaries.
              </p>
              <p className="text-xs font-semibold text-slate-600 pt-1">
                Monday - Friday • Monitored 08:00 - 17:00 (WIB)
              </p>
            </div>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-xs flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 text-[#0d1323] flex items-center justify-center shrink-0">
              <LuGlobe size={18} />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-[#0d1323]">
                Localization Hub
              </h4>
              <p className="text-xs text-slate-500 font-normal">
                Operated natively out of specialized tech-training network
                coordinates within regional scopes.
              </p>
              <p className="text-xs font-semibold text-slate-600 pt-1">
                Adiwerna, Central Java, Indonesia
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 shadow-xs relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#1d4ed8]" />

            {isSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-500 flex items-center justify-center mx-auto animate-bounce">
                  <LuCheck size={24} />
                </div>
                <div className="space-y-1.5 max-w-sm mx-auto">
                  <h3 className="text-lg font-bold text-[#0d1323]">
                    Transmission Confirmed
                  </h3>
                  <p className="text-xs text-slate-500 font-normal leading-relaxed">
                    Your transmission payload has passed initial firewall logic
                    safely. Our team will read and address your message
                    parameters shortly.
                  </p>
                </div>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-4 py-2 bg-slate-50 border border-slate-200 text-slate-600 text-xs font-semibold rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#0d1323] uppercase tracking-wide">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Farel Arlish"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-3 py-2 bg-slate-50/50 border border-slate-200/80 rounded-xl text-xs font-normal text-slate-700 placeholder-slate-400 focus:outline-hidden focus:border-[#1d4ed8] focus:bg-white transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#0d1323] uppercase tracking-wide">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-3 py-2 bg-slate-50/50 border border-slate-200/80 rounded-xl text-xs font-normal text-slate-700 placeholder-slate-400 focus:outline-hidden focus:border-[#1d4ed8] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#0d1323] uppercase tracking-wide">
                    Inquiry Classification
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full px-3 py-2 bg-slate-50/50 border border-slate-200/80 rounded-xl text-xs font-semibold text-slate-600 focus:outline-hidden focus:border-[#1d4ed8] focus:bg-white transition-all"
                  >
                    <option value="general">
                      General Infrastructure Inquiry
                    </option>
                    <option value="talent">
                      Talent Sourcing & Integration
                    </option>
                    <option value="partnership">
                      Corporate Partner Network
                    </option>
                    <option value="technical">
                      Technical Platform Support
                    </option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#0d1323] uppercase tracking-wide">
                    Message Payload
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide a detailed explanation of your architectural needs or project partnership alignment configurations..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-3 py-2 bg-slate-50/50 border border-slate-200/80 rounded-xl text-xs font-normal text-slate-700 placeholder-slate-400 focus:outline-hidden focus:border-[#1d4ed8] focus:bg-white transition-all resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#1d4ed8] text-white text-xs font-semibold rounded-xl hover:bg-blue-700 active:bg-blue-800 transition-colors shadow-sm group cursor-pointer"
                  >
                    Dispatch Secure Message
                    <LuArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

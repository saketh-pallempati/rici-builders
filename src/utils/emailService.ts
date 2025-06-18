import emailjs from "@emailjs/browser";

const EMAIL_CONFIG = {
  serviceId: "service_7a4nded",
  templateId: "template_2j7oi2i",
  publicKey: "fXxFAQ5AaOK41xibr",
};

interface QuoteEmailData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  timeline: string;
  location: string;
  description: string;
}

export const sendQuoteEmail = async (
  formData: QuoteEmailData
): Promise<boolean> => {
  try {
    emailjs.init(EMAIL_CONFIG.publicKey);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      project_type: formData.projectType,
      budget: formData.budget,
      timeline: formData.timeline,
      location: formData.location,
      description: formData.description,
      submission_date: new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    const response = await emailjs.send(
      EMAIL_CONFIG.serviceId,
      EMAIL_CONFIG.templateId,
      templateParams
    );

    console.log("Email sent successfully:", response);
    return true;
  } catch (error) {
    console.error("Email sending failed:", error);
    return false;
  }
};

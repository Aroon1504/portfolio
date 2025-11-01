// Configuration for contact information
export const WHATSAPP_CONFIG = {
  phoneNumber: "8925053270",
  defaultMessage: "Hi! I found your portfolio and would like to connect.",
};

// Reusable function to open WhatsApp
export const openWhatsApp = () => {
  const { phoneNumber, defaultMessage } = WHATSAPP_CONFIG;
  window.open(
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`,
    "_blank"
  );
};

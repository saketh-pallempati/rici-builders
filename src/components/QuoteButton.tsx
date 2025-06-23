import React, { useState } from "react";
import QuoteModal from "./QuoteModal";

interface QuoteButtonProps {
  text?: string;
  className?: string;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
}

const QuoteButton: React.FC<QuoteButtonProps> = ({
  text = "Get a Quote",
  className = "",
  variant = "primary",
  size = "medium",
}) => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const handleQuoteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsQuoteModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsQuoteModalOpen(false);
  };

  const getButtonClass = () => {
    const baseClass = variant === "primary" ? "primary-btn" : "secondary-btn";
    const sizeClass = size === "small" ? "small" : size === "large" ? "large" : "";
    return `${baseClass} ${sizeClass} ${className}`.trim();
  };
  return (
    <>
      <button
        onClick={handleQuoteClick}
        className={`${getButtonClass()} enhanced-quote-btn`}
        type="button"
        aria-label="Get a Quote"
        style={{ cursor: "pointer" }}
      >
        <span className="btn-bg"></span>
        <span className="btn-text">{text}</span>
        <span className="btn-icon">✦</span>
      </button>
      
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={handleCloseModal} 
      />
    </>
  );
};

export default QuoteButton;

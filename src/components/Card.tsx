import React from "react";

interface CardProps {
  title: string;
  children: string;
  imageUrl?: string;
  onClick?: () => void;
  footer?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  title,
  children,
  imageUrl,
  onClick,
  footer,
}) => {
  return (
    <div
      className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
      onClick={onClick}
    >
      {imageUrl && (
        <div className="relative h-48">
          <img
            className="w-full h-full object-cover"
            src={imageUrl}
            alt={title}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
        </div>
      )}
      <div className="p-6">
        <h3 className="font-semibold text-xl mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{children}</p>
        {footer && (
          <div className="mt-4 pt-4 border-t border-gray-200">{footer}</div>
        )}
      </div>
    </div>
  );
};

export default Card;

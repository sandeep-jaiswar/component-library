import React, { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  className?: string;
}

const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  className = "",
}) => {
  const [openIds, setOpenIds] = useState<string[]>([]);

  const toggleItem = useCallback((id: string) => {
    setOpenIds((prevIds) => {
      if (allowMultiple) {
        return prevIds.includes(id)
          ? prevIds.filter((i) => i !== id)
          : [...prevIds, id];
      } else {
        return prevIds.includes(id) ? [] : [id];
      }
    });
  }, [allowMultiple]);

  const isOpen = useCallback((id: string) => openIds.includes(id), [openIds]);

  const accordionItems = useMemo(() => items.map((item) => (
    <AccordionItem
      key={item.id}
      item={item}
      isOpen={isOpen(item.id)}
      toggleItem={toggleItem}
    />
  )), [items, isOpen, toggleItem]);

  return (
    <div className={`divide-y divide-gray-200 border-t border-b border-gray-200 ${className}`}>
      {accordionItems}
    </div>
  );
};

interface AccordionItemProps {
  item: AccordionItem;
  isOpen: boolean;
  toggleItem: (id: string) => void;
}

const AccordionItem: React.FC<AccordionItemProps> = React.memo(({ item, isOpen, toggleItem }) => {
  return (
    <div className="py-2">
      <button
        className="flex justify-between items-center w-full py-3 px-4 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
        onClick={() => toggleItem(item.id)}
        aria-expanded={isOpen}
      >
        <span className="text-base font-medium text-gray-900">
          {item.title}
        </span>
        <motion.svg
          className="w-5 h-5 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </motion.svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="px-4 pt-2 pb-4 text-sm text-gray-700 overflow-hidden"
          >
            {item.content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

AccordionItem.displayName = "AccordionItem";

export default Accordion;

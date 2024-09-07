import React, { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../hooks/useTheme";

export interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  className?: string;
  onToggle?: (id: string, isOpen: boolean) => void;
}

const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  className = "",
  onToggle,
}) => {
  const [openIds, setOpenIds] = useState<string[]>([]);
  const theme = useTheme();

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
    onToggle?.(id, !openIds.includes(id));
  }, [allowMultiple, onToggle, openIds]);

  const isOpen = useCallback((id: string) => openIds.includes(id), [openIds]);

  const accordionItems = useMemo(() => items.map((item) => (
    <AccordionItem
      key={item.id}
      item={item}
      isOpen={isOpen(item.id)}
      toggleItem={toggleItem}
      theme={theme}
    />
  )), [items, isOpen, toggleItem, theme]);

  return (
    <div className={`divide-y divide-${theme.palette.text} border-t border-b border-${theme.palette.text} ${className}`}>
      {accordionItems}
    </div>
  );
};

export interface AccordionItemProps {
  item: AccordionItem;
  isOpen: boolean;
  toggleItem: (id: string) => void;
  theme: any;
}

const AccordionItem: React.FC<AccordionItemProps> = React.memo(({ item, isOpen, toggleItem, theme }) => {
  return (
    <div className="py-2">
      <button
        className={`flex justify-between items-center w-full py-3 px-4 text-left focus:outline-none focus:ring-2 focus:ring-${theme.palette.primary} rounded-lg`}
        onClick={() => toggleItem(item.id)}
        aria-expanded={isOpen}
      >
        <span className={`text-base font-medium text-${theme.palette.text}`}>
          {item.title}
        </span>
        <motion.svg
          className={`w-5 h-5 text-${theme.palette.text}`}
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
            className={`px-4 pt-2 pb-4 text-sm text-${theme.palette.text} overflow-hidden`}
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

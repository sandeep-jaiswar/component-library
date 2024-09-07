import React, { useState } from "react";
import Button from "./Button";
import { useTheme } from "../hooks/useTheme";

export interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "password" | "textarea";
  placeholder?: string;
  required?: boolean;
}

export interface FormProps {
  fields: FormField[];
  onSubmit: (data: Record<string, string>) => void;
  submitLabel?: string;
}

const Form: React.FC<FormProps> = ({
  fields,
  onSubmit,
  submitLabel = "Submit",
}) => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const theme = useTheme();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {fields.map((field) => (
        <div key={field.name}>
          <label
            htmlFor={field.name}
            className={`block text-sm font-medium text-${theme.palette.text} mb-1`}
          >
            {field.label}
          </label>
          {field.type === "textarea" ? (
            <textarea
              id={field.name}
              name={field.name}
              placeholder={field.placeholder}
              required={field.required}
              value={formData[field.name] || ""}
              onChange={handleChange}
              className={`appearance-none block w-full px-3 py-2 border border-${theme.palette.text} rounded-md shadow-sm placeholder-${theme.palette.text} focus:outline-none focus:ring-${theme.palette.primary} focus:border-${theme.palette.primary} sm:text-sm bg-${theme.palette.background} text-${theme.palette.text}`}
              rows={4}
              style={{ borderRadius: `${theme.shape.borderRadius}px` }}
            />
          ) : (
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              placeholder={field.placeholder}
              required={field.required}
              value={formData[field.name] || ""}
              onChange={handleChange}
              className={`appearance-none block w-full px-3 py-2 border border-${theme.palette.text} rounded-md shadow-sm placeholder-${theme.palette.text} focus:outline-none focus:ring-${theme.palette.primary} focus:border-${theme.palette.primary} sm:text-sm bg-${theme.palette.background} text-${theme.palette.text}`}
              style={{ borderRadius: `${theme.shape.borderRadius}px` }}
            />
          )}
        </div>
      ))}
      <div>
        <Button type="submit">{submitLabel}</Button>
      </div>
    </form>
  );
};

export default Form;

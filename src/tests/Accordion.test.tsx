import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Accordion from "../components/Accordion";

describe("Accordion", () => {
  const mockItems = [
    { title: "Section 1", content: "Content 1", id:"1" },
    { title: "Section 2", content: "Content 2" , id:"2"},
    { title: "Section 3", content: "Content 3" , id:"3"},
  ];

  it("renders all accordion items", () => {
    render(<Accordion items={mockItems} />);
    mockItems.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });

  it("expands an item when its header is clicked", () => {
    render(<Accordion items={mockItems} />);
    const firstItemHeader = screen.getByText("Section 1");
    fireEvent.click(firstItemHeader);
    expect(screen.getByText("Content 1")).toBeVisible();
  });

  it("collapses an expanded item when its header is clicked again", () => {
    render(<Accordion items={mockItems} />);
    const firstItemHeader = screen.getByText("Section 1");
    fireEvent.click(firstItemHeader);
    fireEvent.click(firstItemHeader);
    expect(screen.queryByText("Content 1")).not.toBeVisible();
  });

  it("allows multiple items to be expanded simultaneously", () => {
    render(<Accordion items={mockItems} />);
    fireEvent.click(screen.getByText("Section 1"));
    fireEvent.click(screen.getByText("Section 2"));
    expect(screen.getByText("Content 1")).toBeVisible();
    expect(screen.getByText("Content 2")).toBeVisible();
  });

  it("applies the correct CSS classes for expanded and collapsed states", () => {
    render(<Accordion items={mockItems} />);
    const firstItemHeader = screen.getByText("Section 1");
    expect(firstItemHeader).toHaveClass("accordion-header");
    expect(firstItemHeader).not.toHaveClass("expanded");

    fireEvent.click(firstItemHeader);
    expect(firstItemHeader).toHaveClass("expanded");
  });

  it("renders custom content correctly", () => {
    const customItems = [
      {
        title: "Custom",
            content: <div data-testid="custom-content">Custom Content</div>,
            id:"4"
      },
    ];
    render(<Accordion items={customItems} />);
    fireEvent.click(screen.getByText("Custom"));
    expect(screen.getByTestId("custom-content")).toBeInTheDocument();
  });

  it("handles empty items array", () => {
    render(<Accordion items={[]} />);
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  it("calls onToggle callback when an item is toggled", () => {
    const onToggleMock = jest.fn();
    render(<Accordion items={mockItems} onToggle={onToggleMock} />);
    fireEvent.click(screen.getByText("Section 1"));
    expect(onToggleMock).toHaveBeenCalledWith(0, true);
  });
});

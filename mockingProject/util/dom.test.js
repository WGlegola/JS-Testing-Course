import { beforeEach, describe, expect, it, vi } from "vitest";
import fs from "fs";
import path from "path";
import { Window } from "happy-dom";
import { showError } from "./dom";
const htmlDocPath = path.join(process.cwd(), "index.html");
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();
const windows = new Window();
const document = window.document;
document.write(htmlDocumentContent);

vi.stubGlobal("document", document);

describe("DOM tests", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
    document.write(htmlDocumentContent);
  });

  it("should add an error paragtaph to the id='errors' element", () => {
    showError("test");
    const errorEl = document.getElementById("errors");
    const errorParagraph = errorEl.firstElementChild;

    expect(errorParagraph).not.toBeNull();
  });

  it("should not contain an error paragraph initialy", () => {
    const errorEl = document.getElementById("errors");
    const errorParagraph = errorEl.firstElementChild;

    expect(errorParagraph).toBeNull();
  });

  it("should output the provided message in the error paragraph", () => {
    const testErrorMessage = "test";
    showError(testErrorMessage);
    const errorEl = document.getElementById("errors");
    const errorParagraph = errorEl.firstElementChild;

    expect(errorParagraph.textContent).toBe(testErrorMessage);
  });
});

import { validationSchema } from "./validationSchema";
import * as Yup from "yup";

describe("validationSchema", () => {
  it("validates a valid object correctly", async () => {
    const validObject = {
      name: "Example Name",
      price: 100,
      category: "Example Category",
      author: "Example Author",
      description: "Example Description",
    };

    await expect(validationSchema.validate(validObject)).resolves.toEqual(
      validObject
    );
  });

  it("rejects an object with missing name", async () => {
    const invalidObject = {
      price: 100,
      category: "Example Category",
      author: "Example Author",
      description: "Example Description",
    };

    await expect(validationSchema.validate(invalidObject)).rejects.toThrow(
      Yup.ValidationError
    );
  });

  it("rejects an object with missing price", async () => {
    const invalidObject = {
      name: "Example Name",
      category: "Example Category",
      author: "Example Author",
      description: "Example Description",
    };

    await expect(validationSchema.validate(invalidObject)).rejects.toThrow(
      Yup.ValidationError
    );
  });

  it("rejects an object with missing category", async () => {
    const invalidObject = {
      name: "Example Name",
      price: 100,
      author: "Example Author",
      description: "Example Description",
    };

    await expect(validationSchema.validate(invalidObject)).rejects.toThrow(
      Yup.ValidationError
    );
  });

  it("rejects an object with missing author", async () => {
    const invalidObject = {
      name: "Example Name",
      price: 100,
      category: "Example Category",
      description: "Example Description",
    };

    await expect(validationSchema.validate(invalidObject)).rejects.toThrow(
      Yup.ValidationError
    );
  });

  it("rejects an object with missing description", async () => {
    const invalidObject = {
      name: "Example Name",
      price: 100,
      category: "Example Category",
      author: "Example Author",
    };

    await expect(validationSchema.validate(invalidObject)).rejects.toThrow(
      Yup.ValidationError
    );
  });

  it("rejects an object with invalid price type", async () => {
    const invalidObject = {
      name: "Example Name",
      price: "Not a number",
      category: "Example Category",
      author: "Example Author",
      description: "Example Description",
    };

    await expect(validationSchema.validate(invalidObject)).rejects.toThrow(
      Yup.ValidationError
    );
  });
});

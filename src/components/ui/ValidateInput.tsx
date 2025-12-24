"use client";
import { useState, useCallback } from "react";
import { useTranslations } from "next-intl";

const ValidatedInput = ({
  name,
  wasSubmitted,
  errors,
  fieldSchema,
  ...props
}) => {
  const t = useTranslations("contact.validation");
  const [value, setValue] = useState("");
  const [touched, setTouched] = useState(false);

  // Map error messages to translations
  const translateError = useCallback(
    (errorMessage: string, fieldName: string) => {
      // Map based on field name and error type
      const errorLower = errorMessage.toLowerCase();

      if (fieldName === "name") {
        if (
          errorLower.includes("4") ||
          errorLower.includes("charachter") ||
          errorLower.includes("character") ||
          errorLower.includes("karakter") ||
          errorLower.includes("أحرف")
        ) {
          return t("name.min");
        }
      }

      if (fieldName === "email") {
        if (
          errorLower.includes("valid") ||
          errorLower.includes("geçerli") ||
          errorLower.includes("صحيح")
        ) {
          return t("email.invalid");
        }
      }

      if (fieldName === "phone") {
        if (
          errorLower.includes("valid") ||
          errorLower.includes("geçerli") ||
          errorLower.includes("صحيح")
        ) {
          return t("phone.invalid");
        }
      }

      if (fieldName === "message") {
        if (
          errorLower.includes("more") ||
          errorLower.includes("detay") ||
          errorLower.includes("تفاصيل") ||
          errorLower.includes("details")
        ) {
          return t("message.min");
        }
      }

      // Fallback to original message if no translation found
      return errorMessage;
    },
    [t]
  );

  const getErrors = useCallback(() => {
    const validationResult = fieldSchema.safeParse(value);
    if (validationResult.success) {
      return [];
    }
    const formErrors = validationResult.error.flatten().formErrors;
    return formErrors.map((error) => translateError(error, name));
  }, [fieldSchema, value, name, translateError]);

  // Translate server-side errors if they exist
  const translatedErrors = errors
    ? errors.map((error) => translateError(error, name))
    : null;

  const fieldErrors = translatedErrors || getErrors();
  const shouldRenderErrors = translatedErrors || wasSubmitted || touched;

  const handleBlur = () => setTouched(true);
  const handleChange = (e) => setValue(e.currentTarget.value);

  const isTextarea = props.rows !== undefined;

  const InputComponent = isTextarea ? "textarea" : "input";

  return (
    <>
      <InputComponent
        id={name}
        name={name}
        onBlur={handleBlur}
        onChange={handleChange}
        className={`input input-bordered w-full ${fieldErrors.length > 0 ? "border-red-500" : ""}`}
        {...props}
      />
      {shouldRenderErrors && fieldErrors.length > 0 && (
        <span className="text-sm text-red-500">{fieldErrors[0]}</span>
      )}
    </>
  );
};
export { ValidatedInput };

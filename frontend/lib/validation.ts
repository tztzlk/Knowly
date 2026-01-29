const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PASSWORD_MIN_LENGTH = 8;

export function validateEmail(email: string): { valid: boolean; message?: string } {
  const trimmed = email.trim();
  if (!trimmed) return { valid: false, message: "Email is required" };
  if (!EMAIL_REGEX.test(trimmed)) return { valid: false, message: "Please enter a valid email address" };
  return { valid: true };
}

export function validatePassword(
  password: string,
  options: { required?: boolean; forRegister?: boolean } = {}
): { valid: boolean; message?: string } {
  const { required = true, forRegister = false } = options;
  if (!password) {
    return required ? { valid: false, message: "Password is required" } : { valid: true };
  }
  if (forRegister) {
    if (password.length < PASSWORD_MIN_LENGTH) {
      return { valid: false, message: "Password must be at least 8 characters" };
    }
    if (!/[a-zA-Z]/.test(password)) {
      return { valid: false, message: "Password must include at least one letter" };
    }
    if (!/\d/.test(password)) {
      return { valid: false, message: "Password must include at least one number" };
    }
  }
  return { valid: true };
}

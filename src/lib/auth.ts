import { MOCK_STUDENT, MOCK_TEACHER, MOCK_ADMIN } from "./mock-data";
import { CurrentUser, UserRole } from "./types";

export const DEMO_ACCOUNTS: Record<UserRole, CurrentUser> = {
  STUDENT: MOCK_STUDENT,
  TEACHER: MOCK_TEACHER,
  ADMIN: MOCK_ADMIN,
};

export async function getSessionUser(role: UserRole = "STUDENT"): Promise<CurrentUser> {
  // If running in development or demo mode, return corresponding demo account
  return DEMO_ACCOUNTS[role] || MOCK_STUDENT;
}

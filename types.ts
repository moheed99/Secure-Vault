export interface UploadedFileRecord {
  name: string;
  size: number;
  type: string;
  uploadedAt: string;
}

export interface StoredUser {
  username: string;
  hashedPassword: string;
  salt: string;
  profile: {
    displayName: string;
    email: string;
  };
  encryptedData: string | null;
  uploadedFiles: UploadedFileRecord[];
}

export interface LogEntry {
  id: number;
  username: string;
  action: string;
  timestamp: string;
}

export type AuthContextType = {
  user: StoredUser | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (username: string, password: string) => Promise<boolean>;
  isLoading: boolean;
  updateUserData: (dataToUpdate: {
    profile?: StoredUser['profile'];
    encryptedData?: StoredUser['encryptedData'];
  }) => void;
  addUploadedFile: (fileRecord: UploadedFileRecord) => void;
};

export enum Status {
  OFFLINE = "OFFLINE",
  AVAILABLE = "AVAILABLE",
  ON_TRIP = "ON_TRIP",
  BUSY = "BUSY",
  SUSPENDED = "SUSPENDED"
}

export enum VehicleType {
  SEDAN = "SEDAN",
  SUV = "SUV",
  LUXURY = "LUXURY",
  BIKE = "BIKE",
  VAN = "VAN"
}

export enum DocumentType {
  LICENSE = "LICENSE",
  INSURANCE = "INSURANCE",
  VEHICLE_REGISTRATION = "VEHICLE_REGISTRATION",
  BACKGROUND_CHECK = "BACKGROUND_CHECK"
}



export interface DriverStatus {
  totalTrips: number;
  totalEarnings: number;
  rating: number;            // aggregated rating (ex: 4.93)
  ratingCount: number;
  cancellationCount: number;
  acceptanceRate: number;    // percentage (0–100)
  onlineHours: number;
}

export interface DriverDocument {
  documentId: string;
  type: DocumentType;
  url: string;             // stored in cloud storage
  uploadedAt: string;
  verified: boolean;
  verifiedAt?: string;
  expiryDate?: string;
}

export interface IDriver {
  driverId: string;         // unique id (UUID or MongoDB ObjectId)
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  avatarUrl?: string;
  status?: DriverStatus;
  isActive: boolean;        // if false → driver cannot receive rides
  isVerified: boolean;      // true after full approval

  // Location & Availability
//   currentLocation?: GeoPoint;
//   availability?: Availability;

  // Driver Components
//   vehicle?: Vehicle;
  documents?: DriverDocument[];
//   bankInfo?: PayoutInfo;
//   preferences?: DriverPreferences;

  // System Metadata
  createdAt?: string;
  updatedAt?: string;
}




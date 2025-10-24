export declare enum Status {
    OFFLINE = "OFFLINE",
    AVAILABLE = "AVAILABLE",
    ON_TRIP = "ON_TRIP",
    BUSY = "BUSY",
    SUSPENDED = "SUSPENDED"
}
export declare enum VehicleType {
    SEDAN = "SEDAN",
    SUV = "SUV",
    LUXURY = "LUXURY",
    BIKE = "BIKE",
    VAN = "VAN"
}
export declare enum DocumentType {
    LICENSE = "LICENSE",
    INSURANCE = "INSURANCE",
    VEHICLE_REGISTRATION = "VEHICLE_REGISTRATION",
    BACKGROUND_CHECK = "BACKGROUND_CHECK"
}
export interface DriverStatus {
    totalTrips: number;
    totalEarnings: number;
    rating: number;
    ratingCount: number;
    cancellationCount: number;
    acceptanceRate: number;
    onlineHours: number;
}
export interface DriverDocument {
    documentId: string;
    type: DocumentType;
    url: string;
    uploadedAt: string;
    verified: boolean;
    verifiedAt?: string;
    expiryDate?: string;
}
export interface IDriver {
    driverId: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    avatarUrl?: string;
    status?: DriverStatus;
    isActive: boolean;
    isVerified: boolean;
    documents?: DriverDocument[];
    createdAt?: string;
    updatedAt?: string;
}
//# sourceMappingURL=driver.interface.d.ts.map
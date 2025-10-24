"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentType = exports.VehicleType = exports.Status = void 0;
var Status;
(function (Status) {
    Status["OFFLINE"] = "OFFLINE";
    Status["AVAILABLE"] = "AVAILABLE";
    Status["ON_TRIP"] = "ON_TRIP";
    Status["BUSY"] = "BUSY";
    Status["SUSPENDED"] = "SUSPENDED";
})(Status || (exports.Status = Status = {}));
var VehicleType;
(function (VehicleType) {
    VehicleType["SEDAN"] = "SEDAN";
    VehicleType["SUV"] = "SUV";
    VehicleType["LUXURY"] = "LUXURY";
    VehicleType["BIKE"] = "BIKE";
    VehicleType["VAN"] = "VAN";
})(VehicleType || (exports.VehicleType = VehicleType = {}));
var DocumentType;
(function (DocumentType) {
    DocumentType["LICENSE"] = "LICENSE";
    DocumentType["INSURANCE"] = "INSURANCE";
    DocumentType["VEHICLE_REGISTRATION"] = "VEHICLE_REGISTRATION";
    DocumentType["BACKGROUND_CHECK"] = "BACKGROUND_CHECK";
})(DocumentType || (exports.DocumentType = DocumentType = {}));
//# sourceMappingURL=driver.interface.js.map
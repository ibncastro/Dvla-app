const typeDefinitions = `

scalar DateTime

enum Titles {
    Mr
    Mrs
    Miss
}

enum Regions {
    GREATERACCRA
    BRONGAHAFO
    NORTHERN
    WESTERN
    EASTEN
    ASHANTE
    UPPEREAST 
    UPPERWEST
    VOLTA
    CENTRAL 
}

enum Gender {
    Male
    Female
}

enum IdTypes {
    NationalId
    VotersId
    Passport
}

enum BodyTypes {
    Saloon
    Truck
    Bus
    Van
}

enum VehicleUse {
    Commercial
    Private
}

enum FuelTypes {
    Petrol
    Diesel
}

    type User {
        id: Int
        title: Titles
        firstName: String
        lastName: String
        password: String
        middleName: String
        Gender: Gender
        email: String!
        isEmailVerified: String
        verificationToken: String
        avatar: String
        region: Regions
        dateOfBirth: DateTime
        nationality: String!
        idType: IdTypes
        idNumber: String
        houseNo: String
        mobileNo1: Int
        mobileNo2: Int 
        postalAddress: String
        ghanaPostCode: String
        passportPhoto: String
        userType: String
        vehiclesRegistered: [VReg]
    }

    type Vehicle {
        id: Int
        manufacturer: String
        chasisNo: String
        bodyType: BodyTypes
        countryOfOrigin: String
        noOfTyres: Int
        modelName: String
        vehicleUse: VehicleUse
        noOfAxles: Int
        engineMadeBy: String
        noOfDoors: Int
        engineNo: String
        noOfCylinders: Int
        fuelType: FuelTypes
        horsePower: String
        user: User
        reg: VReg
    } 

    type VReg {
        id: Int
        key: String
        vehicleInspectionNo: String
        customsDocNo: String
        roadWorthyCert: String
        user: User
        vehicle: Vehicle
        created: DateTime
    }

    type Auth {
        token: String
        user: User
    }

    type RootQuery {
        user(id: Int!): User
        users: [User]
        vehicle(chasisNo: String!): Vehicle
        vehicles: [Vehicle]
        vReg(key: String!): [VReg]
        vRegistration(userId: Int!): [VReg]
        vRegistrations: [VReg]
        currentUser: User
    }

    input userDetailsInput {
        firstName: String
        lastName: String
        password: String
        middleName: String
        gender: String
        email: String
        region: String
        dob: DateTime
        nationality: String
        idType: String
        idNumber: String
        mobileNo1: String
        mobileNo2: String 
        postalAddress: String
        ghanaPostcode: String
        userType: String
        username: String
        city: String
    }

    input vRegInput {
        key: String
        vehicleInspectionNo: String
        customsDocNo: String
        roadWorthyCert: String
        manufacturer: String
        chasisNo: String
        bodyType: String
        modelName: String
        noOfDoors: String
        fuelType: String
        userId: Int
    }

    type RootMutation {
        login(
            email: String!
            password: String!
        ): Auth
        register(
            user: userDetailsInput
        ): Auth
        registerVehicle(
            details: vRegInput
        ): VReg
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`;

export default [typeDefinitions]
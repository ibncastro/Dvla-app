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
    MALE
    FEMALE
}

enum IdTypes {
    NATIONALID
    VOTERSID
    PASSPORT
}

enum BodyTypes {
    SALOON
    TRUCK
    BUS
    VAN
}

enum VehicleUse {
    COMMERCIAL
    PRIVATE
}

enum FuelTypes {
    PETROL
    DIESEL
}

    type User {
        id: Int
        title: Titles
        firstName: String
        lastName: String
        middleName: String
        Gender: Gender
        email: String!
        Region: Regions
        dateOfBirth: DateTime
        nationality: String!
        idType: IdTypes
        idNumber: String
        houseNo: String
        mobileNo1: Int
        mobileNo2: Int 
        postalAddress: String
        ghanaPostCode: String

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
        user: User
        vehicle: Vehicle
    }

    type RootQuery {
        user(id: Int!): User
        users: [User]
        vehicle(chasisNo: String!): Vehicle
        vehicles: [Vehicle]
        vReg(key: String!): [VReg]
        vRegistration(userId: Int!): [VReg]
        vRegistrations: [VReg]
    }

    schema {
        query: RootQuery
    }
`;

export default [typeDefinitions]
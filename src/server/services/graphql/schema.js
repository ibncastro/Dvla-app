const typeDefinitions = `

scalar DateTime
scalar Upload

enum Titles {
    Mr
    Mrs
    Miss
}

enum Regions {
    Accra
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

type File {
    filename: String!
    url: String!
}

    type User {
        id: Int
        title: Titles
        firstName: String
        lastName: String
        password: String
        middleName: String
        Gender: Gender
        email: String
        isEmailVerified: String
        verificationToken: String
        avatar: String
        region: Regions
        dateOfBirth: DateTime
        nationality: String
        idType: IdTypes
        idNumber: String
        houseNo: String
        mobileNo1: String
        mobileNo2: String
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
        bodyType: String
        countryOfOrigin: String
        noOfTyres: Int
        modelName: String
        vehicleUse: String
        noOfAxles: Int
        engineMadeBy: String
        noOfDoors: Int
        engineNo: String
        noOfCylinders: Int
        fuelType: String
        horsePower: String
        user: User
        reg: VReg
        image: String
    } 

    type Center {
        id: Int
        name: String
        code: String
    }

    type VReg {
        id: Int
        key: String
        status: String
        vehicleInspectionNo: String
        customsDocNo: String
        roadWorthyCert: String
        user: User
        vehicle: Vehicle
        createdAt: DateTime
        completionDate: DateTime
        center: Center
    }

    type changeOwnership {
        id: Int
        regNumber: String
        status: String
        owner: String
        ownerTel: String
        chasisNo: String
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
        getChangeOwner(userId: Int!): [changeOwnership]
        fetchByStatus(status: String): [VReg]
        allCenters: [Center]
        getCentersById(id: Int): [VReg]
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

    input changeOwnerInput {
        key: String,
        chasisNo: String,
        owner: String,
        ownerTel: String
    }

    input updateInfoInput {
        email: String
        houseNo: String
        ghanaPostCode: String
        postalAddress: String
        mobileNo1: String
        mobileNo2: String
    }

    input passwordInput {
        oldPassword: String
        newPassword: String
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
        changeOwner(
            details: changeOwnerInput
        ): changeOwnership
        updateInfo(
            details: updateInfoInput
        ): User
        changePass(
            details: passwordInput
        ): User
        changeStatus(
            id: Int!
            status: String!
        ): VReg
        uploadAvatar (
            file: Upload!
            vehicleId: Int
        ): File
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`;

export default [typeDefinitions]
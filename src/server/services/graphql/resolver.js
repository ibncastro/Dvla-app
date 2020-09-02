import Sequelize from 'sequelize';
import { GraphQLScalarType } from 'graphql'
const Op = Sequelize.Op;
import bcrypt from 'bcrypt'
import JWT from 'jsonwebtoken'

export default function resolver() {
    
    const { db } = this;
    const { User, Vehicle, VReg } = db.models;

  const resolvers = {
    User: {
      vehiclesRegistered(user, args, context){
        return user.getVRegs()
      }
    },

    VReg: {
      user(VReg, args, context){
        return VReg.getUser()
      },
      vehicle(VReg, args, context){
        return VReg.getVehicle()
      }
    },

    Vehicle: {
      user(vehicle, args, context) {
        return vehicle.getUser()
      },
      reg(vehicle, args, context){
        return vehicle.getVReg()
      }
    },

    // Auth: {
    //   user(auth, args, context) {
    //     return auth.getUser()
    //   }
    // },

    RootQuery: {
      currentUser(root, args, context) {
        return context.user;
    },
        users(root, args, context) {
            return User.findAll({
              include: [{
                model: VReg
              }]
            })
        },
        user(root, { id }, context) {
          return User.findOne({
            where: {
              id: id
            }
          })
        },
        vehicles(root, args, context) {
            return Vehicle.findAll({order: [['id', 'DESC']]})
        },
        vReg(root, { key }, context) {
          return VReg.findAll({
            where: {
              key: key
            }
          })
        },
        vehicle(root, { chasisNo }, context) {
          return Vehicle.findOne({    
            where: {
              chasisNo: chasisNo
            },                                
          })         
        },

        vRegistration(root, { userId }, context) {
          return VReg.findAll({
            where: {
              userId: userId
            }
          })
        },
        vRegistrations(root, args, context) {
          return VReg.findAll({});
        }
    },

    RootMutation: {

      login(root, {email, password}, context){
          return User.findAll({
            where:{
              email
            },
            raw: true
          }).then(async (users) => {
            if(users.length = 1) {
              const user = users[0];
              const passwordvalid = await bcrypt.compare(password, user.password);
              if(!passwordvalid) {
                throw new Error('Password does not match');
              }
              const token = JWT.sign({email, id: user.id}, "thisisasupersecretstringforyou", {
                expiresIn: '1d'
              })
              return {
                token,
                user
              }
            } else {
              throw new Error("User not found")
            }
          })
      },

      register(root, { user }, context){
        return User.findAll({
            where: {
                email: user.email
            },
            raw: true,
        }).then(async (users) => {
            if(users.length){
                throw new Error('User already Exist');
            } else {
                return bcrypt.hash(user.password, 10).then((hash) => {
                    return User.create({
                      firstName: user.firstName,
                      lastName: user.lastName,
                      middleName: user.middleName,
                      email: user.email,
                      region: user.region,
                      gender: user.gender,
                      dob: user.dob,
                      nationality: user.nationality,
                      idType: user.idType,
                      idNumber: user.idNumber,
                      mobileNo1: user.mobileNo1,
                      mobileNo2: user.mobileNo2,
                      postalAddress: user.postalAddress,
                      ghanaPostCode: user.ghanaPostCode,
                      password: hash,
                      username: user.username,
                      activated: 1,
                    }).then((newUser) => {
                      let email = user.email;
                      const token = JWT.sign(
                        { email, id: newUser.id },
                        "thisisasupersecretstringforyou",
                        { expiresIn: "1d" }
                      );
                      return {
                        token,
                        user,
                      };
                    });                                
                })
            }
        })
    },

    },

    DateTime: new GraphQLScalarType({
      name: 'DateTime',
      description: 'A valid date time value',
      parseValue: value => new Date(value),
      serialize: value => new Date(value).toISOString(),
      parseLiteral: ast => ast.value
  })

  }

    return resolvers;
}

 
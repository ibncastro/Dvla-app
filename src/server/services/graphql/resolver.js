import Sequelize from 'sequelize';
import { GraphQLScalarType } from 'graphql'
const Op = Sequelize.Op;
import bcrypt from 'bcrypt'
import JWT from 'jsonwebtoken'

import aws from 'aws-sdk';
const s3 = new aws.S3({
    signatureVersion: 'v4',
    accessKeyId: "AKIAJ54LIVEXK6FV6M6A",
    secretAccessKey: "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",
    region: 'eu-west-2',
})

export default function resolver() {

  const { db } = this;
  const { User, Vehicle, VReg, changeOwner, Center } = db.models;

  const resolvers = {
    User: {
      vehiclesRegistered(user, args, context) {
        return user.getVRegs()
      }
    },

    VReg: {
      user(VReg, args, context) {
        return VReg.getUser()
      },
      vehicle(VReg, args, context) {
        return VReg.getVehicle()
      },
      center(VReg, args, context) {
        return VReg.getCenter()
      }
    },

    Vehicle: {
      user(vehicle, args, context) {
        return vehicle.getUser()
      },
      reg(vehicle, args, context) {
        return vehicle.getVReg()
      }
    },

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
        return Vehicle.findAll({ order: [['id', 'DESC']] })
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
          },
          order: [['createdAt', 'DESC']]
        })
      },
      vRegistrations(root, args, context) {
        return VReg.findAll({});
      },
      getChangeOwner(root, { userId }, context) {
        return changeOwner.findAll({
          where: {
            userId: userId
          },
          order: [['createdAt', 'DESC']]
        })
      },

      fetchByStatus(root, { status }, context) {
        return VReg.findAll({
          where: {
            status
          },
          order: [['createdAt', 'DESC']]
        })
      },

      allCenters(root, args, context){
        return Center.findAll({})
      },

      getCentersById(root, {id}, context){
        return VReg.findAll({
          where: {
            centerId: id
          }
        })
      }

    },

    RootMutation: {

      login(root, { email, password }, context) {
        return User.findAll({
          where: {
            email
          },
          raw: true
        }).then(async (users) => {
          if (users.length = 1) {
            const user = users[0];
            const passwordvalid = await bcrypt.compare(password, user.password);
            if (!passwordvalid) {
              throw new Error('Password does not match');
            }
            const token = JWT.sign({ email, id: user.id }, "thisisasupersecretstringforyou", {
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

      changeStatus(root, { id, status }, context) {
        return VReg.update({
          status
        }, {
          where: {
            id
          }
        })
      },

      changePass(root, { details }, context) {
        return User.findOne({
          where: {
            id: context.user.id
          }
        }).then(async (user) => {
          const passValid = await bcrypt.compare(details.oldPassword, user.password);

          if (!passValid) {
            throw new Error('Old password is incorrect')
          }

          return bcrypt.hash(details.newPassword, 10).then((hash) => {
            return User.update({
              password: hash
            }, {
              where: {
                id: user.id
              }

            })
          }).then((user) => {
            return user
          })
        })
      },

      updateInfo(root, { details }, context) {
        return User.update({
          email: details.email,
          houseNo: details.houseNo,
          ghanaPostCode: details.ghanaPostCode,
          postalAddress: details.postalAddress,
          mobileNo1: details.mobileNo1,
          mobileNo2: details.mobileNo2
        }, {
          where: {
            id: context.user.id
          }
        }).then((news) => {
          return news
        })
      },

      register(root, { user }, context) {
        return User.findAll({
          where: {
            email: user.email
          },
          raw: true,
        }).then(async (users) => {
          if (users.length) {
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

      registerVehicle(root, { details }, context) {
        return Vehicle.create({
          manufacturer: details.manufacturer,
          chasisNo: details.chasisNo,
          bodyType: details.bodyType,
          modelName: details.modelName,
          noOfDoors: details.noOfDoors,
          fuelType: details.fuelType,
          userId: context.user.id
        }).then(async (newVehicle) => {
          return VReg.create({
            key: "1234444444",
            vehicleInspectionNo: details.vehicleInspectionNo,
            customsDocNo: details.customsDocNo,
            roadWorthyCert: details.roadWorthyCert,
            userId: context.user.id
          }).then(async (newReg) => {
            newVehicle.setVReg(newReg.id),
              newReg.setVehicle(newVehicle.id)
          }).then((done) => {
            return done
          })
        })
      },

      changeOwner(root, { details }, context) {
        return changeOwner.create({
          regNumber: details.key,
          chasisNo: details.chasisNo,
          owner: details.owner,
          ownerTel: details.ownerTel,
          userId: 1,
          status: "PENDING"
        }).then((newdata) => {
          return newdata
        })
      },

      async uploadAvatar(root, { file, vehicleId }, context){
        const { createReadStream, filename, mimetype, encoding } = await file;
        const stream = createReadStream()
        const bucket = 'kucbucket';
        const params = {
            Bucket: bucket,
            Key: vehicleId + '/' + filename,
            ACL: 'public-read',
            Body: stream
        };

        const response = await s3.upload(params).promise()

        return Vehicle.update({
            image: response.Location
        },{
            where: {
                id: vehicleId
            }
        }).then(() => {
            return {
                filename: filename,
                url: response.Location
            }
        });
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


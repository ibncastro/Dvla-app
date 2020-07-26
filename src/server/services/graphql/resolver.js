import Sequelize from 'sequelize';
import vreg from '../../models/vreg';

export default function resolver() {
    
    const { db } = this;
    const { User, Vehicle, VReg } = db.models;

  const resolvers = {

    RootQuery: {
        users(root, args, context) {
            return User.findAll({order: [['id', 'DESC']]})
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
    Vehicle: {
      user(vehicle, args, context) {
        return vehicle.getUser()
      }
    },
    VReg: {
      user(vReg, args, context) {
        return vReg.getUser()
        // console.log(vReg.getUser())
      },
      vehicle(vReg, args, context) {
        return vReg.getVehicle()
        // console.log(vReg.getVehicle())
      }
    },


  }

    return resolvers;
}

 
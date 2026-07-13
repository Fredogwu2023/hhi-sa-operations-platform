import Roles from "../config/roles";

const users = [
    {
        id: 1,
        username: "admin",
        password: "admin123",
        fullname: "System Administrator",
        role: Roles.ADMIN,
    },

    {
        id: 2,
        username: "manager",
        password: "manager123",
        fullname: "Provincial Manager",
        role: Roles.PROVINCIAL_MANAGER,
    },

    {
        id: 3,
        username: "coordinator",
        password: "coord123",
        fullname: "Community Coordinator",
        role: Roles.COMMUNITY_COORDINATOR,
    },

    {
        id: 4,
        username: "beneficiary",
        password: "beneficiary123",
        fullname: "Beneficiary",
        role: Roles.BENEFICIARY,
    },

    {
        id: 5,
        username: "auditor",
        password: "audit123",
        fullname: "Internal Auditor",
        role: Roles.AUDITOR,
    }
];

export default users;
// Resolvers define the technique for fetching the types defined in the
// schema.
export default {
    Query: {
        users: (parents, args, { db }, info) => db.getUsers(),
        user: (parent, args, { db }, info) => db.getUser(args),
        allTimeOff: (parent, args, { db }, info) => db.getAllTimeOff(args),
    },

    Mutation: {
        createUser: (parent, args, { db }, info) => db.createUser(args),
        requestTimeOff: (parent, args, { db }, info) => db.createTimeOff(args.requestTimeOff),
    },

    HolidayOrSickleave: {
        // Union types require to precisely determine the type to use
        __resolveType(obj, context, info) {
            if (obj.reason) {
                return 'Sickleave'
            }

            return 'Holiday'
        },
    },
}

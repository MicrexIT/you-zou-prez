// A schema is a collection of type definitions (hence "schema")
// that together define the "shape" of queries that are executed against
// your data.
import { gql } from 'apollo-server'

export default gql`
    "A user with personal informations and holidays"
    type User {
        id: ID!
        email: String!
        name: String!
        displayName: String
        holidays: [Holiday]!
        sickleaves: [Sickleave]!
    }

    "TimeOff encapsulate the essence of a holiday"
    interface TimeOff {
        "incluse starting day"
        startDate: String!
        "exclusive end day"
        endDate: String!
        status: TimeOffStatus!
        user: User
    }

    enum TimeOffStatus {
        "request is under approval"
        PENDING
        "request has been rejected"
        REJECTED
        "request has been accepted"
        ACCEPTED
        "request has been fulfilled in the past: the holidays are done"
        COMPLETED
    }

    type Holiday implements TimeOff {
        startDate: String!
        endDate: String!
        status: TimeOffStatus!
        user: User
    }

    type Sickleave implements TimeOff {
        startDate: String!
        endDate: String!
        status: TimeOffStatus!
        reason: String!
        user: User
    }

    union HolidayOrSickleave = Holiday | Sickleave

    # The "Query" type is special: it lists all of the available queries that
    # clients can execute, along with the return type for each. In this
    # case, the "users" query returns an array of zero or more Users (defined above).
    type Query {
        "retrieve the users of the platform"
        users: [User]!

        "retrieve the users of the platform"
        user(id: ID!): User

        holidayOrSickleaves(id: ID!): [HolidayOrSickleave]

        "retrieve the timeOffs with a certain status"
        allTimeOff(status: TimeOffStatus): [HolidayOrSickleave]!
    }

    input UserInput {
        "A main email for the user"
        email: String!
        "The name of the user"
        name: String!
        "The name to be displayed"
        displayName: String
    }

    input RequestTimeOffInput {
        "The user making the time off request"
        userId: ID!
        startDate: String!
        endDate: String!
        reason: String
    }

    "Mutations might involve different changes accross the schema nodes. Hence, it is useful to define a mutation response interface"
    interface MutationResponse {
        code: String!
        success: Boolean!
        message: String!
    }

    type CreateUserMutationResponse implements MutationResponse {
        code: String!
        success: Boolean!
        message: String!
        user: User
    }

    type RequestTimeOffMutationResponse implements MutationResponse {
        code: String!
        success: Boolean!
        message: String!
        user: User
    }

    type Mutation {
        createUser(user: UserInput): CreateUserMutationResponse
        requestTimeOff(requestTimeOff: RequestTimeOffInput): RequestTimeOffMutationResponse
    }
`

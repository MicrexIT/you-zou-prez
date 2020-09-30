import {gql} from "@apollo/client"


export const REQUEST_TIME_OFF = gql`
    mutation requestTimeOff($req: RequestTimeOffInput){
        requestTimeOff(requestTimeOff: $req) {
            code
            message
            success
            user {
                displayName
                sickleaves {
                    reason
                    status
                }
                holidays {
                    status
                }
            }
        }
    }
`

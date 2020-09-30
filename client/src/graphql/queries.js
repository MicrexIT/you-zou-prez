import {gql} from "@apollo/client"

export const GET_USERS = gql`
    query users {
        users {
            displayName
            email
            id
            holidays {
                startDate
                endDate
                status
            }
            sickleaves {
                startDate
                endDate
                reason
                status
            }
        }
    }
`

export const ALL_TIME_OFF = gql`
    query allTimeOff($timeOffStatus: TimeOffStatus ) {
        allTimeOff(status: $timeOffStatus) {
            ... on Holiday {
                status
                startDate
                endDate
                user {
                    displayName
                }
            }

            ... on Sickleave {
                status
                startDate
                endDate
                reason
                user {
                    displayName
                }
            }
        }
    }

`

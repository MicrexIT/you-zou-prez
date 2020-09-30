import React from "react"
import {useQuery} from "@apollo/client"
import {ALL_TIME_OFF} from "src/graphql/queries"
import {DataTable, Heading, Text} from "grommet"
import Loading from "src/components/Loading"
import Section from "src/components/Section"

export default () => {
  const {loading, error, data} = useQuery(ALL_TIME_OFF)

  if (loading) return <Loading/>
  if (error) return `Error! ${error.message}`
  console.log(data)
  const {allTimeOff} = data

  return (
    <Section>
      <Heading> Pending TimeOff Requests</Heading>
      <DataTable
        size="large"
        columns={[
          {
            property: "name",
            header: <Text>Name</Text>,
            primary: true,
            render: item => (
              <Text>{item.user.displayName}</Text>
            ),
          },
          {
            property: "startDate",
            header: "Start Date",
            render: item => (
              <Text>{item.startDate}</Text>
            ),
          },
          {
            property: "endDate",
            header: "Start Date",
            render: item => (
              <Text>{item.endDate}</Text>
            ),
          },
          {
            property: "reason",
            header: "Start Date",
            render: item => {
              return item.reason ?
                <Text>{item.reason}</Text>
                :
                <Text>Congé</Text>
            }
          }
        ]}
        data={
          allTimeOff
        }
      />
    </Section>
  )
}

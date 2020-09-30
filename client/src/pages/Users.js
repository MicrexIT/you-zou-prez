import React from "react"
import {useQuery} from "@apollo/client"
import {GET_USERS} from "src/graphql/queries"
import {Grid, Card, CardHeader, CardBody, CardFooter, Button, Text, Heading} from 'grommet'
import {ShareOption, Favorite} from 'grommet-icons'
import Loading from "src/components/Loading"
import Section from "src/components/Section"

export default () => {
  const {loading, error, data} = useQuery(GET_USERS, {pollInterval: 500})

  if (loading) return <Loading />;
  if (error) return `Error! ${error.message}`
  console.log(data)
  const {users} = data

  return (
    <Section>
      <Heading>Users</Heading>
      <Grid
        columns={['1fr', '1fr', '1fr']}
        gap="medium"
      >
        {users.map((user) => (
          <Card height="medium" width="medium" background="light-1">
            <CardHeader pad="medium"><Text size={"large"}>{user.displayName}</Text></CardHeader>
            <CardBody margin={{"bottom": "6px"}} pad="medium"><Text>Total holidays:</Text><Text weight="bold">{user.holidays.length}</Text></CardBody>
            <CardFooter pad={{horizontal: "small"}} background="light-2">
              <Button
                icon={<Favorite color="red" />}
                hoverIndicator
              />
              <Button icon={<ShareOption color="plain" />} hoverIndicator />
            </CardFooter>
          </Card>
        ))}
      </Grid>
    </Section>
  )
}

import React from "react"
import {useMutation} from "@apollo/client"
import {Box, Button, DateInput, Form, FormField, Heading, TextInput} from "grommet"
import styled from "styled-components"
import Section from "src/components/Section"
import {REQUEST_TIME_OFF} from "src/graphql/mutations"
import Loading from "src/components/Loading"

export default () => {
  const [requestTimeOff, {data, loading, error}] = useMutation(REQUEST_TIME_OFF)
  console.log(data)
  console.log(loading)
  console.log(error)

  if (loading) return <Loading/>
  if (error) return <p>An error occurred</p>

  return (
    <Section>
      <Form gap="medium" onSubmit={(data) => {
        console.log(data)
        requestTimeOff({variables: {req: data.value}})
      }}>
        <Heading> Make a new time off request</Heading>
        <Field>
          <FormField name="userId" htmlfor="textinput-id" label="User id">
            <TextInput id="textinput-id" name="userId"/>
          </FormField>
        </Field>
        <Field>
          <FormField name="startDate" htmlfor="startDate-id" label="Start Date">
            <DateInput
              format="dd/mm/yyyy"
              id="startDate-id"
              name="startDate"
              value={(new Date()).toISOString()}
            />
          </FormField>
        </Field>
        <Field>
          <FormField name="endDate" htmlfor="endDate-id" label="End Date">
            <DateInput
              format="mm/dd/yyyy"
              id="endDate-id"
              name="endDate"
              value={(new Date()).toISOString()}
            />
          </FormField>
        </Field>
        <Field>
          <FormField name="reason" htmlfor="reason-id" label="Reason">
            <TextInput id="reason-id" name="reason"/>
          </FormField>
        </Field>
        <Field direction="row" gap="medium">
          <Button type="submit" primary label="Submit"/>
          <Button type="reset" label="Reset"/>
        </Field>
      </Form>
    </Section>
  )
}

const Field = styled(Box)`
   margin-bottom: 16px;

`

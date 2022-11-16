import * as React from "react"
import { Container, Space } from "./ui"
import { StaticQuery, graphql } from "gatsby"

export default function Iframe(props) {
  return (
    <Container radius="button" width="tight">
      <StaticQuery
        query={graphql`
          query {
            contentfulIframe {
              url
              heading
              id
            }
          }
        `}
        render={(data) => (
          <>
            <Space size="4" />
            <Container width="tight" background="primaryContainer">
              <iframe
                title="contact"
                width="100%"
                height="780px"
                style={{ border: "none", margin: "auto" }}
                src={data.contentfulIframe.url}
              />
            </Container>
            <Space size="4" />
          </>
        )}
      ></StaticQuery>
    </Container>
  )
}

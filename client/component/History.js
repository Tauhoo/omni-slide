import React from "react"
import { Breadcrumb } from "antd"
import Link from "next/link"

export default ({ data }) => (
  <Breadcrumb>
    {data.map(([name, src], index) => (
      <Breadcrumb.Item key={index}>
        {typeof src === "string" ? (
          <Link href={src}>
            <a>{name}</a>
          </Link>
        ) : (
          name
        )}
      </Breadcrumb.Item>
    ))}
  </Breadcrumb>
)
